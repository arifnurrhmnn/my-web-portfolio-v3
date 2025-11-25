import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">Let's work together</h2>
            <p className="text-zinc-400 mb-8">
              Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a 
              href="mailto:hello@arif.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-sky-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-pink-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arif Nur Rohman. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
