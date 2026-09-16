"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileDeviceMockupProps {
  images?: string[];
}

const defaultImages = [
  "/projects/tajstore-1.jpg",
  "/projects/tajstore-2.jpg",
  "/projects/tajstore-3.jpg",
  "/projects/tajstore-4.jpg",
  "/projects/tajstore-5.jpg",
  "/projects/tajstore-6.jpg",
  "/projects/tajstore-7.jpg",
];

export default function MobileDeviceMockup({ images = defaultImages }: MobileDeviceMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Outer Phone Shell */}
      <div className="relative mx-auto h-[580px] w-[290px] rounded-[48px] border-[10px] border-[#1f232b] bg-[#0d1117] p-2 shadow-2xl ring-1 ring-white/10 sm:h-[620px] sm:w-[310px]">
        
        {/* Dynamic Island / Top Speaker Notch */}
        <div className="absolute left-1/2 top-4 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black">
          <div className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#1c1c1e]" />
        </div>

        {/* Screen Area */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt={`TajStore Screen ${index + 1}`}
                fill
                sizes="(max-width: 768px) 290px, 310px"
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Touch Navigation Overlay Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous screenshot"
            className="group absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-sm transition hover:bg-black/80 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="group absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-sm transition hover:bg-black/80 hover:text-white"
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 z-30 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Screen Dots Counter Indicator */}
      <div className="mt-4 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "w-6 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
      <span className="mt-1 text-xs text-neutral-400">
        Screen {currentIndex + 1} of {images.length}
      </span>
    </div>
  );
}