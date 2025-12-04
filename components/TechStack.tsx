"use client";

import React from "react";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "Sass",
    icon: "https://cdn.simpleicons.org/sass/CC6699",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
  },
  {
    name: "Styled Comp",
    icon: "https://cdn.simpleicons.org/styledcomponents/DB7093",
  },
  {
    name: "PHP",
    icon: "https://cdn.simpleicons.org/php/777BB4",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Supabase",
    icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
];

export function TechStack() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden relative bg-transparent">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto px-4 mb-8 relative z-10">
        <p className="text-center text-zinc-500 text-sm uppercase tracking-wider font-medium">
          SKILLS & TECHNOLOGIES
        </p>
      </div>

      <div className="relative z-10 flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-12 items-center">
          {/* Three copies for seamless loop */}
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 text-zinc-500 hover:text-white cursor-pointer transition-all duration-300 group"
              >
                <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-lg md:text-2xl font-semibold">
                  {tech.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
