import { profile } from "@/content/cv";
import Shortcuts from "@/components/Shortcuts";

export default function SheetFooter() {
  return (
    <footer className="no-print flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-5 text-muted">
      <p>
        © 2026 {profile.name} · {profile.city.split(",")[0]}
      </p>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <a href="/cv.md">cv.md</a>
        <Shortcuts />
        <a href="#top">Top ↑</a>
      </div>
    </footer>
  );
}
