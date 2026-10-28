"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Send, X } from "lucide-react";
import { nav } from "@/content/site";

/** Centered section links with a scroll-spy highlight (desktop). */
export function HeaderNav({ base }: { base: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (base) return;
    const sections = nav.map((item) => document.querySelector<HTMLElement>(`section#${item.id}`)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [base]);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {nav.map((item) => (
          <li key={item.id}>
            <a href={`${base}#${item.id}`} className="nav-link" aria-current={active === item.id ? "true" : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Phone and tablet menu: a panel that drops under the header bar. */
export function MobileMenu({ base }: { base: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="icon-btn border border-rule"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
      </button>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul className="grid">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`${base}#${item.id}`} className="mobile-link" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={`${base}#contact`} className="btn btn-primary mt-3 w-full" onClick={() => setOpen(false)}>
          <Send className="size-4" aria-hidden="true" />
          Contact me
        </a>
      </div>
    </div>
  );
}
