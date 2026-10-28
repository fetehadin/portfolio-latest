import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile, proof } from "@/content/site";
import LocalTime from "@/components/LocalTime";

function Portrait({ className, size, sizes }: { className: string; size: { w: number; h: number }; sizes: string }) {
  return (
    <Image
      src={profile.photo}
      alt={profile.name}
      width={size.w}
      height={size.h}
      sizes={sizes}
      priority
      className={`portrait rounded-[6px] border border-rule object-cover object-top ${className}`}
    />
  );
}

/** Above the fold: who, what, where, availability, and the three ways forward. */
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero container pt-10 pb-16 lg:pt-20 lg:pb-28">
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-8">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="mt-6 flex items-center gap-4 lg:block">
            <div className="portrait-wrap shrink-0 lg:hidden">
              <Portrait className="size-24" size={{ w: 96, h: 96 }} sizes="96px" />
            </div>
            <div>
              <h1 id="hero-heading" className="display">
                {profile.name}
              </h1>
              <p className="label mt-2 lg:hidden">{profile.role}</p>
            </div>
          </div>

          <p className="lead prose mt-5">{profile.positioning}</p>

          <p className="label mt-5 flex flex-wrap gap-x-3">
            <span className="hidden lg:inline">{profile.role} ·</span>
            <span>
              {profile.city} · {profile.utc}
            </span>
            <span className="no-print">
              <LocalTime /> local time
            </span>
          </p>

          {/* Shown only on the printed CV, where buttons don't work. */}
          <p className="print-only mt-2">
            {profile.email} · {profile.domain} · github.com/fetehadin · linkedin.com/in/fetehadin
          </p>

          <div className="no-print mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn">
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
            <a href="#work" className="btn btn-ghost">
              See my work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="no-print mt-7 flex flex-wrap gap-2" aria-label="Highlights">
            {proof.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="chip">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="portrait-wrap hidden lg:col-span-4 lg:block lg:justify-self-end">
          <Portrait className="h-[375px] w-[300px]" size={{ w: 300, h: 375 }} sizes="300px" />
        </div>
      </div>
    </section>
  );
}
