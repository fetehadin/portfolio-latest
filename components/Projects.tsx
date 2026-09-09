import Image from "next/image";
import { ExternalLink, Code2, Layers } from "lucide-react";
import {
  SiPython,
  SiOdoo,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiShadcnui,
  SiDjango,
  SiReact,
  SiRedux,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "EduConnect Educational Platform",
      description:
        "A comprehensive, student-centered learning hub designed to empower students across Ethiopia. It features a scalable backend architecture, robust relational database modeling, and secure API integrations to create a vibrant community where users can learn, connect, and achieve.",
      image: "/educonnect.png",
      stack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      buttons: [
        {
          label: "Live Demo",
          link: "https://educonnect-frontend-opal.vercel.app",
          icon: ExternalLink,
        },
      ],
    },
    {
      title: "Alif School Management System",
      description:
        "A multi-role digital portal empowering education and streamlining administrative workflows. Designed to inspire excellence, this platform features complex multi-user architectures, secure enrollment pipelines, and a robust backend to handle comprehensive school management operations.",
      image: "/alif.png",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Prisma", icon: SiPostgresql, color: "#2D3748" },
      ],
      buttons: [],
    },
    {
      title: "Jejan Digital Marketplace",
      description:
        "A powerful e-commerce engine connecting trusted suppliers with customers. Designed for business growth, the platform facilitates seamless supplier-customer connections, and secure transactions.",
      image: "/jejan.jpg",
      stack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Django REST", icon: SiDjango, color: "#092E20" },
        { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      buttons: [],
    },
  ];

  const extraProjects = [
    {
      name: "EduConnect Backend",
      link: "https://github.com/fetehadin",
    },
    {
      name: "Task Management API",
      link: "https://github.com/fetehadin",
    },
    {
      name: "Portfolio V1",
      link: "https://github.com/fetehadin",
    },
    {
      name: "E-Commerce Microservice",
      link: "https://github.com/fetehadin",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-16 flex flex-col items-start text-left">
        <div className="mb-4 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Projects
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl cursor-target">
              Featured Work
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
              Some of my projects and technical achievements.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-20 border-l border-border">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="relative">
              <span className="absolute left-0 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-primary bg-background" />

              <div className="pl-8 pt-6">
                <div className="group relative flex flex-col items-stretch gap-0 md:flex-row">
                  <div className="relative z-10 flex min-h-[180px] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/50 p-2 shadow-sm transition-all duration-300 group-hover:border-primary/30 md:w-[350px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="z-0 hidden shrink-0 flex-col justify-center md:flex">
                    <div className="h-px w-8 bg-border transition-colors duration-300 group-hover:bg-primary/40" />
                  </div>

                  <div className="relative z-10 mt-4 flex w-full flex-1 flex-col justify-center rounded-xl border border-border bg-background p-4 shadow-sm transition-all duration-300 group-hover:border-primary/30 md:mt-0 md:p-5">
                    <div className="absolute -top-[16px] right-6 flex items-center gap-3.5 rounded-full border border-border bg-background px-4 py-2 opacity-0 shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:opacity-100">
                      {project.stack.map((tech, techIndex) => {
                        const Icon = tech.icon;

                        return (
                          <div
                            key={techIndex}
                            title={tech.name}
                            className={`flex cursor-help items-center justify-center transition-transform duration-200 hover:scale-110 ${
                              !tech.color ? "text-foreground" : ""
                            }`}
                            style={tech.color ? { color: tech.color } : {}}
                          >
                            <Icon className="h-[18px] w-[18px]" />
                          </div>
                        );
                      })}
                    </div>

                    <h3 className="mb-2 text-xl font-bold tracking-tight text-primary transition-colors duration-300 cursor-target">
                      {project.title}
                    </h3>

                    <p className="mb-4 text-[14px] leading-relaxed text-foreground/75">
                      {project.description}
                    </p>

                    {project.buttons.length > 0 && (
                      <div className="mt-auto flex flex-wrap items-center gap-3">
                        {project.buttons.map((button, buttonIndex) => {
                          const ButtonIcon = button.icon;

                          return (
                            <a
                              key={buttonIndex}
                              href={button.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-target inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                            >
                              <ButtonIcon className="h-4 w-4" />
                              {button.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="relative mt-14">
          <span className="absolute left-0 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-primary bg-background" />

          <div className="pl-8 pt-6">
            <div className="mb-2">
              <h3 className="text-2xl font-bold tracking-tight text-primary cursor-target">
                Extra Projects
              </h3>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-6 top-0 z-0 w-px border-l border-dashed border-border" />

              <div className="h-6" />

              <div className="relative z-10 rounded-xl border border-border bg-background p-5 shadow-none md:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {extraProjects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex items-center justify-center rounded-md border border-border bg-background px-3 py-4 text-center text-[14px] font-medium text-foreground transition-all duration-300 hover:-translate-y-[2px] hover:border-primary hover:text-primary"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-6" />

              <div className="relative z-10 pl-2">
                <a
                  href="https://github.com/fetehadin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target inline-flex items-center gap-2 text-[15px] font-bold text-foreground transition-colors hover:text-primary"
                >
                  More on Github
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}