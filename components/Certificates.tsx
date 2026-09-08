"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certificates() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollContainerRef.current.scrollBy({
            left: 420,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  const certificates = [
    {
      id: 1,
      title: "ALX Frontend Development",
      image: "/alxfrontend.png",
    },
    {
      id: 2,
      title: "GoldenAge Project Management Certificate",
      image: "/pm.png",
    },
    {
      id: 3,
      title: "H.E.R Hackathon 2026",
      image: "/HER.png",
    },
    {
      id: 4,
      title: "ASTU Entrepreneurship and Leadership Certificate",
      image: "/leadership.png",
    },
    {
      id: 5,
      title: "GoldenAge Frontend Development",
      image: "/frontend.png",
    },
    {
      id: 6,
      title: "Hira Muslim Student Association STEM Certificate",
      image: "/HMSA.png",
    },
    {
      id: 7,
      title: "ALX Her Commerce Hackathon 2026",
      image: "/herCommerce.png",
    },
    {
      id: 8,
      title: "Lanchitech Startup Development Certificate",
      image: "/lanchitech.png",
    },
    {
      id: 9,
      title: "Udemy Programming Fundamentals Certificate",
      image: "/programing-fundamentals.png",
    },
    {
      id: 10,
      title: "ALX Professional Skills Certificate",
      image: "/professional-skills.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="mx-auto w-full max-w-4xl bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Awards & Certificates
      </h2>

      <div className="ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-20 border-l border-border">
        <article className="relative">
          <span className="absolute left-0 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-primary bg-background" />

          <div className="pl-8 pt-6">
            <div
              className="relative rounded-xl border border-border bg-background p-4 shadow-sm sm:p-6"
              onMouseEnter={() => (isHovered.current = true)}
              onMouseLeave={() => (isHovered.current = false)}
            >
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary hover:text-primary"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth pb-4 pt-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="group relative flex aspect-[4/3] w-[300px] shrink-0 snap-center items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/30 p-2 sm:w-[420px]"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-sm font-bold text-foreground sm:text-base">
                        {cert.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary hover:text-primary"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}