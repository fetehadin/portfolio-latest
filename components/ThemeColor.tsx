"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const COLORS = { light: "#f5f8f3", dark: "#1d2320" };

/** Keeps the browser chrome colour in step when the theme is chosen manually. */
export default function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", COLORS[resolvedTheme]);
    });
  }, [resolvedTheme]);

  return null;
}
