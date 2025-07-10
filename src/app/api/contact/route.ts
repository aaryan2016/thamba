import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		// 1. Destructure the hCaptcha token along with your other form fields
		const { firstName, lastName, email, message, hCaptchaToken } = body;

		// --- hCaptcha Verification Start ---
		// 2. Check if the token exists
		if (!hCaptchaToken) {
			return NextResponse.json(
				{ message: "hCaptcha token not found." },
				{ status: 400 },
			);
		}

		// 3. Prepare the verification request to hCaptcha's API
		const params = new URLSearchParams();
		params.append("response", hCaptchaToken);
		params.append("secret", process.env.HCAPTCHA_SECRET_KEY || "");

		const hCaptchaResponse = await fetch(
			"https://api.hcaptcha.com/siteverify",
			{
				method: "POST",
				body: params,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		);

		const verificationData = await hCaptchaResponse.json();

		// 4. If verification fails, stop and return an error
		if (!verificationData.success) {
			console.error(
				"hCaptcha verification failed:",
				verificationData["error-codes"],
			);
			return NextResponse.json(
				{ message: "hCaptcha verification failed. Please try again." },
				{ status: 422 }, // Unprocessable Entity
			);
		}
		// --- hCaptcha Verification End ---

		// 5. If verification is successful, proceed with your original logic
		console.log(
			"hCaptcha verified successfully! Proceeding to send Telegram message.",
		);

		// Get IST time
		const istDate = new Date().toLocaleString("en-IN", {
			timeZone: "Asia/Kolkata",
			hour12: true,
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});

		// Truncate long messages
		const maxMessageLength = 300;
		const trimmedMessage =
			message && message.length > maxMessageLength
				? `${message.slice(0, maxMessageLength)}…`
				: message || "No message provided";

		const text = `
📨 *New Contact Inquiry*

🗓 *Received At:* ${istDate}

👤 *Name:* ${firstName} ${lastName}
✉️ *Email:* ${email}
💬 *Message:*
${trimmedMessage}
`;

		const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
		const telegramChatId = process.env.TELEGRAM_CHAT_ID;

		const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

		const telegramResponse = await fetch(telegramUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: telegramChatId,
				text,
				parse_mode: "Markdown",
			}),
		});

		// Optional: Check if the telegram message was sent successfully
		if (!telegramResponse.ok) {
			const telegramError = await telegramResponse.json();
			console.error("Failed to send Telegram message:", telegramError);
			// You might want to return a specific error here
		}

		// Return a success response that the front-end can handle
		return NextResponse.json({ message: "Form submitted successfully!" });
	} catch (error) {
		console.error("API Route Error:", error);
		return NextResponse.json(
			{ message: "An internal server error occurred." },
			{ status: 500 },
		);
	}
}
