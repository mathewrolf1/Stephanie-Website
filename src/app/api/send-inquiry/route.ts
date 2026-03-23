import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, phone, email, eventDate, eventType, bookingStage, location, message } =
    await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const subject = `Photography Inquiry — ${eventType || "General"}`;
  const body = [
    `Hi Stephanie!`,
    ``,
    `I'm reaching out through your website to inquire about photography services.`,
    ``,
    `────────────────────────`,
    `  INQUIRY DETAILS`,
    `────────────────────────`,
    ``,
    `  Name:           ${fullName}`,
    `  Phone:          ${phone}`,
    `  Email:          ${email}`,
    `  Event Date:     ${eventDate || "—"}`,
    `  Looking For:    ${eventType || "—"}`,
    `  Booking Stage:  ${bookingStage || "—"}`,
    `  Location:       ${location || "—"}`,
    ``,
    `────────────────────────`,
    `  MESSAGE`,
    `────────────────────────`,
    ``,
    message,
    ``,
    `────────────────────────`,
    `Sent via stephanieguerraphoto.com`,
  ].join("\n");

  await transporter.sendMail({
    from: `"Stephanie Guerra Photography" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject,
    text: body,
  });

  return NextResponse.json({ ok: true });
}
