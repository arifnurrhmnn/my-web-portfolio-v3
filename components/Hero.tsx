"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

// Syntax highlighting simulation
const CodeLine = ({
  line,
  delay,
}: {
  line: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="font-mono text-xs md:text-sm text-zinc-400 whitespace-pre"
  >
    {line}
  </motion.div>
);

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse follow effect for the spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden selection:bg-emerald-500/30">
      {/* Dynamic Spotlight Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.06), transparent 40%)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Work</span>
            </div>

            <div className="space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl text-emerald-400 font-mono font-medium">
                Hi, I&apos;m{" "}
                <span className="text-white font-bold">Arif Nur Rohman</span>
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Frontend{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                  Engineer.
                </span>
              </h1>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              I am a Frontend Engineer from Indonesia with over 3 years of
              experience in the field. Since 2022, I have been working at
              Arkademi as a Frontend Engineer, and since 2023, I have been
              taking on freelance projects as part of my side hustle. I
              specialize in working with the Next.js framework and am passionate
              about delivering high-quality, user-centric web solutions. I am
              excited about the opportunity to collaborate and bring your ideas
              to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-8 text-base group shadow-lg shadow-emerald-500/20"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg px-8 text-base"
                onClick={() => {
                  window.location.href = "mailto:arifnur.rhmnn@gmail.com";
                }}
              >
                <Mail className="mr-2 w-4 h-4" /> Contact Me
              </Button>
            </div>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/arifnurrhmnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/arifnurrohman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Composition (Code Editor + Floating Elements) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]" />

          {/* Main Code Editor Window */}
          <div className="absolute top-10 left-10 right-10 bg-[#0f1117]/90 rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="ml-4 text-xs text-zinc-500 font-mono">
                App.tsx
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 space-y-1">
              <CodeLine
                delay={0.6}
                line={
                  <>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-yellow-100">React</span>{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">&apos;react&apos;</span>;
                  </>
                }
              />
              <CodeLine
                delay={0.7}
                line={
                  <>
                    <span className="text-purple-400">import</span> {"{"}{" "}
                    <span className="text-yellow-100">motion</span> {"}"}{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">
                      &apos;framer-motion&apos;
                    </span>
                    ;
                  </>
                }
              />
              <CodeLine delay={0.8} line="" />
              <CodeLine
                delay={0.9}
                line={
                  <>
                    <span className="text-purple-400">export function</span>{" "}
                    <span className="text-blue-400">Portfolio</span>() {"{"}
                  </>
                }
              />
              <CodeLine
                delay={1.0}
                line={
                  <>
                    {" "}
                    <span className="text-purple-400">return</span> (
                  </>
                }
              />
              <CodeLine
                delay={1.1}
                line={
                  <>
                    {" "}
                    <span className="text-blue-300">&lt;div</span>{" "}
                    <span className="text-sky-300">className</span>=
                    <span className="text-green-400">
                      &quot;frontend-engineer&quot;
                    </span>
                    <span className="text-blue-300">&gt;</span>
                  </>
                }
              />
              <CodeLine
                delay={1.2}
                line={
                  <>
                    {" "}
                    <span className="text-blue-300">&lt;h1&gt;</span>
                    <span className="text-white">Hello World</span>
                    <span className="text-blue-300">&lt;/h1&gt;</span>
                  </>
                }
              />
              <CodeLine
                delay={1.3}
                line={
                  <>
                    {" "}
                    <span className="text-blue-300">&lt;Experience</span>
                  </>
                }
              />
              <CodeLine
                delay={1.4}
                line={
                  <>
                    {" "}
                    <span className="text-sky-300">years</span>=
                    <span className="text-blue-300">{"{"}</span>
                    <span className="text-yellow-300">3</span>
                    <span className="text-blue-300">{"}"}</span>
                  </>
                }
              />
              <CodeLine
                delay={1.5}
                line={
                  <>
                    {" "}
                    <span className="text-sky-300">skills</span>=
                    <span className="text-blue-300">{"{"}</span>[&apos;
                    <span className="text-yellow-300">React</span>&apos;, &apos;
                    <span className="text-yellow-300">TS</span>&apos;]
                    <span className="text-blue-300">{"}"}</span>
                  </>
                }
              />
              <CodeLine
                delay={1.6}
                line={
                  <>
                    {" "}
                    <span className="text-blue-300">/&gt;</span>
                  </>
                }
              />
              <CodeLine
                delay={1.7}
                line={
                  <>
                    {" "}
                    <span className="text-blue-300">&lt;/div&gt;</span>
                  </>
                }
              />
              <CodeLine delay={1.8} line={<> );</>} />
              <CodeLine delay={1.9} line={<>{"}"}</>} />
            </div>
          </div>

          {/* Floating Elements */}

          {/* 1. Performance Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4"
          >
            <div className="relative flex items-center justify-center w-12 h-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-zinc-800"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-emerald-500"
                  strokeDasharray="125.6"
                  strokeDashoffset="12.5"
                />
              </svg>
              <span className="absolute text-xs font-bold text-emerald-500">
                98
              </span>
            </div>
            <div>
              <div className="text-xs text-zinc-400">Performance</div>
              <div className="text-sm font-bold text-white">Excellent</div>
            </div>
          </motion.div>

          {/* 2. Tech Stack Icons */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -left-8 bottom-32 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
          >
            <div className="relative w-8 h-8">
              <Image
                src="https://cdn.simpleicons.org/nextdotjs/white"
                alt="Next.js"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute left-10 bottom-10 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
          >
            <div className="relative w-8 h-8">
              <Image
                src="https://cdn.simpleicons.org/typescript/3178C6"
                alt="TypeScript"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute -right-8 bottom-48 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
          >
            <div className="relative w-8 h-8">
              <Image
                src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                alt="Tailwind CSS"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* 3. Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute right-0 bottom-20 bg-white/10 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl shadow-2xl max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                System Status
              </span>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[90%]" />
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>Deployment</span>
                <span>Success</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for grid */}
      <style>{`
        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.02'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
