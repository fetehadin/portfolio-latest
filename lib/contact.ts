// Shared by the contact form (instant feedback) and /api/contact (the real check).

export type ContactInput = { name?: string; contact?: string; message?: string; company?: string };
export type ContactErrors = Partial<Record<"contact" | "message", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEGRAM = /^@[A-Za-z0-9_]{5,32}$/;

export function validateContact({ contact = "", message = "" }: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  const reach = contact.trim();
  const body = message.trim();

  if (!reach) errors.contact = "Add an email address or Telegram handle so I can reply.";
  else if (!EMAIL.test(reach) && !TELEGRAM.test(reach))
    errors.contact = "That doesn't look like an email address or a Telegram handle like @name.";

  if (!body) errors.message = "Write a short message.";
  else if (body.length < 10) errors.message = "A little more detail, please (at least 10 characters).";
  else if (body.length > 5000) errors.message = "Please keep it under 5,000 characters.";

  return errors;
}

export function isEmail(value: string) {
  return EMAIL.test(value.trim());
}
