"use client";

import { motion } from "framer-motion";
import { Github } from "@/components/icons";

export default function GithubStats() {
  return (
    <section id="github-stats" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider uppercase">
            <Github className="w-4 h-4" /> Statistics
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">GitHub</span> <span className="text-gray-500">Activity</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 group hover:border-purple-500/30 transition-colors duration-300 flex items-center justify-center overflow-hidden relative min-h-[200px]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="https://github-readme-stats.vercel.app/api?username=JagadeeshChandra12&theme=radical&hide_border=true" 
              alt="GitHub Stats" 
              className="w-full h-auto object-contain relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 group hover:border-pink-500/30 transition-colors duration-300 flex items-center justify-center overflow-hidden relative min-h-[200px]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=JagadeeshChandra12&layout=compact&theme=radical&hide_border=true" 
              alt="Top Languages" 
              className="w-full h-auto object-contain relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
