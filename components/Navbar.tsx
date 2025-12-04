"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-white relative group"
            >
              Arif<span className="text-emerald-500">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-emerald-400 transition-colors px-3 py-2 text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute inset-0 bg-white/5 scale-0 rounded-lg transition-transform group-hover:scale-100 -z-10"></span>
                </a>
              ))}
              <Button
                variant="default"
                className="bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/20 backdrop-blur-sm border border-emerald-500/50"
                onClick={() => {
                  window.location.href = "mailto:arifnur.rhmnn@gmail.com";
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="default"
                className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12"
                onClick={() => {
                  window.location.href = "mailto:arifnur.rhmnn@gmail.com";
                  setIsOpen(false);
                }}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
