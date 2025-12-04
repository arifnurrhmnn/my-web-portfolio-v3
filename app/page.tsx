import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      {/* Global Background Gradients/Blobs for Glassmorphism Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Services />
          <Experience />
          <Certificates />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
