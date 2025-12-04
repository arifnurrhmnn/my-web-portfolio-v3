import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

// Lazy load components below the fold for better FCP and LCP
const TechStack = dynamic(
  () =>
    import("@/components/TechStack").then((mod) => ({
      default: mod.TechStack,
    })),
  {
    loading: () => <div className="h-20 bg-transparent" />,
    ssr: true,
  }
);

const About = dynamic(
  () => import("@/components/About").then((mod) => ({ default: mod.About })),
  {
    loading: () => <div className="min-h-screen bg-transparent" />,
    ssr: true,
  }
);

const Services = dynamic(
  () =>
    import("@/components/Services").then((mod) => ({ default: mod.Services })),
  {
    loading: () => <div className="py-20 bg-transparent" />,
    ssr: true,
  }
);

const Experience = dynamic(
  () =>
    import("@/components/Experience").then((mod) => ({
      default: mod.Experience,
    })),
  {
    loading: () => <div className="py-20 bg-transparent" />,
    ssr: true,
  }
);

const Certificates = dynamic(
  () =>
    import("@/components/Certificates").then((mod) => ({
      default: mod.Certificates,
    })),
  {
    loading: () => <div className="py-20 bg-transparent" />,
    ssr: true,
  }
);

const Projects = dynamic(
  () =>
    import("@/components/Projects").then((mod) => ({ default: mod.Projects })),
  {
    loading: () => <div className="py-20 bg-transparent" />,
    ssr: true,
  }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => <div className="py-12 bg-transparent" />,
    ssr: true,
  }
);

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
