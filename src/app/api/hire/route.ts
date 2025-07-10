import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		// 1. Destructure the hCaptcha token from the request body
		const {
			firstName,
			lastName,
			email,
			phone,
			position,
			cvUrl,
			portfolioUrl,
			comments,
			hCaptchaToken, // The token from the front-end
		} = body;

		// --- hCaptcha Verification Logic ---
		// 2. Verify the token
		if (!hCaptchaToken) {
			return NextResponse.json(
				{ message: "hCaptcha token not found." },
				{ status: 400 },
			);
		}

		const params = new URLSearchParams();
		params.append("response", hCaptchaToken);
		params.append("secret", process.env.HCAPTCHA_SECRET_KEY || ""); // Use your secret key

		const hCaptchaResponse = await fetch(
			"https://api.hcaptcha.com/siteverify",
			{
				method: "POST",
				body: params,
			},
		);
		const verificationData = await hCaptchaResponse.json();

		// 3. If verification fails, return an error and stop
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
		// --- Verification End ---

		// 4. If verification succeeds, continue with your existing logic
		console.log("hCaptcha verified! Sending job application to Telegram.");

		// Get current date/time in IST
		const istDate = new Date().toLocaleString("en-IN", {
			timeZone: "Asia/Kolkata",
			hour12: true,
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});

		// Truncate comments
		const maxCommentLength = 300;
		const trimmedComments =
			comments && comments.length > maxCommentLength
				? `${comments.slice(0, maxCommentLength)}…`
				: comments || "None";

		const text = `
📥 *New Job Application Received!*

🗓 *Received At:* ${istDate}

👤 *Name:* ${firstName} ${lastName}
✉️ *Email:* ${email}
📞 *Phone:* ${phone || "N/A"}
💼 *Position Applied For:* ${position}

📄 *CV:* ${cvUrl ? `[View CV](${cvUrl})` : "Not provided"}
🌐 *Portfolio:* ${portfolioUrl ? `[View Portfolio](${portfolioUrl})` : "Not provided"}

📝 *Additional Comments:*
${trimmedComments}
`;

		const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
		const telegramChatId = process.env.TELEGRAM_CHAT_ID;

		const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

		await fetch(telegramUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: telegramChatId,
				text,
				parse_mode: "Markdown",
			}),
		});

		return NextResponse.json({
			message: "Application submitted successfully!",
		});
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ message: "Failed to send message" },
			{ status: 500 },
		);
	}
}
