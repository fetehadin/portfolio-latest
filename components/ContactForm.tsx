"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

/** Posts to the existing Resend route at /api/contact. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: formData.get("contact"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="no-print prose-col mt-5 grid gap-3">
      <div className="grid gap-1">
        <label htmlFor="contact" className="label">
          Your email or @telegram
        </label>
        <input id="contact" name="contact" type="text" autoComplete="email" required className="field" />
      </div>

      <div className="grid gap-1">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className="field resize-y" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-[2px] border border-ink px-3 py-1 font-sans font-semibold transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        <p role="status" className={status === "error" ? "text-[#a33a2a] dark:text-[#e38b7a]" : "text-accent"}>
          {status === "success" && "Sent. I'll get back to you soon."}
          {status === "error" && "Couldn't send that — please email me instead."}
        </p>
      </div>
    </form>
  );
}
