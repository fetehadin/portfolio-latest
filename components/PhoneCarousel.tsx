"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Shot } from "@/content/site";

type Props = {
  shots: Shot[];
  label: string;
  /** Show the current screen's description under the dots. */
  caption?: boolean;
  size?: "md" | "lg";
  priority?: boolean;
};

/** A phone frame that steps through app screens: buttons, dots, arrow keys and swipe. */
export default function PhoneCarousel({ shots, label, caption = false, size = "md", priority = false }: Props) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const go = (to: number) => setIndex((to + shots.length) % shots.length);

  return (
    <div
      className="phone-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        else if (event.key === "ArrowRight") go(index + 1);
        else return;
        event.preventDefault();
      }}
    >
      <div
        className={`phone phone-${size}`}
        onPointerDown={(event) => {
          startX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (startX.current === null) return;
          const dx = event.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 30) go(dx < 0 ? index + 1 : index - 1);
        }}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        <div className="phone-island" aria-hidden="true" />
        <div className="phone-screen">
          {shots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={i === index ? shot.alt : ""}
              aria-hidden={i === index ? undefined : true}
              fill
              draggable={false}
              sizes={size === "lg" ? "260px" : "220px"}
              priority={priority && i === 0}
              className={`phone-shot ${i === index ? "is-active" : ""}`}
            />
          ))}
          <button type="button" className="phone-nav left-2" onClick={() => go(index - 1)} aria-label="Previous screen">
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button type="button" className="phone-nav right-2" onClick={() => go(index + 1)} aria-label="Next screen">
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Screen ${i + 1}: ${shot.alt}`}
            aria-current={i === index ? "true" : undefined}
            className="phone-dot"
          />
        ))}
      </div>

      <p className={caption ? "mt-3 min-h-[2.75em] text-center text-sm text-muted" : "sr-only"} aria-live="polite">
        <span className="font-mono text-xs">
          {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
        </span>
        {caption && <span className="block">{shots[index].alt}</span>}
      </p>
    </div>
  );
}
