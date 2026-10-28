"use client";

import { useSyncExternalStore } from "react";

export const ACCENTS = ["teal", "amber", "blue", "rust"] as const;
type Accent = (typeof ACCENTS)[number];

/** Runs in <head> before paint so a saved accent never flashes the default. */
export const accentScript = `try{var a=localStorage.getItem("accent");if(${JSON.stringify(ACCENTS)}.indexOf(a)>0)document.documentElement.dataset.accent=a}catch(e){}`;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-accent"] });
  return () => observer.disconnect();
}

function getAccent(): Accent {
  const value = document.documentElement.dataset.accent as Accent | undefined;
  return value && ACCENTS.includes(value) ? value : "teal";
}

/** A square of the current accent color; each click moves to the next one. */
export default function AccentSwatch() {
  // The <html> attribute is the source of truth; null on the server.
  const accent = useSyncExternalStore(subscribe, getAccent, () => null);

  function next() {
    const value = ACCENTS[(ACCENTS.indexOf(accent ?? "teal") + 1) % ACCENTS.length];
    if (value === "teal") delete document.documentElement.dataset.accent;
    else document.documentElement.dataset.accent = value;
    try {
      localStorage.setItem("accent", value);
    } catch {
      // Private mode: the choice just isn't remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={next}
      className="icon-btn"
      aria-label={accent ? `Accent color: ${accent}. Change accent color` : "Change accent color"}
      title="Change accent color"
    >
      <span className="swatch" aria-hidden="true" />
    </button>
  );
}
