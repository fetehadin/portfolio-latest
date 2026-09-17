import Image from "next/image";
import { Folder, Mail } from "lucide-react";

export default function About() {
  const stats = [
    { value: "3+", label: "YEARS OF CODING" },
    { value: "10+", label: "PROJECTS DELIVERED" },
    { value: "5+", label: "INTERNSHIPS & PROGRAMS" },
    { value: "∞", label: "LINES OF CODE WRITTEN" },
  ];

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-16 flex flex-col items-center gap-12 lg:flex-row">
        <div className="relative shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-border bg-card shadow-sm sm:h-80 sm:w-80">
            <Image
              src="/fetehadin-gree.png"
              alt="Fetehadin Negash"
              fill
              className="object-cover"
            />

            {/* Moved "Available for work" badge to bottom-right of the image */}
            <div className="absolute bottom-4 right-4 z-10 inline-flex h-8 items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-3 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="whitespace-nowrap text-[11px] font-medium text-foreground/80">
                Available for work
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-left">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About Me
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Journey from{" "}
            <span className="font-serif italic text-primary">Logic</span> to Impact
          </h2>

          <p className="text-base leading-relaxed text-foreground/70">
            Transitioning from civil engineering to software development gave me a unique blueprint for building software: I treat code the same way I treat physical infrastructure, designing for structural integrity, load management, and long-term scalability.
          </p>

          <p className="text-base leading-relaxed text-foreground/70">
            Today, I focus on transforming complex challenges into efficient backend logic, smart automation, and high-performing digital solutions that drive real-world impact.
          </p>

          <div className="mt-4 flex w-full flex-row items-center gap-3 sm:w-auto sm:gap-4">
            <a
              href="https://drive.google.com/file/d/1HBvlOeg1si_HJ9zASuvfW6hPb1CppOVx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/80 hover:shadow-md sm:flex-none sm:gap-3 sm:px-6"
            >
              <Folder
                className="h-4 w-4 text-primary sm:h-5 sm:w-5"
                fill="currentColor"
              />
              <span className="whitespace-nowrap text-[13px] font-semibold text-foreground sm:text-sm">
                Download CV
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-2 text-[13px] font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/80 hover:shadow-md sm:min-w-[155px] sm:flex-none sm:gap-2.5 sm:px-7 sm:text-sm"
            >
              <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
              <span className="whitespace-nowrap">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/60 shadow-sm md:grid-cols-4 md:divide-y-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}