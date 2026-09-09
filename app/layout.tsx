import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TargetCursor from "@/components/TargetCursor";
import MoltenMetal from "@/components/MoltenMetal";
import CursorGrid from "@/components/CursorGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fetehadin Negash - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col text-foreground antialiased cursor-none relative`} 
        suppressHydrationWarning
      >
        {/* Layer 1: Molten Background (Deepest) - Light Blue / Green / Teal Palette */}
        <div className="fixed inset-0 -z-20 h-full w-full opacity-40 dark:opacity-20">
          <MoltenMetal
            color1="#008080" // Teal
            color2="#008000" // Green
            color3="#ADD8E6" // Light Blue
          />
        </div>

        {/* Layer 2: Cursor Grid (Above Molten, Below Content) */}
        <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
          <CursorGrid
            cellSize={70}
            color="#008080" // Matched to Teal
            radius={140}
            lineWidth={1.2}
          />
        </div>

        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
          cursorColor="#008080"
          cursorColorOnTarget="#008000" // Green Highlight
        />
        
        {/* The Google Translate dropdown */}
        <div id="google_translate_element" className="absolute top-4 right-4 z-50"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}