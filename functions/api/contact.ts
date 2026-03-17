import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

interface Env {
  CONTACT_EMAIL?: string;
  CONTACT_SENDER?: string;
  CONTACT_SEND: {
    send: (message: EmailMessage) => Promise<void>;
  };
}

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = (await context.request.json()) as ContactPayload;

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();
    const company = String(body?.company || "").trim(); // hidden honeypot field

    if (company) {
      return json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return json(
        { success: false, message: "Missing required fields." },
        400
      );
    }

    if (!isValidEmail(email)) {
      return json(
        { success: false, message: "Invalid email address." },
        400
      );
    }

    if (name.length > 120 || email.length > 200 || subject.length > 200 || message.length > 5000) {
      return json(
        { success: false, message: "One or more fields are too long." },
        400
      );
    }

    const recipient = context.env.CONTACT_EMAIL || "info@nordictiempolento.com";
    const sender =
      context.env.CONTACT_SENDER || "noreply@nordictiempolento.com";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const now = new Date().toISOString();

    const msg = createMimeMessage();

    msg.setSender({
      name: "Nordic Tiempo Lento Website",
      addr: sender,
    });

    msg.setRecipient(recipient);
    msg.setSubject(`Website contact: ${subject}`);

    msg.addMessage({
      contentType: "text/plain",
      data: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
        "",
        `Received: ${now}`,
      ].join("\n"),
    });

    msg.addMessage({
      contentType: "text/html",
      data: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New contact form submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Received:</strong> ${escapeHtml(now)}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>Message:</strong></p>
          <div>${safeMessage}</div>
        </div>
      `,
    });

    const emailMessage = new EmailMessage(sender, recipient, msg.asRaw());

    await context.env.CONTACT_SEND.send(emailMessage);

    return json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";
    console.error("Contact form send failed:", message);
    return json(
      { success: false, message: "Server error while sending message." },
      500
    );
  }
};
