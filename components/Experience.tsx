"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            My professional journey and technical expertise across various
            projects and collaborations.
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Main Full-time Role - Arkademi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-10 hover:border-emerald-500/30 transition-all duration-500 group shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Company Logo / Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-500 shrink-0 shadow-inner">
                <Building2 className="w-8 h-8 text-emerald-400" />
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
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium backdrop-blur-sm">
                      Full-time
                    </span>
                    <span className="text-zinc-500 text-sm font-mono">
                      2021 - Present
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">
                  At Arkademi, I started by working on the migration of the
                  company&apos;s website from WordPress to React.js, utilizing
                  technologies such as React.js, JavaScript, Redux, Bootstrap,
                  and SCSS. This involved collaborating closely with the backend
                  team for API integration and working with the product team to
                  plan and discuss upcoming features. As the migration
                  progressed, we transitioned several websites to Next.js to
                  enhance performance and scalability.
                </p>

                {/* Key Achievements */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Developing responsive websites and high-performance websites with a focus on SEO optimization",
                    "Integrating with APIs and third-party libraries",
                    "Migrating the website to React.js and later transitioning to Next.js to enhance performance, utilizing TypeScript for better code quality",
                    "Contributing to the development of Arkademi's website in partnership with Kartu Prakerja, focusing on meeting the specific needs of the partner",
                    "Developing an internal company website to assist with operational processes",
                    "Managing tasks within my frontend team and collaborating with product and tech teams",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">
                  Throughout my time at Arkademi, I gained experience in
                  responsive web design, debugging, problem-solving, team
                  collaboration, project management, web performance
                  optimization, and SEO, all of which have been crucial in
                  delivering high-quality web solutions.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Redux Toolkit",
                    "Zustand",
                    "Tailwind CSS",
                    "Bootstrap",
                    "SCSS",
                    "AI Integration",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-xs text-zinc-400 font-mono hover:bg-white/10 transition-colors"
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
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all shadow-lg hover:border-emerald-500/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Freelance Frontend Developer
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      TMS Isuzu Portfolio & Admin • 2023 - 2024
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Developed the portfolio website and admin dashboard using
                  Next.js. Built page structures, components, and core frontend
                  logic without a predefined UI design. Implemented data flow,
                  connected frontend features with Next.js API Routes, and
                  managed state using Redux to ensure stable and functional
                  dashboard operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Styled-Components", "Redux"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 text-zinc-400 rounded text-[10px] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Freelance Card 2 (Simulating a specific type of client work) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all shadow-lg hover:border-emerald-500/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Freelance Frontend Developer
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Kasandra Dashboard • 2024
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Converted Figma designs into responsive HTML and CSS layouts.
                  Ensured pixel-accurate implementation, clean structure, and
                  consistent UI behavior across devices. Delivered a front-end
                  ready for integration by the client’s development team.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 text-zinc-400 rounded text-[10px] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
