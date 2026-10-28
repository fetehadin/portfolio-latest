"use client";

import { FormEvent, useState } from "react";
import { validateContact, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";

/** Posts to the Resend route at /api/contact. Validates on submit, then per field as you fix it. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = read(form);
    const found = validateContact(values);
    setSubmitted(true);
    setErrors(found);

    if (Object.keys(found).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Failed to send");
      form.reset();
      setSubmitted(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(event: FormEvent<HTMLFormElement>) {
    if (submitted) setErrors(validateContact(read(event.currentTarget)));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  }

  const describedBy = (field: keyof ContactErrors) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} noValidate className="grid max-w-xl gap-5">
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold">
          Name <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name" maxLength={100} className="field" />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="contact" className="text-sm font-semibold">
          Your email or Telegram handle
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={200}
          aria-invalid={errors.contact ? true : undefined}
          aria-describedby={describedBy("contact")}
          className="field"
        />
        {errors.contact && (
          <p id="contact-error" className="text-sm text-danger">
            {errors.contact}
          </p>
        )}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className="field resize-y"
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={status === "error" ? "text-danger" : "text-accent"}>
          {status === "success" && "Thanks! Your message is on its way. I'll reply within a day."}
          {status === "error" && "That didn't send. Please email me directly instead."}
        </p>
      </div>
    </form>
  );
}
