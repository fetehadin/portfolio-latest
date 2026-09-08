import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TargetCursor from "@/components/TargetCursor";
import MoltenMetal from "@/components/MoltenMetal";
import CursorGrid from "@/components/CursorGrid"; // Added import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nezira W - Portfolio",
  description: "Software Engineer Portfolio, odoo, frontend, backend, fullstack",
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
        {/* Layer 1: Molten Background (Deepest) */}
        <div className="fixed inset-0 -z-20 h-full w-full opacity-40 dark:opacity-20">
          <MoltenMetal
            color1="#E91E63"
            color2="#B497CF"
            color3="#F2EFE9"
            speed={0.35}
            scale={4}
            detail={3}
            glow={1.6}
            coreSize={0.1}
            swirl={1}
            fold={-0.2}
            blackPoint={0.05}
            brightness={1.3}
            colorMode="molten"
            grain
            grainIntensity={0.05}
            mouseInteraction
            mouseStrength={0.3}
            opacity={1}
          />
        </div>

        {/* Layer 2: Cursor Grid (Above Molten, Below Content) */}
        <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
          <CursorGrid
            cellSize={70}
            color="#E91E63" // Matched to your primary pink theme instead of purple
            radius={140}
            falloff="smooth"
            holdTime={400}
            fadeDuration={800}
            lineWidth={1.2}
            maxOpacity={1}
            fillOpacity={0}
            gridOpacity={0}
            cellRadius={0}
            clickPulse
            pulseSpeed={600}
          />
        </div>

        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
          cursorColor="#161211"
          cursorColorOnTarget="#E91E63"
        />
        
        {/* The Google Translate dropdown */}
        <div id="google_translate_element" className="absolute top-4 right-4 z-50"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}