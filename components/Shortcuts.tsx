"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { nav, profile } from "@/content/cv";

const HELP: [string, string][] = [
  ["1–6", "jump to a section"],
  ["j / k", "next / previous section"],
  ["t", "switch light / dark"],
  ["c", "copy my email"],
  ["p", "print the CV"],
  ["?", "show this list"],
];

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

function scrollToSection(el: Element) {
  el.scrollIntoView({ block: "start" });
  // Move focus with the view so keyboard and screen-reader users land in the section.
  const heading = el.querySelector("h2");
  if (heading instanceof HTMLElement) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
}

export default function Shortcuts() {
  const { resolvedTheme, setTheme } = useTheme();
  const helpRef = useRef<HTMLDialogElement>(null);
  const [toast, setToast] = useState("");

  const showToast = useCallback((text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(""), 1800);
  }, []);

  useEffect(() => {
    function step(direction: 1 | -1) {
      const sections = Array.from(document.querySelectorAll("main section[id]"));
      const offset = 32;
      const current = sections.findLastIndex((s) => s.getBoundingClientRect().top <= offset);
      const next = Math.min(Math.max(current + direction, 0), sections.length - 1);
      if (sections[next]) scrollToSection(sections[next]);
    }

    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTyping(event.target) || document.querySelector("dialog[open]")) return;

      const target = nav.find((item) => item.key === event.key);
      if (target) {
        const el = document.getElementById(target.id);
        if (el) scrollToSection(el);
        return;
      }

      switch (event.key) {
        case "j":
          step(1);
          break;
        case "k":
          step(-1);
          break;
        case "t":
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          break;
        case "c":
          navigator.clipboard
            .writeText(profile.email)
            .then(() => showToast("email copied"))
            .catch(() => showToast(profile.email));
          break;
        case "p":
          window.print();
          break;
        case "?":
          helpRef.current?.showModal();
          break;
        default:
          return;
      }
      event.preventDefault();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resolvedTheme, setTheme, showToast]);

  return (
    <>
      <button
        type="button"
        onClick={() => helpRef.current?.showModal()}
        className="no-print text-muted hover:text-accent"
      >
        press <span className="kbd">?</span> for shortcuts
      </button>

      <dialog
        ref={helpRef}
        className="sheet-dialog w-[22rem]"
        aria-labelledby="shortcuts-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="shortcuts-title" className="font-sans font-semibold">
            Keyboard
          </h2>
          <form method="dialog">
            <button className="label hover:text-accent">close · esc</button>
          </form>
        </div>
        <dl className="mt-3 grid grid-cols-[5rem_1fr] gap-y-1.5">
          {HELP.map(([keys, action]) => (
            <div key={keys} className="contents">
              <dt>
                <span className="kbd">{keys}</span>
              </dt>
              <dd className="text-muted">{action}</dd>
            </div>
          ))}
        </dl>
      </dialog>

      <div role="status" aria-live="polite" className={toast ? "toast" : "sr-only"}>
        {toast}
      </div>
    </>
  );
}
