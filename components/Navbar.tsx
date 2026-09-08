"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <nav className="fixed left-1/2 top-6 z-50 flex w-[90%] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-border/40 bg-background/70 px-6 py-3.5 shadow-sm backdrop-blur-md transition-all">
      <a
        href="#"
        className="text-xl font-extrabold tracking-tight text-foreground"
      >
        Fetehadin<span className="text-primary">.</span>
      </a>

      <div className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
        <a href="#about" className="transition-colors hover:text-primary">
          About
        </a>
        <a
          href="#experience"
          className="transition-colors hover:text-primary"
        >
          Experience
        </a>
        <a
          href="#education"
          className="transition-colors hover:text-primary"
        >
          Education
        </a>
        <a
          href="#projects"
          className="transition-colors hover:text-primary"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-primary"
        >
          Contact
        </a>
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle theme"
      >
        {mounted ? (
          theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )
        ) : (
          <div className="h-[18px] w-[18px]" />
        )}
      </button>
    </nav>
  );
}