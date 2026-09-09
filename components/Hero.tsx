"use client";

import { useState, useEffect } from "react";
import { ArrowDownCircle, Folder } from "lucide-react";

const PHRASES = [
  "Scalable Systems",
  "Smart Automation",
  "AI-Driven Logic",
  "Digital Solutions"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
    }, 5000); // Extended duration to 5 seconds per phrase

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-130px)] max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32">
      <div className="min-h-[calc(100vh-260px)] flex flex-col justify-end pb-12 lg:pb-14">
        <p className="mb-6 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-foreground/50">
          Software Engineer · Product Builder
        </p>

        <h1
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-[-0.025em] leading-[0.94] text-foreground"
          style={{ fontFamily: "'Carter One', cursive" }}
        >
          Building Tomorrow&apos;s
          <br />
          <div className="h-[90px] sm:h-[120px] flex items-center justify-start my-2">
            <div className="relative inline-flex items-center justify-center px-8 py-3">
              {/* Organic Fluid / Blob SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full text-primary drop-shadow-md scale-125 pointer-events-none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M44.7,-76.4C58.8,-69.3,71.8,-59.1,79.8,-45.4C87.8,-31.7,90.8,-14.5,89.3,2.1C87.7,18.8,81.5,34.9,71.8,47.7C62.1,60.5,48.8,70,34.2,76.5C19.6,83,3.7,86.5,-12.3,85.2C-28.3,83.9,-44.3,77.8,-57.4,67.6C-70.5,57.4,-80.7,43.1,-85.4,27C-90.1,10.8,-89.3,-7.3,-83.4,-23.4C-77.5,-39.5,-66.6,-53.5,-52.8,-60.9C-39,-68.3,-22.3,-69.1,-6.6,-70.7C9.2,-72.3,30.6,-83.5,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* Rotating Phrase Content */}
              <span 
                key={PHRASES[currentIndex]}
                className="relative z-10 text-primary-foreground font-extrabold tracking-tight text-3xl sm:text-5xl animate-in fade-in zoom-in-95 duration-1000 ease-out text-center whitespace-nowrap"
              >
                {PHRASES[currentIndex]}
              </span>
            </div>
          </div>
          <span className="text-foreground">Today.</span>
        </h1>
     
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-sm font-medium text-foreground/70">
              Available for new projects
            </span>
          </div>

          <a
            href="#projects"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>View My Work</span>
            <ArrowDownCircle className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <a
            href="https://drive.google.com/file/d/1HBvlOeg1si_HJ9zASuvfW6hPb1CppOVx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
          >
            <Folder
              className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-105"
              fill="currentColor"
            />
            <span>My Resumes</span>
          </a>
        </div>
      </div>
    </section>
  );
}