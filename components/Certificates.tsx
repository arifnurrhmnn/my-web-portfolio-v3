"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    id: 1,
    title: "PROGATE",
    subtitle: "Front-End Web Developer",
    description: "Fundamental React for Front-end Web Development",
    date: "Jun 2021",
    credential: "https://progate.com/course_certificate/0fd9590equvcje",
  },
  {
    id: 2,
    title: "DICODING",
    subtitle: "Back-End Developer",
    description: "Learn to Create Back-End Apps for Beginners",
    date: "Jun 2021",
    credential: "https://www.dicoding.com/certificates/07Z6LNJQYPQR",
  },
  {
    id: 3,
    title: "PROGATE",
    subtitle: "Web Developer",
    description: "Web Development Path (Node.js)",
    date: "Jun 2021",
    credential: "https://progate.com/path_certificate/f40a4274qutrky",
  },
  {
    id: 4,
    title: "BNSP",
    subtitle: "Programming and Software Development",
    description: "Junior Web Developer",
    date: "Oct 2020",
    credential:
      "https://drive.google.com/file/d/1ihBSQYrpesSiZO5DbmKJKihNiLj6-yLE/view?usp=sharing",
  },
  {
    id: 5,
    title: "DICODING",
    subtitle: "Machine Learning Developer",
    description: "Learning Machine Learning for Beginners",
    date: "Oct 2020",
    credential: "https://www.dicoding.com/certificates/L4PQM394VZO1",
  },
  {
    id: 6,
    title: "BPPTIK",
    subtitle: "Programming and Software Development",
    description: "Junior Web Developer Training and Certification",
    date: "Sep 2020",
    credential:
      "https://drive.google.com/file/d/1MxiDAFpAO100MtEzIiu2bBCwrhGcbLge/view?usp=sharing",
  },
  {
    id: 7,
    title: "SKILL ACADEMY",
    subtitle: "Technology & Software",
    description: "Programming Foundation for Data Science",
    date: "Apr 2020",
    credential: "https://skillacademy.com/sertifikat/H2505ZUGT779VZ",
  },
  {
    id: 8,
    title: "DICODING",
    subtitle: "Front-End Web Developer",
    description: "Learning The Fundamentals of Front-End Web Development",
    date: "Apr 2020",
    credential: "http://dicoding.com/certificates/M2VX33G14XYQ",
  },
  {
    id: 9,
    title: "DICODING",
    subtitle: "Front-End Web Developer",
    description: "Building Progressive Web Apps",
    date: "Oct 2019",
    credential: "https://www.dicoding.com/certificates/OQLZ90WK2Z5D",
  },
  {
    id: 10,
    title: "CISCO",
    subtitle: "Cisco Networking Academy",
    description: "CCNA Routing and Switching: Introduction to Networks",
    date: "Feb 2019",
    credential:
      "https://drive.google.com/file/d/1f0j-PfOXFbuxZ7JaZ1mum6_q0axdt8zO/view?usp=sharing",
  },
];

export function Certificates() {
  const [visibleCount, setVisibleCount] = useState(6);
  const isExpanded = visibleCount >= certifications.length;

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleCount(6);
      document
        .getElementById("certificates")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(certifications.length);
    }
  };

  const displayedCertifications = certifications.slice(0, visibleCount);

  return (
    <section
      id="certificates"
      className="py-20 border-t border-white/5 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 flex flex-col justify-between min-h-[320px]"
              >
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full transition-colors group-hover:bg-emerald-500/20 backdrop-blur-sm">
                  <span className="text-xs font-medium text-emerald-400">
                    {cert.date}
                  </span>
                </div>

                <div className="mb-4 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all">
                    <Award className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2 h-14">
                    {cert.subtitle}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors">
                    {cert.title}
                  </p>
                </div>

                <div>
                  <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-emerald-500/20 transition-colors" />
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors mt-4"
                  >
                    View Certificate
                    <ExternalLink
                      className="w-3 h-3"
                      style={{ marginLeft: "4px" }}
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Certificates Button */}
        {certifications.length > 6 && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={handleToggleView}
              variant="outline"
              size="lg"
              className="border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 hover:text-white hover:bg-white/10 rounded-full px-8"
            >
              {isExpanded ? "Show Less Certificates" : "View All Certificates"}
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
