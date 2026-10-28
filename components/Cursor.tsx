"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, summary, select, label[for], [role='button']";
const TEXT = "input, textarea, [contenteditable='true']";

/**
 * A small square cursor with a soft glow, for mouse users only. It eases toward the
 * pointer, becomes an outline over anything clickable and hides over text fields.
 * It also feeds the pointer position to the background grid's spotlight.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cursor = ref.current;
    if (!cursor) return;

    const root = document.documentElement;
    const backdrop = document.querySelector<HTMLElement>(".backdrop");
    const ease = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.3;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;

    root.classList.add("has-cursor");

    function tick() {
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      cursor!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.2 ? requestAnimationFrame(tick) : 0;
    }

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!cursor!.hasAttribute("data-visible")) {
        x = targetX;
        y = targetY;
        cursor!.setAttribute("data-visible", "");
      }
      const target = event.target instanceof Element ? event.target : null;
      cursor!.dataset.mode = target?.closest(TEXT) ? "text" : target?.closest(INTERACTIVE) ? "link" : "";
      backdrop?.style.setProperty("--mx", `${targetX}px`);
      backdrop?.style.setProperty("--my", `${targetY}px`);
      if (!frame) frame = requestAnimationFrame(tick);
    }

    const hide = () => cursor.removeAttribute("data-visible");
    const down = () => cursor.setAttribute("data-down", "");
    const up = () => cursor.removeAttribute("data-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div ref={ref} className="cursor no-print" aria-hidden="true">
      <span className="cursor-glow" />
      <span className="cursor-dot" />
    </div>
  );
}
