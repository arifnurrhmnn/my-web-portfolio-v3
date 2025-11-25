"use client";

import React from "react";
import { motion } from "motion/react";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "Arkademi",
    period: "2021 - Present",
    description:
      "Developing and maintaining the core learning management system. Implemented responsive designs and improved site performance by 40%.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    role: "Junior Frontend Web Developer",
    company: "Freelance",
    period: "2019 - 2021",
    description:
      "Collaborated with clients to deliver tailored web solutions. Built 10+ custom websites using modern web technologies.",
    skills: ["HTML/CSS", "JavaScript", "WordPress"],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Tech Startup",
    period: "2018 - 2019",
    description:
      "Assisted in the development of user interfaces and fixed bugs in existing codebases.",
    skills: ["HTML", "CSS", "jQuery"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My journey in the tech industry and the companies I&apos;ve had the
            privilege to work with.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 md:translate-x-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 md:translate-x-[0.5px] mt-1.5 z-10" />

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div
                  className={`p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="flex items-center text-xs text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded-full border border-emerald-900">
                      <Calendar className="w-3 h-3 mr-1" /> {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-300 font-medium mb-3 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-zinc-500" />
                    {exp.company}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
