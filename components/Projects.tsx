"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Layers, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  SiPython, 
  SiDjango, 
  SiPostgresql, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNpm, 
  SiApachemaven,
  SiGithub,
  SiReact,
  SiExpo,
  SiTypescript,
  SiReactquery,
  SiRedux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// --- INLINE COMPONENT: Mobile Device Mockup ---
const MobileDeviceMockup = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <div className="relative mx-auto h-[320px] w-[160px] rounded-[24px] border-[6px] border-[#1f232b] bg-[#0d1117] p-1 shadow-xl ring-1 ring-white/10">
        
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-30 h-2 w-12 -translate-x-1/2 rounded-full bg-black">
          <div className="absolute right-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#1c1c1e]" />
        </div>

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-black group/screen">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                fill
                sizes="160px"
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Controls (Visible on hover) */}
          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-1 text-white opacity-0 transition-all hover:bg-black/90 group-hover/screen:opacity-100"
          >
            <ChevronLeft className="h-3 w-3" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-1 text-white opacity-0 transition-all hover:bg-black/90 group-hover/screen:opacity-100"
          >
            <ChevronRight className="h-3 w-3" />
          </button>

          {/* Home Bar */}
          <div className="absolute bottom-1.5 left-1/2 z-30 h-0.5 w-12 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-3 flex items-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
// --- END INLINE COMPONENT ---

export default function ProjectsSection() {
  const projects = [
    {
      title: "TajStore Management System",
      description:
        "A full-stack mobile platform built to streamline wholesale distribution and field sales operations. It provides dedicated portals for administrators and sales reps to manage warehouse checkouts, track live debt ledgers, coordinate supplier batches, and process payment approvals. The app is powered by React Native and Expo Router, featuring biometric security, a custom slate dark mode, and real-time data syncing via TanStack Query and Zustand. It also utilizes Expo Application Services (EAS) to instantly deploy Over-The-Air (OTA) updates to users.",
      image: "",
      isMobileMockup: true,
      images: [
        "/projects/tajstore-7.jpg",
        "/projects/tajstore-6.jpg",
        "/projects/tajstore-5.jpg",
        "/projects/tajstore-4.jpg",
        "/projects/tajstore-2.jpg",
        "/projects/tajstore-3.jpg",
        "/projects/tajstore-1.jpg" 
      ],
      stack: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Expo", icon: SiExpo, color: "#000020" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
        { name: "Zustand", icon: SiRedux, color: "#443E38" }, 
      ],
      buttons: [
        {
          label: "Internal Business App",
          link: "#",
          icon: Lock,
          disabled: true
        }
      ],
    },
    {
      title: "Smart Duplicate Detector",
      description:
        "An AST-powered static analysis tool that scans Java codebases to detect duplicated business logic. Utilizing a custom Weighted Levenshtein algorithm and JavaParser, it minimizes false positives by comparing structural logic rather than raw text. It features a modern FlatLaf Java Swing GUI and is globally distributed as a public CLI package (published 2 months ago on NPM as smart-duplicate-detector v1.0.0).",
      image: "/projects/SDD.png",
      isMobileMockup: false,
      stack: [
        { name: "Java 17", icon: FaJava, color: "#007396" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NPM", icon: SiNpm, color: "#CB3837" },
        { name: "Maven", icon: SiApachemaven, color: "#C71A22" }
      ],
      buttons: [
        {
          label: "Website",
          link: "https://smart-duplicate-detector.vercel.app/",
          icon: ExternalLink,
        },
        {
          label: "NPM Package",
          link: "https://www.npmjs.com/package/smart-duplicate-detector",
          icon: SiNpm,
        },
        {
          label: "Source Code",
          link: "https://github.com/fetehadin/smart-duplicate-detector",
          icon: SiGithub,
        }
      ],
    },
    {
      title: "EduConnect Educational Platform",
      description:
        "A comprehensive, student-centered learning hub designed to empower students across Ethiopia. It features a scalable backend architecture, robust relational database modeling, and secure API integrations to create a vibrant community where users can learn, connect, and achieve.",
      image: "/projects/edu-connect.png",
      isMobileMockup: false,
      stack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      buttons: [
        {
          label: "Live Demo",
          link: "https://educonnect-frontend-opal.vercel.app",
          icon: ExternalLink,
        },
      ],
    }
  ];

  const extraProjects = [
    {
      name: "CV Formatter",
      link: "https://github.com/fetehadin/CV-Formatter",
    },
    {
      name: "Schedule Tracker",
      link: "https://github.com/fetehadin/scheduleTracker",
    },
    {
      name: "Event Booking System",
      link: "https://github.com/fetehadin/Event-Booking-System",
    },
    {
      name: "BookWise",
      link: "https://github.com/fetehadin/BookWise_frontend",
    },
    {
      name: "Etch-a-Sketch",
      link: "https://github.com/fetehadin/Etch-a-Sketch-project",
    }
  ];

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
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

      <div className="ml-4 sm:ml-12 md:ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-4 sm:ml-12 md:ml-20 border-l border-border">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="relative z-10">
              <span className="absolute left-0 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-primary bg-background" />

              <div className="pl-6 sm:pl-8 pt-6">
                <div className="group relative flex flex-col items-stretch gap-0 md:flex-row">
                  
                  {/* Image or Mobile Mockup Container */}
                  <div className="relative z-10 flex min-h-[180px] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/50 p-2 shadow-sm transition-all duration-300 group-hover:border-primary/30 md:w-[350px]">
                    {project.isMobileMockup && project.images ? (
                      <MobileDeviceMockup images={project.images} />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="z-0 hidden shrink-0 flex-col justify-center md:flex">
                    <div className="h-px w-8 bg-border transition-colors duration-300 group-hover:bg-primary/40" />
                  </div>

                  {/* Project Details */}
                  <div className="relative z-10 mt-4 flex w-full flex-1 flex-col justify-center rounded-xl border border-border bg-background/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 group-hover:border-primary/30 md:mt-0 md:p-5">
                    <div className="absolute -top-[16px] right-6 hidden items-center gap-3.5 rounded-full border border-border bg-background px-4 py-2 opacity-0 shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:opacity-100 sm:flex">
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

                    {/* Action Buttons */}
                    {project.buttons.length > 0 && (
                      <div className="mt-auto flex flex-wrap items-center gap-3">
                        {project.buttons.map((button, buttonIndex) => {
                          const ButtonIcon = button.icon;
                          
                          // TypeScript narrowing fix
                          if ('disabled' in button && button.disabled) {
                            return (
                              <span
                                key={buttonIndex}
                                className="cursor-not-allowed inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm font-semibold text-foreground/50"
                              >
                                <ButtonIcon className="h-4 w-4" />
                                {button.label}
                              </span>
                            );
                          }

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

        <article className="relative mt-14 z-10">
          <span className="absolute left-0 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-primary bg-background" />

          <div className="pl-6 sm:pl-8 pt-6">
            <div className="mb-2">
              <h3 className="text-2xl font-bold tracking-tight text-primary cursor-target">
                Extra Projects
              </h3>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-6 top-0 z-0 w-px border-l border-dashed border-border" />

              <div className="h-6" />

              <div className="relative z-10 rounded-xl border border-border bg-background/80 backdrop-blur-sm p-5 shadow-none md:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {extraProjects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex items-center justify-center rounded-md border border-border bg-background/50 px-3 py-4 text-center text-[14px] font-medium text-foreground transition-all duration-300 hover:-translate-y-[2px] hover:border-primary hover:text-primary backdrop-blur-sm"
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