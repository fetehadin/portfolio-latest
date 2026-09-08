import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main constrained content */}
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-2 md:p-6 max-w-7xl mx-auto w-full space-y-6 md:space-y-4 overflow-hidden">
        
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
      </main>
      {/* Footer naturally spans 100% of the screen width */}
      <Contact />
    </div>
  );
}