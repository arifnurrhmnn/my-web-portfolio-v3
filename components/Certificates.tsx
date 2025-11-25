"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calendar, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Front-End Web Developer",
    issuer: "PROGATE",
    date: "Jun 2021",
    description: "Fundamental React for Front-end Web Development",
    color: "emerald",
  },
  {
    id: 2,
    title: "Back-End Developer",
    issuer: "DICODING",
    date: "Jun 2021",
    description: "Learn to Create Back-End Apps for Beginners",
    color: "blue",
  },
  {
    id: 3,
    title: "Web Developer",
    issuer: "PROGATE",
    date: "Jun 2021",
    description: "Web Development Path (Node.js)",
    color: "emerald",
  },
  {
    id: 4,
    title: "Programming and Software Development",
    issuer: "BNSP",
    date: "Oct 2020",
    description: "Junior Web Developer Certification",
    color: "purple",
  },
  {
    id: 5,
    title: "Machine Learning Developer",
    issuer: "DICODING",
    date: "Oct 2020",
    description: "Learning Machine Learning for Beginners",
    color: "blue",
  },
  {
    id: 6,
    title: "Technology & Software",
    issuer: "SKILL ACADEMY",
    date: "Apr 2020",
    description: "Programming Foundation for Data Science",
    color: "orange",
  },
  {
    id: 7,
    title: "Cisco Networking Academy",
    issuer: "CISCO",
    date: "Feb 2019",
    description: "CCNA Routing and Switching: Introduction to Networks",
    color: "sky",
  },
];

export function Certificates() {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <section className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-500 font-medium tracking-wider uppercase text-sm">
            My Personal Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
            Qualification
          </h2>

          {/* Tabs */}
          <div className="inline-flex p-1 bg-zinc-950 rounded-xl border border-zinc-800 mx-auto">
            {["Work", "Education", "Certifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative bg-zinc-950 rounded-xl border border-zinc-800 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-xs font-medium text-emerald-400">
                        {cert.date}
                      </span>
                    </div>

                    <div className="mb-4 pt-2">
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                        <Award className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="h-px w-full bg-zinc-900 mb-4" />

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "work" && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <p className="text-zinc-500 mb-4">
                  Please check the dedicated Experience section below.
                </p>
                <a
                  href="#experience"
                  className="text-emerald-500 hover:text-emerald-400 font-medium"
                >
                  Scroll to Experience &darr;
                </a>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-emerald-500">
                      A
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Universitas Amikom Yogyakarta
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      Bachelor of Informatics
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                        <Calendar className="w-3 h-3 mr-2" /> 2017 - 2021
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-900 text-xs text-emerald-400">
                        <CheckCircle2 className="w-3 h-3 mr-2" /> GPA: 3.86
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm">
                      Majored in Software Engineering with a focus on Web
                      Technologies. Active member of the Computer Science Club
                      and participated in various hackathons.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
