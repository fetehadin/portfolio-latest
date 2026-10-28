import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, profile, projects } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PhoneCarousel from "@/components/PhoneCarousel";
import { StackPill } from "@/lib/tech";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return {
    title,
    description: project.tldr,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description: project.tldr, url: `${profile.site}/work/${project.slug}` },
  };
}

/** One template for every case study: the senior-engineer layer. */
export default async function CaseStudy({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const phones = project.screenshots[0].height > project.screenshots[0].width;

  const block = "border-t border-rule py-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-14";
  const head = "label mb-4 lg:col-span-3 lg:mb-0 lg:pt-1";
  const body = "min-w-0 lg:col-span-9";

  return (
    <>
      <SiteHeader home={false} />

      <div className="frame">
        <div className="hatch page-top" aria-hidden="true" />
        <main id="main" tabIndex={-1} className="container outline-none">
          <article>
            <header className="pt-28 pb-12 sm:pt-32 lg:pt-36">
              <Link href="/#work" className="no-print inline-flex items-center gap-1.5 text-sm text-muted">
                <ArrowLeft className="size-4" aria-hidden="true" />
                All work
              </Link>
              <p className="num mt-8">
                Case study {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
              <h1 className="display mt-2">{project.name}</h1>
              <StackPill tech={project.tech} className="no-print mt-6" />
              <p className="lead prose mt-5">{project.tldr}</p>

              <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-rule py-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 text-[0.9375rem]">{project.role}</dd>
                </div>
                <div>
                  <dt className="label">Year</dt>
                  <dd className="mt-1 text-[0.9375rem]">{project.year}</dd>
                </div>
                <div>
                  <dt className="label">Team</dt>
                  <dd className="mt-1 text-[0.9375rem]">{project.team}</dd>
                </div>
                <div>
                  <dt className="label">Stack</dt>
                  <dd className="mt-1 text-[0.9375rem]">{project.stack.join(", ")}</dd>
                </div>
              </dl>

              {project.links.length > 0 ? (
                <ul className="print-url mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn">
                        {link.label}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-sm text-muted">{project.linkNote}.</p>
              )}
            </header>

            {phones ? (
              <div className="project-art showcase no-print mb-12">
                <PhoneCarousel shots={project.screenshots} label={`${project.name} app screens`} caption size="lg" priority />
              </div>
            ) : (
              <div className="no-print mb-12 grid gap-4 sm:grid-cols-[2fr_1fr]">
                {project.screenshots.map((shot, i) => (
                  <figure key={shot.src} className="overflow-hidden border border-rule bg-surface">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      priority={i === 0}
                      sizes="(max-width: 640px) 92vw, 44rem"
                      className="h-auto w-full"
                    />
                    <figcaption className="border-t border-rule px-3 py-2 text-xs text-muted">{shot.alt}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            <section aria-labelledby="problem" className={block}>
              <h2 id="problem" className={head}>
                Problem
              </h2>
              <p className={`${body} prose`}>{project.problem}</p>
            </section>

            <section aria-labelledby="constraints" className={block}>
              <h2 id="constraints" className={head}>
                Constraints
              </h2>
              <ul className={`${body} ticks prose space-y-2`}>
                {project.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="architecture" className={block}>
              <h2 id="architecture" className={head}>
                Architecture
              </h2>
              <div className={body}>
                <ArchitectureDiagram nodes={project.architecture} title={`${project.name} architecture`} />
                <p className="prose mt-5 text-muted">{project.architectureNote}</p>
              </div>
            </section>

            <section aria-labelledby="decisions" className={block}>
              <h2 id="decisions" className={head}>
                Key decisions
              </h2>
              <ol className={`${body} space-y-6`}>
                {project.decisions.map((decision, i) => (
                  <li key={decision.chose} className="prose">
                    <p className="num">Trade-off {i + 1}</p>
                    <p className="mt-1">
                      I chose <strong className="font-semibold">{decision.chose}</strong> over {decision.over}, because{" "}
                      {decision.because}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="built" className={block}>
              <h2 id="built" className={head}>
                What I built
              </h2>
              <ul className={`${body} ticks prose space-y-2`}>
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="result" className={block}>
              <h2 id="result" className={head}>
                Result
              </h2>
              <ul className={`${body} ticks prose space-y-2`}>
                {project.result.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="next" className={block}>
              <h2 id="next" className={head}>
                What I&apos;d do next
              </h2>
              <ul className={`${body} ticks prose space-y-2`}>
                {project.next.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </article>

          <nav aria-label="More case studies" className="no-print grid gap-4 border-t border-rule py-10 sm:grid-cols-2">
            <Link
              href={`/work/${prev.slug}`}
              className="plain border border-rule bg-surface p-5 transition-colors hover:border-accent"
            >
              <span className="label inline-flex items-center gap-1">
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous
              </span>
              <span className="h3 mt-1 block">{prev.name}</span>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="plain border border-rule bg-surface p-5 text-right transition-colors hover:border-accent"
            >
              <span className="label inline-flex items-center gap-1">
                Next
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="h3 mt-1 block">{next.name}</span>
            </Link>
          </nav>

          <div className="no-print border-t border-rule py-12">
            <p className="lead">Want something like this built?</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Get in touch
              </Link>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn">
                Download CV
              </a>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
