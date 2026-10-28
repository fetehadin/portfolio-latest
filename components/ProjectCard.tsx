import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/content/site";
import { StackPill } from "@/lib/tech";
import PhoneCarousel from "@/components/PhoneCarousel";

/**
 * A project as a two-panel row: framed art on one side, the plain-English story on the other.
 * The case-study link covers the whole row; the carousel and external links sit above it.
 */
export default function ProjectCard({ project, flip = false, priority = false }: { project: Project; flip?: boolean; priority?: boolean }) {
  const phone = project.screenshots[0].height > project.screenshots[0].width;
  const cover = project.cover[0];

  return (
    <article className={`project ${flip ? "project-flip" : ""}`}>
      <div className="project-art no-print">
        <StackPill tech={project.tech} className="project-pill" />
        {phone ? (
          <div className="over">
            <PhoneCarousel shots={project.screenshots} label={`${project.name} app screens`} priority={priority} />
          </div>
        ) : (
          <div className="browser">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              priority={priority}
              sizes="(max-width: 960px) 88vw, 36rem"
              className="h-auto w-full"
            />
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="label">
          {project.badge} · {project.year}
        </p>
        <h3 className="project-title mt-3">{project.name}</h3>
        <p className="mt-3 text-muted">{project.outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.chips.map((chip) => (
            <li key={chip} className="tag">
              {chip}
            </li>
          ))}
        </ul>

        <dl className="project-facts no-print mt-6">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Team</dt>
            <dd>{project.team}</dd>
          </div>
        </dl>

        <div className="card-foot mt-auto flex flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-8">
          <Link href={`/work/${project.slug}`} className="card-link plain inline-flex items-center gap-1.5 font-semibold text-accent">
            Read case study
            <ArrowRight className="arrow size-4" aria-hidden="true" />
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
            <p className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Lock className="size-3.5" aria-hidden="true" />
              Private business app
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
