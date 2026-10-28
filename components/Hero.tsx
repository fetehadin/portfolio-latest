import Image from "next/image";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile, proof } from "@/content/site";
import LocalTime from "@/components/LocalTime";

function Portrait({ className, size, sizes }: { className: string; size: number; sizes: string }) {
  return (
    <Image
      src={profile.photo}
      alt={profile.name}
      width={size}
      height={size}
      sizes={sizes}
      priority
      className={`portrait object-cover object-top ${className}`}
    />
  );
}

function CropMarks() {
  return (
    <>
      <span className="crop crop-tl" aria-hidden="true" />
      <span className="crop crop-tr" aria-hidden="true" />
      <span className="crop crop-bl" aria-hidden="true" />
      <span className="crop crop-br" aria-hidden="true" />
    </>
  );
}

/** Above the fold: who, what, where, availability, and the three ways forward. */
export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section aria-labelledby="hero-heading" className="hero container pt-28 pb-16 sm:pt-32 lg:pt-32 lg:pb-24">
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-8">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="mt-7 flex items-center gap-5 lg:block">
            <div className="portrait-frame shrink-0 p-1.5 lg:hidden">
              <Portrait className="size-20 sm:size-24" size={96} sizes="96px" />
              <CropMarks />
            </div>
            <div className="min-w-0">
              <h1 id="hero-heading" className="display">
                {first} <span className="soft">{rest.join(" ")}</span>
              </h1>
              <p className="label mt-2 lg:hidden">{profile.role}</p>
            </div>
          </div>

          <p className="lead prose mt-6 text-muted">{profile.positioning}</p>

          <p className="label mt-6 flex flex-wrap gap-x-3">
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
            {profile.email} · {profile.domain} · github.com/fetehadin · linkedin.com/in/fetehadin · x.com/fetebuilds
          </p>

          <div className="no-print mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href="#contact" className="btn btn-primary">
              <Send className="size-4" aria-hidden="true" />
              Get in touch
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn">
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
            <a href="#work" className="btn-link col-span-2 justify-self-start sm:self-center">
              See my work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="no-print mt-8 flex flex-wrap gap-2" aria-label="Highlights">
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
          <figure className="portrait-frame">
            <Portrait className="h-[340px] w-[300px]" size={500} sizes="300px" />
            <CropMarks />
            <figcaption className="label mt-2.5 flex justify-between">
              <span>{profile.city}</span>
              <span>{profile.utc}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
