import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { duration, experience, formatMonth } from "@/content/site";

/** Roles grouped under year markers; each one leads with a summary, then outcomes. */
export default function ExperienceTimeline({ now }: { now: string }) {
  const years = [...new Set(experience.map((role) => role.from.slice(0, 4)))];

  return (
    <div className="timeline">
      {years.map((year) => (
        <div key={year} className="sm:grid sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
          <p className="timeline-year mb-3 sm:mb-0 sm:pt-0.5">{year}</p>
          <ol>
            {experience
              .filter((role) => role.from.startsWith(year))
              .map((role) => (
                <li key={role.org} className="role" data-current={role.to === null ? "" : undefined}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="h3">
                      {role.org}
                      <span className="font-normal text-muted"> · {role.title}</span>
                    </h3>
                    <span className="badge">{duration(role.from, role.to, now)}</span>
                  </div>
                  <p className="label mt-1">
                    {formatMonth(role.from)} – {formatMonth(role.to)} · {role.location} · {role.kind}
                  </p>
                  <p className="prose mt-3">{role.summary}</p>
                  <ul className="ticks prose mt-3 space-y-1.5 text-muted">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
                      {role.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {role.link && (
                      <Link href={role.link.href} className="no-print inline-flex items-center gap-1 text-sm">
                        {role.link.label}
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
