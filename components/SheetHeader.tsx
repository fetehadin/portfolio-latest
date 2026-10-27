import Image from "next/image";
import { nav, profile, socials } from "@/content/cv";
import ThemeToggle from "@/components/ThemeToggle";

const telegram = socials.find((social) => social.network === "Telegram");

export default function SheetHeader() {
  return (
    <header className="sheet-header pb-7">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        <div className="flex items-center gap-4">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={72}
            height={72}
            priority
            className="portrait size-16 shrink-0 rounded-[2px] border border-rule object-cover sm:size-[4.5rem]"
          />
          <div>
            <h1 className="font-sans text-[1.25rem] leading-tight font-semibold tracking-[-0.02em]">
              <a href="#top" className="plain">
                <span className="mr-1.5 align-[0.2em] font-mono text-[0.6875rem] font-normal text-accent">
                  0
                </span>
                {profile.name}
              </a>
            </h1>
            <p className="mt-1">{profile.role}</p>
            <p className="text-muted">{profile.location}</p>
            <p className="hidden print:block">
              {profile.email} · {profile.domain} · Telegram {telegram?.handle}
            </p>
          </div>
        </div>

        <div className="no-print flex items-center gap-3">
          <a href={profile.cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </div>

      <nav aria-label="Sections" className="no-print mt-6">
        <ol className="flex flex-wrap gap-x-5 gap-y-1 font-sans">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="plain">
                <span className="mr-1 font-mono text-[0.6875rem] text-accent">{item.key}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1" aria-label="Elsewhere">
        {socials.map((social) => (
          <li key={social.network} className="tip">
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.network} <span className="text-muted">{social.handle}</span>
            </a>
            <span className="tip-card no-print" aria-hidden="true">
              <span className="block font-sans font-semibold">{social.handle}</span>
              <span className="text-muted">{social.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
}
