"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    name: "Arkademi",
    imageDisplay: "/img/thumnail-arkademi.webp",
    typeProject: "Work Project",
    linkSite: "https://arkademi.com",
    linkGithub: "",
    tags: ["next.js", "redux", "bootstrap", "typescript", "html", "scss"],
  },
  {
    id: 2,
    name: "My Web Portfolio",
    imageDisplay: "/img/thumnail-mywebportfolio.webp",
    typeProject: "Personal Project",
    linkSite: "http://arifnurrohman.com",
    linkGithub: "https://github.com/arifnurrhmnn/my-web-portfolio",
    tags: [
      "react.js",
      "next.js",
      "styled components",
      "html",
      "css",
      "javascript",
    ],
  },
  {
    id: 3,
    name: "Batik Kita",
    imageDisplay: "/img/thumnail-batikkita.webp",
    typeProject: "Thesis Project",
    linkSite: "",
    linkGithub: "https://github.com/arifnurrhmnn/batikkita",
    tags: [
      "django",
      "python",
      "tensorflow",
      "colaboratory",
      "html",
      "css",
      "javascript",
      "bootstrap",
    ],
  },
  {
    id: 4,
    name: "My Furniture",
    imageDisplay: "/img/thumnail-myfurniture.webp",
    typeProject: "College Project",
    linkSite: "",
    linkGithub: "https://github.com/arifnurrhmnn/myfurniture",
    tags: ["php", "html", "css", "javascript", "bootstrap", "mysql"],
  },
  {
    id: 5,
    name: "Klaten Kita",
    imageDisplay: "/img/thumnail-klatenkita.webp",
    typeProject: "IDCamp Challenge Project",
    linkSite: "",
    linkGithub: "https://github.com/arifnurrhmnn/klatenkita",
    tags: ["php", "html", "css", "javascript", "bootstrap", "mysql"],
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
                key={project.id} // Use id as key for better stability
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
                    src={project.imageDisplay}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90" />

                  {/* Content Overlay - Positioned absolutely to sit over the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col h-full justify-end">
                    {/* Buttons positioned at top left */}
                    <div className="absolute top-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.linkGithub && (
                        <a
                          href={project.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-zinc-800 text-white rounded-full hover:bg-emerald-600 transition-colors border border-zinc-700 hover:border-emerald-500"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.linkSite && (
                        <a
                          href={project.linkSite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-zinc-800 text-white rounded-full hover:bg-emerald-600 transition-colors border border-zinc-700 hover:border-emerald-500"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="mb-2">
                        <span className="text-emerald-400 text-[10px] md:text-xs font-medium tracking-wider uppercase bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 backdrop-blur-sm">
                          {project.typeProject}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h3>

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
