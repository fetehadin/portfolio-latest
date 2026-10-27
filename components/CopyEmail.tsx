"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { profile } from "@/content/cv";

export default function CopyEmail() {
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
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email address copied" : `Copy email address ${profile.email}`}
      title="Copy email (c)"
      className="sans inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
    >
      {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Mail className="size-3.5" aria-hidden="true" />}
      {copied ? "Copied" : "Email"}
    </button>
  );
}
