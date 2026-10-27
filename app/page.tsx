import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { currentMonth, education, profile, socials, stack, work } from "@/content/cv";
import SheetHeader from "@/components/SheetHeader";
import SheetFooter from "@/components/SheetFooter";
import Section, { SubRow } from "@/components/Section";
import WorkTimeline from "@/components/WorkTimeline";
import ProjectCards from "@/components/ProjectCards";
import CertificateList from "@/components/CertificateList";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/SocialIcon";

const telegram = socials.find((social) => social.network === "Telegram");
const firstYear = work.map((role) => role.from).sort()[0].slice(0, 4);

export default function Home() {
  // Built statically; durations and "now" refresh on every deploy.
  const now = currentMonth();

  return (
    <div id="top" className="sheet">
      <SheetHeader />

      <main id="main" tabIndex={-1} className="outline-none">
        <Section
          id="about"
          num="01"
          title="About"
          extra={
            <SubRow label="Looking for">
              <p className="prose-col">
                {profile.lookingFor} <a href="#contact">Get in touch</a>.
              </p>
            </SubRow>
          }
        >
          <div className="prose-col space-y-3.5 print:space-y-1">
            <p className="sans text-[0.9375rem] leading-relaxed font-semibold tracking-[-0.005em] print:text-[8pt]">{profile.about.lead}</p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="work" num="02" title="Work" meta={`${work.length} roles · since ${firstYear}`}>
          <WorkTimeline now={now} />
        </Section>

        <Section id="projects" num="03" title="Featured projects">
          <ProjectCards />
        </Section>

        <Section id="stack" num="04" title="Stack">
          <dl className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-y-2 print:gap-y-0">
            {stack.map(({ group, items }) => (
              <div key={group} className="contents">
                <dt className="label leading-[inherit]">{group}</dt>
                <dd>
                  {items.map((item, i) => (
                    <Fragment key={item}>
                      <span className="whitespace-nowrap">
                        {item}
                        {i < items.length - 1 && " ·"}
                      </span>{" "}
                    </Fragment>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" num="05" title="Education">
          <ul>
            {education.map((school) => (
              <li key={school.name} className="flex items-baseline justify-between gap-x-6 py-0.5">
                <span className="min-w-0">
                  <span className="sans font-semibold">{school.name}</span>
                  <span className="text-muted">
                    {" "}
                    · <span className="whitespace-nowrap">{school.degree}</span>
                  </span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-muted">
                  {school.start} – {school.end}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="label mt-6 mb-1.5 print:mt-2 print:mb-0">Certificates</h3>
          <CertificateList />
        </Section>

        <Section
          id="contact"
          num="06"
          title="Contact"
          extra={
            <SubRow label="Elsewhere">
              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.network}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="chip">
                      <SocialIcon network={social.network} className="size-3" />
                      {social.network}
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </SubRow>
          }
        >
          <p className="prose-col">
            A role, a project or just a hello — email and Telegram reach me fastest, or leave a note below and it lands in
            my inbox.
          </p>
          <dl className="mt-4 grid grid-cols-[6.5rem_1fr] gap-y-0.5">
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

      <SheetFooter />
    </div>
  );
}
