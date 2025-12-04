import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Have a project in mind? I&apos;m always open to discussing new
              projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <a
              href="mailto:arifnur.rhmnn@gmail.com"
              aria-label="Send email to Arif Nur Rohman"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all shadow-lg shadow-emerald-500/20 border border-emerald-500/50 hover:shadow-emerald-500/40"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              Say Hello
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/arifnurrhmnn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arif Nur Rohman's GitHub profile"
              className="p-3 bg-white/5 rounded-xl border border-white/10 text-zinc-500 transition-all hover:bg-white/10 hover:scale-110 hover:text-white"
            >
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/arifnurrohman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arif Nur Rohman's LinkedIn profile"
              className="p-3 bg-white/5 rounded-xl border border-white/10 text-zinc-500 transition-all hover:bg-white/10 hover:scale-110 hover:text-blue-400"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/arif_pride"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arif Nur Rohman's Instagram profile"
              className="p-3 bg-white/5 rounded-xl border border-white/10 text-zinc-500 transition-all hover:bg-white/10 hover:scale-110 hover:text-pink-500"
            >
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Arif Nur Rohman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
