import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = "akyriakouu@gmail.com";
const FROM_EMAIL = "Jawda LTD <noreply@zeropoint.company>";

const SERVICE_LABELS: Record<string, string> = {
  "fire-protection": "Fire Protection",
  "epoxy-products": "Epoxy Products",
  construction: "Construction & Maintenance",
  vehicles: "Vehicles & Machinery",
  electrical: "Electrical Installations",
  consulting: "Technical Consulting",
  other: "Other",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

function buildConfirmationEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="background:#0a0a0a;padding:32px 40px;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">Jawda LTD</h1>
    </div>
    <div style="padding:40px;">
      <h2 style="margin:0 0 8px;color:#0a0a0a;font-size:20px;font-weight:600;">Thank you, ${data.name}!</h2>
      <p style="margin:0 0 24px;color:#52525b;font-size:15px;line-height:1.6;">
        We've received your message and our team will review it shortly. You can expect a reply within 1–2 business days.
      </p>
      <div style="background:#f9fafb;border-radius:8px;padding:20px 24px;margin-bottom:24px;">
        <p style="margin:0 0 4px;color:#71717a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Service</p>
        <p style="margin:0 0 16px;color:#0a0a0a;font-size:14px;">${SERVICE_LABELS[data.service] || data.service || "Not specified"}</p>
        <p style="margin:0 0 4px;color:#71717a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Your Message</p>
        <p style="margin:0;color:#0a0a0a;font-size:14px;line-height:1.5;white-space:pre-wrap;">${data.message}</p>
      </div>
      <p style="margin:0;color:#a1a1aa;font-size:13px;">
        If you didn't submit this form, you can safely ignore this email.
      </p>
    </div>
    <div style="padding:20px 40px;border-top:1px solid #f4f4f5;">
      <p style="margin:0;color:#a1a1aa;font-size:12px;text-align:center;">
        &copy; ${new Date().getFullYear()} Jawda LTD. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildAdminNotificationEmail(data: ContactFormData): string {
  const rows = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone || "—" },
    { label: "Company", value: data.company || "—" },
    { label: "Service", value: SERVICE_LABELS[data.service] || data.service || "—" },
  ];

  const detailRows = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 16px;color:#71717a;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top;">${r.label}</td>
        <td style="padding:10px 16px;color:#0a0a0a;font-size:14px;">${r.value}</td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="background:#0a0a0a;padding:32px 40px;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">New Contact Form Submission</h1>
    </div>
    <div style="padding:40px;">
      <table style="width:100%;border-collapse:collapse;">
        <tbody>
          ${detailRows}
        </tbody>
      </table>
      <div style="margin-top:24px;background:#f9fafb;border-radius:8px;padding:20px 24px;">
        <p style="margin:0 0 8px;color:#71717a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
        <p style="margin:0;color:#0a0a0a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
      </div>
      <div style="margin-top:24px;">
        <a href="mailto:${data.email}" style="display:inline-block;background:#0a0a0a;color:#ffffff;padding:10px 24px;border-radius:8px;font-size:14px;font-weight:500;text-decoration:none;">
          Reply to ${data.name}
        </a>
      </div>
    </div>
    <div style="padding:20px 40px;border-top:1px solid #f4f4f5;">
      <p style="margin:0;color:#a1a1aa;font-size:12px;text-align:center;">
        Submitted at ${new Date().toLocaleString("en-GB", { timeZone: "Europe/Dublin" })}
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const [confirmationResult, notificationResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: body.email,
        subject: "Thank you for contacting Jawda LTD",
        html: buildConfirmationEmail(body),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New enquiry from ${body.name}`,
        html: buildAdminNotificationEmail(body),
        replyTo: body.email,
      }),
    ]);

    if (confirmationResult.error || notificationResult.error) {
      console.error("Resend error:", confirmationResult.error || notificationResult.error);
      return NextResponse.json(
        { error: "Failed to send emails. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
