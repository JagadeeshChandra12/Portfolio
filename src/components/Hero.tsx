"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import ParticleNetwork from "./ParticleNetwork";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";

const roles = [
  "Computer Science Student",
  "Full Stack Developer",
  "AI Enthusiast",
  "Open Source Contributor",
  "Always Learning 🚀"
];

export default function Hero() {
  const typeWriterText = useTypewriter(roles);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleNetwork />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/10"
        >
          <span className="text-sm font-medium tracking-wide text-gray-300">
            Welcome to my universe
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-4"
        >
          Rayana Naga Venkata <br className="hidden md:block" />
          <span className="text-gradient neon-glow bg-clip-text text-transparent">Jagadeesh Chandra</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <p className="text-xl md:text-3xl font-medium text-gray-300">
            {typeWriterText}<span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
        >
          Building intelligent software that solves real-world problems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/SDE Resume.pdf" target="_blank" rel="noreferrer">
            <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 transition-all font-semibold text-base group">
              <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-base">
              View Projects
            </Button>
          </a>
          <div className="flex gap-4 ml-4">
            <a href="https://github.com/JagadeeshChandra12" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/naga-venkata-jagadeesh-chandra-rayana-35719928b/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
