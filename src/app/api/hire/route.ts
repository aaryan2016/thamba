import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
        firstName,
        lastName,
        email,
        phone,
        position,
        cvUrl,  
        portfolioUrl,
        comments} = body;

        // Get current date/time in IST (UTC+5:30)
const istDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  

    // Truncate comments if too long
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
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
