"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certificates() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Continuous 1px scroll every 20ms for a smooth glide
    const interval = setInterval(() => {
      if (!isHovered.current && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "auto",
          });
        } else {
          scrollContainerRef.current.scrollBy({
            left: 1,
            behavior: "auto",
          });
        }
      }
    }, 20);

    return () => {
      clearInterval(interval);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  // Pause scrolling immediately when touched or hovered
  const handleInteractionStart = () => {
    isHovered.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  // Wait 1.5s after interaction ends before resuming auto-scroll
  const handleInteractionEnd = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      isHovered.current = false;
    }, 1500);
  };

  const certificates = [
    {
      id: 1,
      title: "ALX Back-End Web Development",
      image: "/certeficates/Fetehadin-Backend.jpg",
    },
    {
      id: 2,
      title: "ALX AI Career Essentials",
      image: "/certeficates/Fetehadin-AiCE.jpg",
    },
    {
      id: 3,
      title: "INSA Certification",
      image: "/certeficates/fetehadin-INSA.jpg",
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      image: "/certeficates/Fetehadin-DSA_page-0001.jpg",
    },
    {
      id: 5,
      title: "Python Programming",
      image: "/certeficates/fetehadin-python_page-0001.jpg",
    },
    {
      id: 6,
      title: "Udacity Certification",
      image: "/certeficates/Fetehadin-Udacity_page-0001.jpg",
    },
    {
      id: 7,
      title: "ALX Certificate of Appreciation",
      image: "/certeficates/Fetehadin-ALX-appriciation_page-0001.jpg",
    }
  ];

  return (
    <section
      id="certificates"
      // Expanded to max-w-5xl to allow the carousel more breathing room on desktop
      className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl cursor-target">
        Awards & Certificates
      </h2>

      {/* Hidden entirely on mobile to reclaim horizontal space, visible on sm and up */}
      <div className="hidden h-10 border-l-2 border-dashed border-foreground/20 dark:border-foreground/30 sm:block sm:ml-12 md:ml-20" />

      {/* Removed border and left-margin on mobile so the carousel aligns perfectly to the edge */}
      <div className="relative sm:ml-12 sm:border-l-2 sm:border-foreground/20 dark:sm:border-foreground/30 md:ml-20">
        <article className="relative z-10">
          
          {/* Badge hidden on mobile (since the line is hidden), aligned perfectly on the 2px desktop line */}
          <span className="absolute left-0 top-0 z-10 hidden sm:inline-flex -translate-x-[calc(50%+1px)] -translate-y-1/2 items-center whitespace-nowrap rounded-full border-2 border-primary/30 bg-background/90 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-foreground shadow-sm backdrop-blur-md">
            Certifications
          </span>

          {/* Removed left padding (pl-6) on mobile to maximize card width */}
          <div className="pt-6 sm:pl-8">
            <div
              className="relative rounded-xl border border-border bg-background/80 p-2 shadow-sm backdrop-blur-sm sm:p-6"
              onMouseEnter={handleInteractionStart}
              onMouseLeave={handleInteractionEnd}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
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
                // Removed snap-x constraints so it doesn't fight the continuous scroll animation
                className="flex items-center gap-4 overflow-x-auto scroll-smooth pb-4 pt-2 sm:gap-6"
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
                    // Responsive width: 85vw on mobile for maximum size, 500px fixed on desktop
                    className="group relative flex aspect-[4/3] w-[85vw] max-w-[400px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/30 p-1 sm:max-w-none sm:w-[500px] sm:p-2"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-105 sm:p-2"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-base font-bold text-foreground sm:text-lg">
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