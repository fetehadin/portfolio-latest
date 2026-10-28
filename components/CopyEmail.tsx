"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/site";

/** The email as visible text, plus a copy button. */
export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      <a href={`mailto:${profile.email}`} className="break-all">
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        title="Copy email (c)"
        className="no-print inline-flex min-h-8 items-center gap-1.5 rounded-md border border-rule px-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        <span className="sr-only"> email address</span>
      </button>
    </span>
  );
}
