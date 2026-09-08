import { ArrowDownCircle, Folder } from "lucide-react";

export default function Hero() {
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
          I take your idea
          <br />
          <span className="text-foreground">from</span>
          <br />
          <span className="text-primary">concept</span>
          <br />
          <span className="text-foreground">to production.</span>
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
            href="https://docs.google.com/document/d/1z5Ex9RoHyJFe9RqCysidAT4FiSQjFHxEL_VcPHyEP7A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
          >
            <Folder
              className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-105"
              fill="currentColor"
            />
            <span>My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}