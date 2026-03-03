"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "roberthnattrassiii@gmail.com";

async function sendFailureAlert(
  name: string,
  email: string,
  company: string,
  message: string,
  errorDetail: string
) {
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      subject: "[ALERT] Contact form failed to send",
      html: `
        <h2>Contact form send failure</h2>
        <p>The following submission could not be delivered. Please follow up manually.</p>
        <hr />
        <p><strong>Error:</strong> ${errorDetail}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch {
    // Silently fail - we don't want to mask the original error
  }
}

export async function sendContactEmail(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { error: "Email service is not configured. Please add RESEND_API_KEY to your environment." };
  }
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Contact from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      await sendFailureAlert(name, email, company, message, error.message);
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    const errorDetail = err instanceof Error ? err.message : "Unknown error";
    await sendFailureAlert(name, email, company, message, errorDetail);
    return { error: "Failed to send message. Please try again." };
  }
}
