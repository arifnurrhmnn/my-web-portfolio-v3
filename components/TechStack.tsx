import React from "react";

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
    <section className="py-12 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-zinc-500 text-sm uppercase tracking-wider">
          SKILLS & TECHNOLOGIES
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {/* First Copy */}
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-zinc-400 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white cursor-pointer"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <span className="text-xl font-semibold hidden md:block">
                {tech.name}
              </span>
            </div>
          ))}

          {/* Second Copy for infinite loop */}
          {technologies.map((tech, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-3 text-zinc-400 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white cursor-pointer"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <span className="text-xl font-semibold hidden md:block">
                {tech.name}
              </span>
            </div>
          ))}

          {/* Third Copy for smooth loop on huge screens */}
          {technologies.map((tech, index) => (
            <div
              key={`dup-2-${index}`}
              className="flex items-center gap-3 text-zinc-400 grayscale hover:grayscale-0 transition-all duration-300 hover:text-white cursor-pointer"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <span className="text-xl font-semibold hidden md:block">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation since Tailwind doesn't have it built-in by default without config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
