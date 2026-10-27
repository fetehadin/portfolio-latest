import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { githubRepos, moreProjects, projects, type Project } from "@/content/cv";

export default function ProjectCards() {
  const total = String(projects.length).padStart(2, "0");

  return (
    <>
      <p className="prose-col mb-5 print:hidden">
        A few things I&apos;ve built or led. Each has a short case study: the problem, what I built, and what came of it.
      </p>

      <ul className="no-print grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug} className={i === 0 ? "sm:col-span-2" : undefined}>
            <ProjectCard project={project} index={`${String(i + 1).padStart(2, "0")} / ${total}`} wide={i === 0} />
          </li>
        ))}
      </ul>

      {/* Print gets a compact list instead of cards. */}
      <ul className="hidden print:block">
        {projects.map((project) => (
          <li key={project.slug}>
            <span className="sans font-semibold">{project.name}</span> — {project.tagline}{" "}
            <span className="text-muted">{project.stack.join(", ")}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 print:mt-1">
        <span className="label mr-2">More</span>
        {moreProjects.map((link, i) => (
          <span key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
              {link.label}
            </a>
            {i < moreProjects.length - 1 ? ", " : " · "}
          </span>
        ))}
        <a href={githubRepos} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
          everything on GitHub ↗
        </a>
      </p>
    </>
  );
}

function ProjectCard({ project, index, wide }: { project: Project; index: string; wide: boolean }) {
  const phones = project.cover.length > 1;

  return (
    <Link href={`/projects/${project.slug}`} className="card group h-full">
      <div className={`card-art grain ${wide ? "h-60 sm:h-72" : "h-48"}`}>
        <span className="art-chip left-3">{project.badge}</span>
        <span className="art-chip right-3">{index}</span>

        {phones ? (
          <div className="art-inner absolute inset-x-0 -bottom-24 flex items-start justify-center gap-3 px-6">
            {project.cover.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt=""
                width={shot.width}
                height={shot.height}
                sizes="9rem"
                className="h-auto w-[28%] max-w-[9rem] rounded-lg border border-white/10 shadow-lg"
              />
            ))}
          </div>
        ) : (
          <div className={`art-inner absolute inset-x-6 top-12 ${wide ? "sm:inset-x-12" : ""}`}>
            <Image
              src={project.cover[0].src}
              alt=""
              width={project.cover[0].width}
              height={project.cover[0].height}
              sizes={wide ? "(max-width: 900px) 90vw, 46rem" : "(max-width: 640px) 90vw, 22rem"}
              className="h-auto w-full rounded-t-lg border border-b-0 border-white/10 shadow-lg"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="sans text-[1rem] font-semibold tracking-[-0.01em]">{project.name}</h3>
        <p className="mt-1 text-muted">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4">
          <span className="label">{project.tags.join(" / ")}</span>
          <span className="card-cta sans inline-flex items-center gap-1">
            Case study <ArrowRight className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
