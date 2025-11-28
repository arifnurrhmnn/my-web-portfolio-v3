"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Arkademi",
    category: "EdTech Platform",
    description:
      "A comprehensive Learning Management System (LMS) serving thousands of students. Features include video streaming, progress tracking, and secure payments.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZSUyMHVpfGVufDF8fHx8MTc2Mzk2NTc1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Node.js", "AWS"],
    link: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A minimalist portfolio website designed to showcase my work and skills. Built with modern animations and a dark theme.",
    image:
      "https://images.unsplash.com/photo-1557752370-a545ea73b64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMHBvcnRmb2xpbyUyMHdlYnNpdGUlMjB1aXxlbnwxfHx8fDE3NjM5NjU3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Batik Kita",
    category: "E-Commerce",
    description:
      "An online store for traditional Indonesian Batik. Features a custom shopping cart, product filtering, and payment gateway integration.",
    image:
      "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZS1jb21tZXJjZSUyMHdlYnNpdGUlMjBtb2NrdXB8ZW58MXx8fHwxNzYzOTY1NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Firebase", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "MyFurniture",
    category: "Interior Design",
    description:
      "A catalog website for a modern furniture brand. High-quality imagery and smooth transitions to highlight product details.",
    image:
      "https://images.unsplash.com/photo-1695634184046-93d24e779ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzdG9yZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzYzOTY1Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Styled Components"],
    link: "#",
    github: "#",
  },
  {
    title: "Finance Flow",
    category: "Fintech",
    description:
      "A dashboard for tracking personal finances, visualizing expenses, and managing investments with real-time data.",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZGFzaGJvYXJkJTIwdWl8ZW58MXx8fHwxNzYzOTY1ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Recharts", "Supabase"],
    link: "#",
    github: "#",
  },
  {
    title: "Travel Buddy",
    category: "Travel App",
    description:
      "An interactive travel planner that allows users to create itineraries, discover local attractions, and share plans with friends.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjB1aXxlbnwxfHx8fDE3NjM5NjU4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Google Maps API"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= projects.length;

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleCount(4);
      // Optional: Scroll back to top of projects section
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(projects.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A showcase of my best work, ranging from complex web applications to
            beautiful landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence>
            {projects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.title} // Use title as key for better stability than index when list changes
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: index < 4 ? index * 0.1 : 0,
                }}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 h-[400px]"
              >
                {/* Image Container - Fixed Height */}
                <div className="h-full w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90" />

                  {/* Content Overlay - Positioned absolutely to sit over the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col h-full justify-end">
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="mb-2">
                        <span className="text-emerald-400 text-xs md:text-sm font-medium tracking-wider uppercase bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-300 text-sm md:text-base mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-zinc-800/80 backdrop-blur text-xs text-zinc-300 rounded border border-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                          <a
                            href={project.github}
                            className="p-2 bg-zinc-800 text-white rounded-full hover:bg-emerald-600 transition-colors border border-zinc-700 hover:border-emerald-500"
                          >
                            <Github size={18} />
                          </a>
                          <a
                            href={project.link}
                            className="p-2 bg-zinc-800 text-white rounded-full hover:bg-emerald-600 transition-colors border border-zinc-700 hover:border-emerald-500"
                          >
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={handleToggleView}
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-full px-8"
            >
              {isExpanded ? "Show Less Projects" : "View All Projects"}
              <ChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
