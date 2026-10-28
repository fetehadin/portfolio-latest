import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { profile } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";
import AccentSwatch from "@/components/AccentSwatch";
import { HeaderNav, MobileMenu } from "@/components/HeaderNav";

/** A framed bar that floats over the page. On case-study pages the section links point back home. */
export default function SiteHeader({ home = true }: { home?: boolean }) {
  const base = home ? "" : "/";

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="plain flex min-w-0 items-center gap-2.5">
          <Image src={profile.photo} alt="" width={32} height={32} sizes="32px" className="size-8 shrink-0 border border-rule object-cover" />
          <span className="truncate text-[0.9375rem] font-semibold tracking-[-0.01em]">{profile.name}</span>
        </Link>

        <HeaderNav base={base} />

        <div className="flex shrink-0 items-center gap-2">
          <div className="btn-group">
            <ThemeToggle />
            <AccentSwatch />
          </div>
          {/* Wrapped: .btn sets display, which would override the hidden utility. */}
          <div className="hidden sm:block">
            <a href={`${base}#contact`} className="btn btn-primary btn-sm">
              <Send className="size-4" aria-hidden="true" />
              Contact me
            </a>
          </div>
          <MobileMenu base={base} />
        </div>
      </div>
    </header>
  );
}
