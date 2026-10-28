import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Colophon",
  description: "How fetehadin.pro.et is made: stack, typefaces, palette and credits.",
  alternates: { canonical: "/colophon" },
};

const palette: [string, string, string][] = [
  ["Paper", "#F4F2EC", "#0F1413"],
  ["Ink", "#1B1C19", "#E8E6DE"],
  ["Muted", "#66645C", "#93A09B"],
  ["Rule", "#DDD9CD", "#26302E"],
  ["Accent", "#0F5A46", "#4FB58F"],
];

export default function Colophon() {
  const row = "border-t border-rule py-8 sm:grid sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8";

  return (
    <>
      <SiteHeader home={false} />
      <main id="main" tabIndex={-1} className="container pt-10 pb-16 outline-none lg:pt-16">
        <h1 className="display">Colophon</h1>
        <p className="lead prose mt-5 text-muted">How this site is made.</p>

        <div className="mt-12">
          <section className={row}>
            <h2 className="label mb-3 sm:mb-0 sm:pt-1">Stack</h2>
            <p className="prose">
              Next.js 16 (App Router) and React 19, written in TypeScript and styled with Tailwind CSS v4. Pages are
              static Server Components; only the theme toggle, clock, copy button, dialogs and contact form run
              JavaScript in the browser. Messages from the contact form are sent with Resend. Hosted on Vercel.
            </p>
          </section>

          <section className={row}>
            <h2 className="label mb-3 sm:mb-0 sm:pt-1">Type</h2>
            <p className="prose">
              Geist for text and headings, Geist Mono for labels, dates and numbers. Two weights only, 400 and 600,
              loaded with <code className="font-mono text-[0.9em]">next/font</code> so nothing shifts as fonts load.
            </p>
          </section>

          <section className={row}>
            <h2 className="label mb-3 sm:mb-0 sm:pt-1">Palette</h2>
            <div>
              <p className="prose">
                Warm paper and ink. The one accent is the bottle green of the blazer in my photo. Every text color
                passes WCAG AA in both themes.
              </p>
              <table className="mt-5 w-full max-w-md text-sm">
                <thead>
                  <tr className="label text-left">
                    <th className="pb-2 font-normal">Token</th>
                    <th className="pb-2 font-normal">Light</th>
                    <th className="pb-2 font-normal">Dark</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {palette.map(([name, light, dark]) => (
                    <tr key={name} className="border-t border-rule">
                      <td className="py-2 font-sans">{name}</td>
                      {[light, dark].map((hex) => (
                        <td key={hex} className="py-2">
                          <span
                            className="mr-2 inline-block size-3 rounded-sm border border-rule align-[-1px]"
                            style={{ background: hex }}
                            aria-hidden="true"
                          />
                          {hex}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={row}>
            <h2 className="label mb-3 sm:mb-0 sm:pt-1">Extras</h2>
            <p className="prose">
              Keyboard shortcuts (press <span className="kbd">?</span>), a print stylesheet that turns the home page into
              an A4 CV, the same CV as <a href="/cv.md">Markdown</a>, and a plain-text summary for AI assistants at{" "}
              <a href="/llms.txt">/llms.txt</a>.
            </p>
          </section>

          <section className={row}>
            <h2 className="label mb-3 sm:mb-0 sm:pt-1">Credits</h2>
            <p className="prose">
              Design inspired by{" "}
              <a href="https://www.seefun.dev" target="_blank" rel="noopener noreferrer">
                seefun.dev
              </a>
              ,{" "}
              <a href="https://www.mikaelen.site" target="_blank" rel="noopener noreferrer">
                mikaelen.site
              </a>{" "}
              and{" "}
              <a href="https://www.miheretab.space" target="_blank" rel="noopener noreferrer">
                miheretab.space
              </a>
              . Icons from Lucide; brand marks from Simple Icons.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
