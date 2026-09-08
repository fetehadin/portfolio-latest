import Image from "next/image";
import { Folder, Mail } from "lucide-react";

export default function About() {
  const stats = [
    { value: "5th", label: "YEAR SOFTWARE ENGINEERING" },
    { value: "10+", label: "PROJECTS BUILT" },
    { value: "5+", label: "INTERNSHIPS & PROGRAMS" },
    { value: "2×", label: "HACKATHON WINNER" },
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
              src="/pink-shifon.jpg"
              alt="Nezira"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-left">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About Me
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            I build with{" "}
            <span className="font-serif italic text-primary">purpose</span>.
          </h2>

          <p className="text-base leading-relaxed text-foreground/70">
            I&apos;m Nezira, a Software Engineering student and product builder
            focused on turning complex ideas into reliable digital products.
            My work spans full-stack development, backend systems, databases,
            and enterprise applications.
          </p>

          <p className="text-base leading-relaxed text-foreground/70">
            My recent experience with Python, Odoo, PostgreSQL, and
            production-oriented backend systems has pushed me deeper into
            software architecture, data integrity, business logic, and
            scalable applications. I still enjoy building across the stack,
            but I&apos;m increasingly focused on the engineering behind systems
            that need to work reliably.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://docs.google.com/document/d/1z5Ex9RoHyJFe9RqCysidAT4FiSQjFHxEL_VcPHyEP7A/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border bg-card px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/80 hover:shadow-md"
            >
              <Folder
                className="h-5 w-5 text-primary"
                fill="currentColor"
              />
              <span className="text-sm font-semibold text-foreground">
                View Resume
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 min-w-[155px] items-center justify-center gap-2.5 rounded-full border border-border bg-card px-7 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/80 hover:shadow-md"
            >
              <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
              <span>Get in Touch</span>
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