import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "Unknown IP";

    if ("check" in data) {
      data.ip = ip;
    }

    // Build HTML table from data object
    const rows = Object.entries(data)
      .map(
        ([key, value]) => `
          <tr>
            <td style="padding:8px; border:1px solid #ddd; font-weight:bold; text-transform:capitalize;">${key}</td>
            <td style="padding:8px; border:1px solid #ddd;">${value}</td>
          </tr>`
      )
      .join("");

    const htmlTemplate = `
      <div style="font-family:Arial,sans-serif; color:#333;">
        <h2 style="color:#0d2d62;">New Form Submission</h2>
        <table style="border-collapse:collapse; width:100%; max-width:600px;">
          ${rows}
        </table>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Notifier" <${process.env.MAILER_EMAIL}>`,
      to: process.env.MAILER_RECEIVER, // add receiver email in .env
      subject: "New Submission Received",
      html: htmlTemplate,
    });

    // Send to Telegram
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const textMessage =
      "📩 *New Submission Received:*\n\n" +
      Object.entries(data)
        .map(([key, value]) => `*${key}:* ${value}`)
        .join("\n");

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: textMessage,
        parse_mode: "Markdown",
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: "Sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send" }),
      { status: 500 }
    );
  }
}
