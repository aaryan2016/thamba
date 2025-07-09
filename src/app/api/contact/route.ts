import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName , email, message } = body;
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

👤 *Name:* ${firstName } ${lastName}
✉️ *Email:* ${email}
💬 *Message:*
${trimmedMessage}
`;


    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
