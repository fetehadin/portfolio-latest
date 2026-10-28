import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeColor from "@/components/ThemeColor";
import Cursor from "@/components/Cursor";
import { accentScript } from "@/components/AccentSwatch";
import { profile, socials } from "@/content/site";

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: `%s — ${profile.name}` },
  description: profile.description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    type: "profile",
    url: profile.site,
    siteName: profile.name,
    title,
    description: profile.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fetebuilds",
    creator: "@fetebuilds",
    title,
    description: profile.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1d2320" },
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.site,
  image: `${profile.site}${profile.photo}`,
  jobTitle: profile.role,
  description: profile.description,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: profile.city, addressCountry: "ET" },
  sameAs: socials.map((social) => social.href),
  knowsAbout: ["Backend development", "API design", "Django", "Node.js", "PostgreSQL", "Next.js", "React Native"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies a saved accent color before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
      </head>
      <body>
        {/* Decorative grid behind the page, with a spotlight that follows the cursor. */}
        <div className="backdrop no-print" aria-hidden="true">
          <div className="backdrop-grid" />
          <div className="backdrop-grid backdrop-spot" />
          <span className="sparkle" style={{ left: "calc(50% - 576px)", top: "192px" }} />
          <span className="sparkle" style={{ left: "calc(50% + 480px)", top: "480px" }} />
          <span className="sparkle sparkle-sm" style={{ left: "calc(50% - 384px)", top: "672px" }} />
          <span className="sparkle sparkle-sm" style={{ left: "calc(50% + 672px)", top: "96px" }} />
        </div>
        <a
          href="#main"
          className="no-print sr-only z-50 rounded-md bg-surface px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeColor />
          {children}
          <Cursor />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, trusted content from content/site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
