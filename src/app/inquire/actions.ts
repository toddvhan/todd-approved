"use server";

export type InquiryState = {
  ok: boolean;
  error?: string;
};

function cleanLine(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitInquiry(
  _prev: InquiryState | null,
  formData: FormData,
): Promise<InquiryState> {
  if (cleanLine(formData.get("company"), 80)) {
    return { ok: true };
  }

  const name = cleanLine(formData.get("name"), 80);
  const email = cleanLine(formData.get("email"), 120).toLowerCase();
  const message = String(formData.get("message") ?? "")
    .trim()
    .slice(0, 4000);
  const watch = cleanLine(formData.get("watch"), 120);

  if (name.length < 2) {
    return { ok: false, error: "Add your name." };
  }
  if (!isEmail(email)) {
    return { ok: false, error: "Add a real email so I can reply." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Write a little more in the message." };
  }

  const to = process.env.INQUIRY_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !apiKey) {
    return {
      ok: false,
      error: "This form is not wired up yet. Try again later.",
    };
  }

  const subject = watch
    ? `Watch inquiry: ${watch}`
    : "Inquiry from Todd V Approved";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    watch ? `Watch: ${watch}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Todd V Approved <beth.t@example.com>",
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: "Could not send that. Wait a moment and try again.",
    };
  }

  return { ok: true };
}
