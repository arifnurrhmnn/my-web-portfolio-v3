"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

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
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const displayedCertifications = showAllCertificates
    ? certifications
    : certifications.slice(0, 6);

  return (
    <section className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Certificates
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A collection of professional certifications that showcase my
            continuous learning and expertise in web development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-zinc-950 rounded-xl border border-zinc-800 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-80"
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

              <div>
                <div className="h-px w-full bg-zinc-900 mb-4" />
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        {certifications.length > 6 && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={() => setShowAllCertificates(!showAllCertificates)}
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-full px-8"
            >
              {showAllCertificates
                ? "Show Less Certificates"
                : "View All Certificates"}
              <ChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  showAllCertificates ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
