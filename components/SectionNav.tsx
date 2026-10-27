"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/cv";

/** Numbered section links; the one in view gets an accent underline. */
export default function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // A thin band near the top of the viewport decides which section is "current".
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="no-print">
      <ol className="sans flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4">
        {nav.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="nav-link plain" aria-current={active === item.id ? "true" : undefined}>
              <span className="mr-1 font-mono text-[0.625rem] text-accent">{item.key}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
