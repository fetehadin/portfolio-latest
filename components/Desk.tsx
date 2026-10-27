"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const DESK = { light: "#1F2B29", dark: "#0E1413" };
const DRIFT = 40; // max glow offset in px

/** The page background: two soft glows that drift slightly toward the pointer, plus film grain. */
export default function Desk() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let frame = 0;

    function onMove(event: PointerEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = (event.clientX / window.innerWidth - 0.5) * DRIFT;
        const y = (event.clientY / window.innerHeight - 0.5) * DRIFT;
        root.style.setProperty("--gx", `${x.toFixed(1)}px`);
        root.style.setProperty("--gy", `${y.toFixed(1)}px`);
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Keep the browser chrome colour in step with a manually chosen theme.
  useEffect(() => {
    if (!resolvedTheme) return;
    const color = resolvedTheme === "dark" ? DESK.dark : DESK.light;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", color);
    });
  }, [resolvedTheme]);

  return <div className="desk" aria-hidden="true" />;
}
