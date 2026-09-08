import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import {
  SiPython,
  SiOdoo,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "School Management System",
      description:
        "A comprehensive school management system built under NDA with Odoo to streamline academic and administrative operations. The system manages students, teachers, classes, enrollment, attendance, and school workflows through a centralized ERP architecture.",
      image: "/SMS.png",
      stack: [
        { name: "Odoo", icon: SiOdoo, color: "#714B67" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Next.js", icon: SiNextdotjs },
      ],
      buttons: [
        {
          label: "View Frontend",
          link: "https://asyncschool.vercel.app/",
          icon: Code2,
        },
        {
          label: "View Backend",
          link: "https://async-school-system.onrender.com/",
          icon: Code2,
        },
      ],
    },
    {
      title: "Sadam Hussien Law Office",
      description:
        "A modern frontend website designed for Sadam Hussien Law Office to establish a professional digital presence. The interface presents legal services, company information, expertise, and contact details through a clean and responsive user experience.",
      image: "/shlo.png",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "shadcn/ui", icon: SiShadcnui },
      ],
      buttons: [
        {
          label: "View Live",
          link: "https://law-firm-website-an1q-5175ijkbm.vercel.app/",
          icon: ExternalLink,
        },
        {
          label: "Source Code",
          link: "https://github.com/Jennah198/law-firm-website",
          icon: Code2,
        },
      ],
    },
    {
      title: "HMSA Website",
      description:
        "A digital platform for the Hira Muslim Student Association built to strengthen communication, community engagement, and access to organizational resources. The website provides information about HMSA, its activities, initiatives, and community programs through a responsive modern interface.",
      image: "/hmsa1.png",
      stack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      ],
      buttons: [
        {
          label: "View Live",
          link: "https://v0-hira-muslim-association-website.vercel.app/",
          icon: ExternalLink,
        },
        {
          label: "Source Code",
          link: "https://github.com/Jennah198/hira-portfolio",
          icon: Code2,
        },
      ],
    },
  ];

  const extraProjects = [
    {
      name: "Womens Safety System",
      link: "https://github.com/Jennah198/womens-safety-system",
    },
    {
      name: "MotivateMe Bot",
      link: "https://github.com/Jennah198/motivate-me-bot",
    },
    {
      name: "Habesha Harvest",
      link: "https://github.com/Jennah198/habesha-harvest",
    },
    {
      name: "Block Chain",
      link: "https://github.com/Jennah198/block-chain",
    },
    {
      name: "Smart Complaint and Issue Tracking System",
      link: "https://github.com/Jennah198/Smart-Complaint-and-Issue-Tracking-System",
    },
    {
      name: "Capstone Project",
      link: "https://github.com/Jennah198/capstone-frontend",
    },
    {
      name: "Hajj QR Generator",
      link: "https://github.com/Jennah198/hajj-qr-generator-3g",
    },
    {
      name: "Zekat Collection",
      link: "https://github.com/Jennah198/Zekat-Collection",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Projects
      </h2>

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
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
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

                    <h3 className="mb-2 text-xl font-bold tracking-tight text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="mb-4 text-[14px] leading-relaxed text-foreground/75">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-3">
                      {project.buttons.map((button, buttonIndex) => {
                        const ButtonIcon = button.icon;

                        return (
                          <a
                            key={buttonIndex}
                            href={button.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                          >
                            <ButtonIcon className="h-4 w-4" />
                            {button.label}
                          </a>
                        );
                      })}
                    </div>
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
              <h3 className="text-2xl font-bold tracking-tight text-primary">
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
                      className="flex items-center justify-center rounded-md border border-border bg-background px-3 py-4 text-center text-[14px] font-medium text-foreground transition-all duration-300 hover:-translate-y-[2px] hover:border-primary hover:text-primary"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-6" />

              <div className="relative z-10 pl-2">
                <a
                  href="https://github.com/Jennah198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-foreground transition-colors hover:text-primary"
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