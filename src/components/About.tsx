"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Globe, Trophy, Cpu } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { Card } from "@/components/ui/card";

export default function About() {
  const container: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const facts = [
    { icon: <GraduationCap className="w-6 h-6 text-cyan-400" />, title: "CGPA: 8.0", desc: "B.Tech CSE" },
    { icon: <Briefcase className="w-6 h-6 text-purple-400" />, title: <AnimatedCounter value={1} />, desc: "Internship" },
    { icon: <Code className="w-6 h-6 text-indigo-400" />, title: <><AnimatedCounter value={3} suffix="+" /></>, desc: "Major Projects" },
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "Open Source", desc: "Contributor" },
    { icon: <Trophy className="w-6 h-6 text-purple-400" />, title: "Hackathons", desc: "Multiple Winner" },
    { icon: <Cpu className="w-6 h-6 text-indigo-400" />, title: "AI + Full Stack", desc: "Enthusiast" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">About</span> <span className="text-gray-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay z-10" />
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-[#111] flex items-center justify-center">
                <img src="/photo.jpg" alt="Rayana Jagadeesh Chandra" className="w-full h-full object-cover" />
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/20 group-hover:to-purple-500/20 transition-all duration-700 z-20" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[50px] rounded-full" />
          </motion.div>

          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-10 text-gray-300 text-lg leading-relaxed space-y-6"
            >
              <p>
                I am a passionate <strong className="text-white">Computer Science Engineering student</strong> at SRM University AP, driven by the desire to build intelligent software that solves real-world problems.
              </p>
              <p>
                My expertise lies at the intersection of <strong className="text-cyan-400">Artificial Intelligence</strong> and <strong className="text-purple-400">Full Stack Development</strong>. I enjoy creating seamless, scalable, and visually stunning web applications powered by modern AI capabilities.
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {facts.map((fact, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="p-4 bg-white/5 border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {fact.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white font-heading">{fact.title}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{fact.desc}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
