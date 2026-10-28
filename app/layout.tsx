import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeColor from "@/components/ThemeColor";
import { profile, socials } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

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
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1413" },
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="no-print sr-only z-50 rounded-md bg-surface px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeColor />
          {children}
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
