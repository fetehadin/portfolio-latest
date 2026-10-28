import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { TechIcon } from "@/lib/tech";
import {
  answeredFaqs,
  communication,
  currentMonth,
  education,
  experience,
  githubRepos,
  moreProjects,
  practice,
  process,
  profile,
  projects,
  skills,
  socials,
  testimonials,
} from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificateList from "@/components/CertificateList";
import CopyEmail from "@/components/CopyEmail";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";

// Rebuilt daily so role durations ("4 mos") stay current.
export const revalidate = 86400;

const firstYear = experience
  .map((role) => role.from)
  .sort()[0]
  .slice(0, 4);

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="frame">
        <div className="hatch page-top" aria-hidden="true" />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />

          <Section
            id="work"
            num="01"
            title="Selected work"
            meta={`${projects.length} case studies`}
            intro={<p className="lead prose text-muted">{profile.intro}</p>}
          >
            <ul className="grid gap-6 print:gap-2">
              {projects.map((project, i) => (
                <li key={project.slug}>
                  <ProjectCard project={project} flip={i % 2 === 1} priority={i === 0} />
                </li>
              ))}
            </ul>

            <div className="mt-14 lg:ml-[25%] lg:pl-2 print:mt-3 print:ml-0">
              <h3 className="label">More on GitHub</h3>
              <ul className="print-url mt-3 divide-y divide-rule border-y border-rule">
                {moreProjects.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="repo-row">
                      <span className="flex items-center">
                        <span className="repo-icon" aria-hidden="true">
                          <TechIcon tech={item.tech} />
                        </span>
                        <span className="underline decoration-rule underline-offset-[3px]">{item.label}</span>
                      </span>
                      <span className="label inline-flex shrink-0 items-center gap-1.5">
                        {item.note}
                        <ArrowUpRight className="repo-arrow no-print size-3.5" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={githubRepos}
                target="_blank"
                rel="noopener noreferrer"
                className="no-print mt-4 inline-flex items-center gap-1 text-sm"
              >
                Everything else on GitHub
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </Section>

          <Section id="experience" num="02" title="Experience" meta={`${experience.length} roles · since ${firstYear}`}>
            <ExperienceTimeline now={currentMonth()} />
          </Section>

          <Section id="process" num="03" title="How I work" screenOnly>
            <>
              <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {process.map((step, i) => (
                  <li key={step.title}>
                    <p className="num">Step {i + 1}</p>
                    <h3 className="h3 mt-1">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border border-rule bg-surface p-5 shadow-[var(--shadow)] sm:p-6">
                <h3 className="label">Working remotely with me</h3>
                <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                  {communication.map((item) => (
                    <div key={item.title}>
                      <dt className="font-semibold">{item.title}</dt>
                      <dd className="mt-1 text-[0.9375rem] text-muted">{item.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {answeredFaqs.length > 0 && (
                <div className="faq mt-12">
                  <h3 className="label">Questions recruiters ask</h3>
                  <div className="mt-2 divide-y divide-rule border-y border-rule">
                    {answeredFaqs.map((faq) => (
                      <details key={faq.q}>
                        <summary>{faq.q}</summary>
                        <p className="prose pb-4 text-muted">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </>
          </Section>

          <Section id="skills" num="04" title="Skills">
            <dl className="grid gap-y-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-6">
              {skills.map(({ group, items }) => (
                <div key={group} className="contents">
                  <dt className="label pt-0.5">{group}</dt>
                  <dd className="-mt-4 sm:mt-0">{items.join(", ")}</dd>
                </div>
              ))}
              <div className="contents">
                <dt className="label pt-0.5">Practice</dt>
                <dd className="-mt-4 sm:mt-0">{practice.join(", ")}</dd>
              </div>
            </dl>
          </Section>

          <Section id="education" num="05" title="Education & certificates">
            <ul className="space-y-4 print:space-y-1.5">
              {education.map((school) => (
                <li key={school.name} className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <div className="min-w-0">
                    <p className="font-semibold">{school.name}</p>
                    <p className="text-muted">{school.degree}</p>
                  </div>
                  <p className="label shrink-0">
                    {school.start} – {school.end}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="label mt-10 mb-3 print:mt-4 print:mb-1">Certificates</h3>
            <CertificateList />
          </Section>

          <Section id="contact" num="06" title="Contact" screenOnly>
            <p className="lead prose">{profile.contactLine}</p>

            <dl className="mt-8 grid gap-y-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
              <dt className="label pt-1">Email</dt>
              <dd>
                <CopyEmail />
              </dd>
              {socials.map((social) => (
                <Fragment key={social.network}>
                  <dt className="label pt-1">{social.network}</dt>
                  <dd>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.handle}
                    </a>
                  </dd>
                </Fragment>
              ))}
            </dl>

            <Testimonials items={testimonials} />

            <div className="no-print mt-12">
              <h3 className="h3">Or send a message</h3>
              <p className="mt-1 mb-6 text-muted">It goes straight to my inbox.</p>
              <ContactForm />
            </div>
          </Section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
