"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My career journey, highlighting my core role at Arkademi and diverse
            freelance collaborations.
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Main Full-time Role - Arkademi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-8 md:p-10 hover:border-emerald-500/50 transition-all duration-500 group"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Company Logo / Icon */}
              <div className="w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:scale-110 transition-all duration-300 shrink-0 transform-gpu">
                <Building2 className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Frontend Engineer
                    </h3>
                    <p className="text-lg text-zinc-400">Arkademi</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                      Full-time
                    </span>
                    <span className="text-zinc-500 text-sm font-mono">
                      2021 - Present
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">
                  Developing and maintaining the core learning management system
                  (LMS) for one of Indonesia&apos;s leading EdTech platforms. Focused
                  on scalability, performance, and delivering a seamless user
                  experience for thousands of students.
                </p>

                {/* Key Achievements */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Spearheaded the migration to Next.js, improving load times by 40%",
                    "Implemented a comprehensive design system using Tailwind CSS",
                    "Integrated real-time video streaming capabilities",
                    "Optimized payment gateway flows for higher conversion rates",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Redux Toolkit",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Freelance Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              Freelance & Independent Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Freelance Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/30 rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Frontend Specialist
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Various Clients • 2019 - 2021
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Delivered custom web solutions for small businesses and
                  startups. Specialized in converting design mockups
                  (Figma/Adobe XD) into pixel-perfect, responsive HTML/CSS/React
                  code.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WordPress", "Custom Themes", "Shopify", "React"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded text-[10px] border border-zinc-800"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Freelance Card 2 (Simulating a specific type of client work) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/30 rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      UI Implementation
                    </h4>
                    <p className="text-zinc-400 text-sm">Contract Work</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Collaborated with backend teams to implement complex
                  dashboards and data visualization interfaces. Focused on
                  reusable component libraries and state management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Dashboard UI", "Chart.js", "API Integration"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded text-[10px] border border-zinc-800"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
