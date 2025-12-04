"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function About() {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 relative perspective-1000 group"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 z-20 transition-transform duration-500">
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />

              {/* Glass Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10" />
              {/* Using a high quality professional portrait consistent with the theme */}
              <Image
                src="https://images.unsplash.com/photo-1625850902501-cc6baef3e3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwc3R1ZGlvJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzOTY1Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Arif Nur Rohman - Frontend Engineer professional portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                width={400}
                height={500}
                priority
              />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-xl z-20" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-emerald-500/50 rounded-br-xl z-20" />
            </div>

            {/* Decorative Back Element - "Card Opening" Animation */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl -z-10 rotate-3 backdrop-blur-sm border border-white/5 transition-all duration-500 ease-out origin-bottom-right group-hover:rotate-6 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl -z-20 -rotate-2 backdrop-blur-sm border border-white/5 transition-all duration-500 ease-out origin-bottom-left group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:translate-y-2" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-3/5 space-y-8"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-2 backdrop-blur-md">
                My Introduction
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </div>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed font-light">
              <p>
                Hello! My name is{" "}
                <strong className="text-white font-semibold">
                  Arif Nur Rohman
                </strong>
                , and I am a{" "}
                <strong className="text-white font-semibold">
                  Frontend Engineer
                </strong>{" "}
                with over 3 years of professional experience, currently working
                at{" "}
                <strong className="text-white font-semibold">Arkademi</strong>.
              </p>
              <p>
                My journey in technology began during high school when I majored
                in Software Engineering, where I learned the fundamentals of
                programming. I later pursued a degree in Informatics at{" "}
                <strong className="text-white font-semibold">
                  Universitas Amikom Yogyakarta
                </strong>
                , graduating in 2021 with a GPA of{" "}
                <strong className="text-emerald-400 font-semibold">3.86</strong>
                .
              </p>
              <p>
                In my career, I have contributed to significant projects such as
                migrating Arkademi&apos;s website from WordPress to React.js and
                transitioning it to Next.js to enhance performance and
                scalability. I specialize in creating responsive,
                high-performance websites with a focus on SEO optimization and
                have collaborated closely with backend and product teams to
                ensure successful project execution.
              </p>
              <p>
                Additionally, I have managed freelance projects, delivering
                tailored web solutions for clients both locally and
                internationally. I am passionate about building user-centric web
                applications and continuously improving my skills to stay ahead
                in the ever-evolving tech landscape.{" "}
                <strong className="text-emerald-400">
                  Let&apos;s create something amazing together!
                </strong>
              </p>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-emerald-500/20 border border-emerald-400/20"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
