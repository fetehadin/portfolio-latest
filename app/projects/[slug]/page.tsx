import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/content/cv";
import Section from "@/components/Section";
import SheetFooter from "@/components/SheetFooter";
import ThemeToggle from "@/components/ThemeToggle";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — case study | ${profile.name}`;
  return {
    title,
    description: `${project.tagline} ${project.problem}`,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title, description: project.tagline, url: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const phones = project.screenshots[0].height > project.screenshots[0].width;

  return (
    <div id="top" className="sheet">
      <header className="no-print flex items-center justify-between gap-4 pb-9">
        <Link href="/#projects" className="plain sans inline-flex items-center gap-1.5 text-muted">
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {profile.name}
        </Link>
        <ThemeToggle />
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        <section className="section" aria-labelledby="project-title">
          <div className="section-label">
            <p className="section-heading">
              <span className="section-num">{String(index + 1).padStart(2, "0")}</span>
              Case study
            </p>
          </div>
          <div className="min-w-0">
            <h1 id="project-title" className="sans text-[1.625rem] leading-tight font-semibold tracking-[-0.02em]">
              {project.name}
            </h1>
            <p className="mt-1.5 text-muted">{project.tagline}</p>

            <dl className="mt-6 grid grid-cols-[5rem_minmax(0,1fr)] gap-y-1">
              {project.year && (
                <>
                  <dt className="label leading-[inherit]">Year</dt>
                  <dd>{project.year}</dd>
                </>
              )}
              <dt className="label leading-[inherit]">Role</dt>
              <dd>{project.role}</dd>
              <dt className="label leading-[inherit]">Stack</dt>
              <dd>{project.stack.join(", ")}</dd>
              <dt className="label leading-[inherit]">Links</dt>
              <dd className="flex flex-wrap gap-x-4">
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  ))
                ) : (
                  <span className="text-muted">{project.linkNote}</span>
                )}
              </dd>
            </dl>
          </div>
        </section>

        <div className="card-art grain no-print mb-2 rounded-xl">
          <div className={`flex justify-center gap-4 px-6 pt-10 ${phones ? "pb-10" : ""}`}>
            {project.screenshots.slice(0, phones ? 4 : 1).map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                priority
                sizes={phones ? "10rem" : "(max-width: 900px) 90vw, 46rem"}
                className={
                  phones
                    ? "h-auto w-[22%] max-w-[10rem] rounded-lg border border-white/10 shadow-lg"
                    : "h-auto w-full max-w-[46rem] rounded-t-lg border border-b-0 border-white/10 shadow-lg"
                }
              />
            ))}
          </div>
        </div>

        <Section id="problem" title="Problem">
          <p className="prose-col">{project.problem}</p>
        </Section>
        <Section id="built" title="What I built">
          <p className="prose-col">{project.built}</p>
        </Section>
        <Section id="result" title="Result">
          <p className="prose-col">{project.result}</p>
        </Section>

        {!phones && project.screenshots.length > 1 && (
          <Section id="screens" title="Screens">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.slice(1).map((shot) => (
                <figure key={shot.src}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 640px) 90vw, 22rem"
                    className="h-auto w-full rounded-lg border border-rule"
                  />
                  <figcaption className="mt-1.5 text-muted">{shot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <nav aria-label="More projects" className="no-print flex justify-between gap-4 border-t border-rule py-6">
          <Link href={`/projects/${prev.slug}`} className="plain sans inline-flex items-center gap-1.5">
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {prev.name}
          </Link>
          <Link href={`/projects/${next.slug}`} className="plain sans inline-flex items-center gap-1.5 text-right">
            {next.name}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </nav>
      </main>

      <p className="no-print mb-6">
        <Link href="/#contact" className="sans inline-flex items-center gap-1">
          Work with me <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </p>
      <SheetFooter />
    </div>
  );
}
