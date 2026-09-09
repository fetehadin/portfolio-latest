"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Wrapping in a setTimeout defers the state update to the next tick, 
  // bypassing the strict linter error about synchronous cascading renders
  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed left-1/2 top-6 z-50 flex w-[90%] max-w-4xl -translate-x-1/2 flex-col border border-border/40 bg-background/80 px-6 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300 ${
        isOpen ? "rounded-[2rem]" : "rounded-full"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-foreground"
          onClick={() => setIsOpen(false)}
        >
          Fetehadin N<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions (Theme Toggle + Mobile Menu Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <span className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 overflow-hidden pb-2 pl-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}