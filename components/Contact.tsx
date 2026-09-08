"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contact = formData.get("contact");
    const message = formData.get("message");

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer
      id="contact"
      className="w-full border-t border-border/40 bg-[#F2EFE9] px-6 py-12 dark:bg-[#161211] md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-16 grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-12">
          <div className="flex min-w-0 flex-col items-start text-left">
            <h5 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Let&apos;s Connect
            </h5>

            <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Ready to bring your <br className="hidden sm:block" />
              next <span className="font-serif italic text-primary">vision</span>{" "}
              to life?
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-foreground/70">
              I&apos;m currently open to new opportunities and collaborations.
              Drop me a text here and I&apos;ll get back to you.
            </p>
          </div>

          <div className="flex w-full flex-col items-start justify-center pt-2">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 md:ml-auto md:max-w-md"
            >
              <input
                name="contact"
                type="text"
                placeholder="Your email or @telegram username"
                className="cursor-target w-full rounded-md border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-all placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                className="cursor-target w-full resize-none rounded-md border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-all placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-target mt-2 inline-flex items-center justify-center gap-2 self-start rounded-md bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-primary">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-destructive">
                  Failed to send the message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mb-10 h-px w-full bg-border/80" />

        <div className="flex flex-col gap-6">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
            <h3 className="w-full shrink-0 text-center text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:w-auto lg:text-left">
              Nezira W<span className="text-primary">.</span>
            </h3>

            <div className="flex flex-1 flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/50">
              <a href="#about" className="cursor-target transition-colors hover:text-primary">About</a>
              <a href="#experience" className="cursor-target transition-colors hover:text-primary">Experience</a>
              <a href="#projects" className="cursor-target transition-colors hover:text-primary">Projects</a>
            </div>

            <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-3 lg:w-auto lg:justify-end">
              <SocialLink href="https://t.me/Nezira_worku_ali" label="Telegram">
                <TelegramIcon />
              </SocialLink>

              <SocialLink href="https://www.linkedin.com/in/neziraworkuali" label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>

              <SocialLink href="https://x.com/Nezira_Worku" label="X">
                <TwitterIcon />
              </SocialLink>

              <SocialLink href="https://github.com/Jennah198" label="GitHub">
                <GithubIcon />
              </SocialLink>

              <SocialLink href="mailto:neziraworku198@gmail.com" label="Email">
                <Mail className="h-5 w-5" />
              </SocialLink>

              <SocialLink href="tel:+251900004848" label="Phone">
                <Phone className="h-5 w-5" />
              </SocialLink>

            </div>
          </div>

          <div className="flex flex-col items-center justify-center pt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/50">
            <p className="w-full text-center">
              © 2026 NEZIRA WORKU · CRAFTED WITH LOVE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="cursor-target flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary"
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2.774 22.222 0h.003z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm5.55 8.531-1.97 9.294c-.148.658-.533.82-1.08.51l-2.986-2.203-1.44 1.387c-.159.159-.293.293-.6.293l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.12l-6.872 4.326-2.96-.924c-.64-.203-.654-.64.135-.947l11.57-4.46c.538-.196 1.006.128.803.92z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.925H5.051z" />
    </svg>
  );
}