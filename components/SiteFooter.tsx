import Link from "next/link";
import { profile, socials } from "@/content/site";
import Shortcuts from "@/components/Shortcuts";

export default function SiteFooter() {
  return (
    <footer className="no-print border-t border-rule">
      <div className="container flex flex-col gap-4 py-10 text-sm sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.city}
          </p>
          <Shortcuts />
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-muted">
          {socials.map((social) => (
            <li key={social.network}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.network}
              </a>
            </li>
          ))}
          <li>
            <a href="/cv.md">cv.md</a>
          </li>
          <li>
            <a href="/llms.txt">llms.txt</a>
          </li>
          <li>
            <Link href="/colophon">Colophon</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
