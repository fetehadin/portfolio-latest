"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Icons swap via the .dark class, so there is no hydration flash or mounted check. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Switch between light and dark theme"
      title="Switch theme (t)"
      className="no-print inline-flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  );
}
