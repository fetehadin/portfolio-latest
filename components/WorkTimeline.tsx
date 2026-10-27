import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { duration, formatMonth, timelineSpan, work, type Role } from "@/content/cv";

/** Earliest month on the axis — a little before the first role starts. */
const AXIS_FROM = "2024-06";

function yearTicks(now: string) {
  const [first] = AXIS_FROM.split("-").map(Number);
  const [last] = now.split("-").map(Number);
  const ticks: { label: string; left: number }[] = [];
  for (let year = first + 1; year <= last; year++) {
    ticks.push({ label: `'${String(year).slice(2)}`, left: timelineSpan(`${year}-01`, null, AXIS_FROM, now).left });
  }
  return ticks;
}

export default function WorkTimeline({ now }: { now: string }) {
  const ticks = yearTicks(now);

  return (
    <div>
      {/* Year axis */}
      <div aria-hidden="true" className="no-print grid grid-cols-[2.25rem_1fr] gap-x-3 pb-2">
        <span />
        <div className="relative h-4 text-[0.625rem] text-muted">
          <span className="absolute left-0">&apos;{AXIS_FROM.slice(2, 4)}</span>
          {ticks.map((tick) => (
            <span key={tick.label} className="absolute -translate-x-1/2" style={{ left: `${tick.left}%` }}>
              {tick.label}
            </span>
          ))}
          <span className="absolute right-0">now</span>
        </div>
      </div>

      <ol className="border-t border-rule">
        {work.map((role) => (
          <li key={`${role.org}-${role.from}`} className="border-b border-rule">
            {role.bullets.length > 0 ? (
              <details className="role group">
                <summary className="py-3.5 print:py-0.5">
                  <RoleRow role={role} now={now} ticks={ticks} expandable />
                </summary>
                <div className="pb-4 pl-[3rem]">
                  <p className="label">
                    {formatMonth(role.from)} – {formatMonth(role.to)} · {role.location}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0 bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {role.link && (
                    <p className="mt-3">
                      <Link href={role.link.href}>{role.link.label} →</Link>
                    </p>
                  )}
                </div>
              </details>
            ) : (
              <div className="py-3.5 print:py-0.5">
                <RoleRow role={role} now={now} ticks={ticks} />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function RoleRow({
  role,
  now,
  ticks,
  expandable = false,
}: {
  role: Role;
  now: string;
  ticks: { left: number }[];
  expandable?: boolean;
}) {
  const span = timelineSpan(role.from, role.to, AXIS_FROM, now);

  return (
    <div className="grid grid-cols-[2.25rem_1fr] gap-x-3 print:grid-cols-1">
      <span className="monogram" aria-hidden="true">
        {role.monogram}
      </span>
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <p className="sans">
            <span className="role-org font-semibold transition-colors">{role.org}</span>
            <span className="text-muted"> · {role.title}</span>
          </p>
          <span className="inline-flex shrink-0 items-center gap-1 text-[0.6875rem] text-muted">
            <span className="hidden print:inline">
              {formatMonth(role.from)} – {formatMonth(role.to)}
            </span>
            <span className="print:hidden">{duration(role.from, role.to, now)}</span>
            {expandable && <ChevronRight className="chev size-3.5" aria-hidden="true" />}
          </span>
        </div>
        <p className="text-muted">{role.oneLiner}</p>
        <div className="track mt-2" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick.left} className="track-tick" style={{ left: `${tick.left}%` }} />
          ))}
          <span
            className={`track-bar${role.to === null ? " current" : ""}`}
            style={{ left: `${span.left}%`, width: `${span.width}%` }}
          />
        </div>
      </div>
    </div>
  );
}
