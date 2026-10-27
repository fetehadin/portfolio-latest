import { education, profile, skills, socials, tools } from "@/content/cv";
import SheetHeader from "@/components/SheetHeader";
import Section from "@/components/Section";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import CertificateList from "@/components/CertificateList";
import ContactForm from "@/components/ContactForm";
import Shortcuts from "@/components/Shortcuts";

const telegram = socials.find((social) => social.network === "Telegram");

export default function Home() {
  return (
    <div id="top" className="sheet">
      <SheetHeader />

      <main id="main" tabIndex={-1} className="outline-none">
        <Section id="about" title="About">
          <div className="prose-col space-y-2">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-accent">{profile.availability}</p>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceList />
        </Section>

        <Section id="projects" title="Projects">
          <ProjectList />
        </Section>

        <Section id="education" title="Education">
          <ul>
            {education.map((school) => (
              <li key={school.name} className="flex flex-wrap items-baseline justify-between gap-x-6 py-0.5">
                <span>
                  <span className="font-sans font-semibold">{school.name}</span>
                  <span className="text-muted"> · {school.degree}</span>
                </span>
                <span className="text-muted">
                  {school.start} – {school.end}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <p className="prose-col">{skills}</p>
        </Section>

        <Section id="tools" title="Tools">
          <p className="prose-col">{tools}</p>
        </Section>

        <Section id="certificates" title="Certificates">
          <CertificateList />
        </Section>

        <Section id="contact" title="Contact">
          <dl className="grid grid-cols-[6rem_1fr] gap-y-0.5">
            <dt className="label leading-[inherit]">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
            {telegram && (
              <>
                <dt className="label leading-[inherit]">Telegram</dt>
                <dd>
                  <a href={telegram.href} target="_blank" rel="noopener noreferrer">
                    {telegram.handle}
                  </a>
                </dd>
              </>
            )}
          </dl>
          <ContactForm />
        </Section>
      </main>

      <footer className="no-print flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-5 text-muted">
        <p>
          <a href={profile.site} className="plain">
            {profile.domain}
          </a>{" "}
          · © 2026 · Design inspired by{" "}
          <a href="https://www.seefun.dev" target="_blank" rel="noopener noreferrer">
            seefun.dev
          </a>
        </p>
        <Shortcuts />
      </footer>
    </div>
  );
}
