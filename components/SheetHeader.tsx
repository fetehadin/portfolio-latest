import { Fragment } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { profile, socials } from "@/content/cv";
import ThemeToggle from "@/components/ThemeToggle";
import SectionNav from "@/components/SectionNav";
import SocialIcon from "@/components/SocialIcon";
import LocalTime from "@/components/LocalTime";
import CopyEmail from "@/components/CopyEmail";

const telegram = socials.find((social) => social.network === "Telegram");

export default function SheetHeader() {
  return (
    <header className="sheet-header pb-9 print:pb-2">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
        <div className="flex items-center gap-4">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={72}
            height={72}
            priority
            className="portrait size-16 shrink-0 rounded-lg border border-rule object-cover sm:size-[4.5rem]"
          />
          <div className="min-w-0">
            <h1 className="sans text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">
              <a href="#top" className="plain">
                <span className="mr-1.5 align-[0.25em] font-mono text-[0.625rem] font-normal text-accent">0</span>
                {profile.name}
              </a>
            </h1>
            {/* Each phrase stays on one line; wrapping happens only between them. */}
            <p className="mt-1">
              {profile.role.split(" · ").map((part, i, parts) => (
                <Fragment key={part}>
                  <span className="whitespace-nowrap">
                    {part}
                    {i < parts.length - 1 && " ·"}
                  </span>{" "}
                </Fragment>
              ))}
            </p>
            <p className="text-muted">
              <span className="whitespace-nowrap">{profile.city} ·</span>{" "}
              <span className="whitespace-nowrap">
                {profile.utc}
                <span className="print:hidden">
                  {" "}
                  · <LocalTime /> local
                </span>
              </span>
            </p>
            <p className="hidden print:block">
              {profile.email} · {profile.domain} · Telegram {telegram?.handle}
            </p>
          </div>
        </div>

        <SectionNav />
      </div>

      <div className="no-print action-bar mt-6 flex flex-wrap items-center justify-between gap-2">
        <ul className="flex items-center" aria-label="Elsewhere">
          {socials.map((social) => (
            <li key={social.network}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link plain"
                aria-label={`${social.network} ${social.handle}`}
                title={`${social.network} ${social.handle}`}
              >
                <SocialIcon network={social.network} />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <CopyEmail />
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="plain sans inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-muted hover:bg-accent-soft"
          >
            <Download className="size-3.5" aria-hidden="true" />
            CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
