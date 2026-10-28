import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/site";

/** A calm project card. The whole card opens the case study; external links sit above that. */
export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const phones = project.cover.length > 1;

  return (
    <article className="card">
      <div className={`card-art ${wide ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        {phones ? (
          <div className="absolute inset-x-0 top-6 flex items-start justify-center gap-3 px-6">
            {project.cover.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt=""
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 640px) 28vw, 9rem"
                className="h-auto w-[28%] max-w-[8.5rem] rounded-lg border border-white/10"
              />
            ))}
          </div>
        ) : (
          <div className={`absolute inset-x-6 top-6 ${wide ? "sm:inset-x-12 sm:top-10" : ""}`}>
            <Image
              src={project.cover[0].src}
              alt=""
              width={project.cover[0].width}
              height={project.cover[0].height}
              sizes={wide ? "(max-width: 960px) 92vw, 50rem" : "(max-width: 768px) 92vw, 25rem"}
              className="h-auto w-full rounded-t-md border border-b-0 border-white/10"
            />
          </div>
        )}
      </div>

      <div className="card-body flex flex-1 flex-col p-5 sm:p-6">
        <p className="label">
          {project.badge} · {project.year}
        </p>
        <h3 className="h3 mt-2">{project.name}</h3>
        <p className="mt-2 text-muted">{project.outcome}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.chips.slice(0, 4).map((chip) => (
            <li key={chip} className="tag">
              {chip}
            </li>
          ))}
        </ul>

        <div className="card-foot mt-auto flex flex-wrap items-center justify-between gap-x-5 gap-y-2 pt-6">
          <Link href={`/work/${project.slug}`} className="card-link plain inline-flex items-center gap-1.5 font-semibold text-accent">
            Read case study
            <ArrowRight className="size-4" aria-hidden="true" />
            <span className="sr-only">: {project.name}</span>
          </Link>
          {project.links.length > 0 ? (
            <ul className="over flex flex-wrap gap-x-4 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-muted">
                    {link.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">: {project.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">{project.linkNote}</p>
          )}
        </div>
      </div>
    </article>
  );
}
