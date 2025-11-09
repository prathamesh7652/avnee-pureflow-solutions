import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

// Handler: accepts POST JSON body and forwards it as an email using SMTP.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const body = req.body ?? {};

  // Server-side validation using zod
  const EnquirySchema = z.object({
    companyName: z.string().min(1, "Company name is required"),
    contactName: z.string().min(1, "Contact person is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    location: z.string().min(1, "Location is required"),
    industry: z.string().min(1, "Industry is required"),
    message: z.string().min(10, "Please provide at least 10 characters"),
  });

  const parseResult = EnquirySchema.safeParse(body);
  if (!parseResult.success) {
    const firstError = parseResult.error.errors[0];
    const errMsg = firstError?.message || "Invalid request payload";
    return res.status(400).json({ success: false, message: errMsg });
  }

  const { companyName, contactName, email, phone, location, industry, message } = parseResult.data;

  // Validate required environment variables for SMTP
  const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "TO_EMAIL"];
  const missing = requiredEnv.filter((k) => !process.env[k]);
  if (missing.length) {
    const msg = `Missing required env vars: ${missing.join(", ")}`;
    console.error(msg);
    return res.status(500).json({ success: false, message: msg });
  }

  try {
    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter connectivity/auth before sending
    try {
      // .verify may fail for auth/connectivity issues — handle separately to provide clearer errors
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return res.status(502).json({ success: false, message: "SMTP verification failed. Check SMTP credentials and network connectivity." });
    }

    // Email content
    const mailOptions = {
      from: `"Avnee Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Enquiry from ${companyName}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Contact Person:</b> ${contactName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Message:</b> ${message}</p>
        <hr />
        <p style="color:gray;">This enquiry was submitted via Avnee website form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    // Provide more helpful error messages during development; keep generic in production
    const errMessage = (error instanceof Error && error.message) ? error.message : String(error);
    console.error("❌ Error sending email:", errMessage);
    const responseMessage = process.env.NODE_ENV === "development" ? errMessage : "Failed to send email.";
    return res.status(500).json({ success: false, message: responseMessage });
  }
}
