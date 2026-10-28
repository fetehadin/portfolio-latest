import Link from "next/link";
import { nav, profile } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";

/** Slim sticky header. On case-study pages the section links point back to the home page. */
export default function SiteHeader({ home = true }: { home?: boolean }) {
  const base = home ? "" : "/";

  return (
    <header className="site-header">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="plain text-[0.9375rem] font-semibold tracking-[-0.01em]">
          {profile.name}
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
          <ol className="flex items-center gap-5">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`${base}#${item.id}`} className="nav-link">
                  <span className="num mr-1 text-[0.6875rem]">0{item.key}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href={`${base}#contact`} className="btn btn-primary min-h-9 px-3.5 text-sm">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
