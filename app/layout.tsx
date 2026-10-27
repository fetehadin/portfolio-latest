import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Desk from "@/components/Desk";
import { profile } from "@/content/cv";

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

const title = `${profile.name} | Software Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title,
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
    { media: "(prefers-color-scheme: light)", color: "#1F2B29" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1413" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a
          href="#main"
          className="no-print sr-only z-50 rounded-[2px] bg-paper px-3 py-1.5 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Desk />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
