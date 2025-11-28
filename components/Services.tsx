"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, Zap, Code, Database, Globe } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    description:
      "Building responsive, pixel-perfect websites that work seamlessly across all devices and browsers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Ensuring your application looks and feels amazing on smartphones and tablets with responsive patterns.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speeding up existing applications to improve user experience and Search Engine Optimization (SEO).",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and documented code that makes future updates a breeze.",
  },
  {
    icon: Database,
    title: "API Integration",
    description:
      "Connecting your frontend to powerful backend services and third-party APIs securely.",
  },
  {
    icon: Globe,
    title: "SEO Best Practices",
    description:
      "Implementing technical SEO fundamentals to help your website rank higher in search results.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I help businesses grow by crafting amazing web experiences. Here are
            the services I provide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-zinc-950 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
