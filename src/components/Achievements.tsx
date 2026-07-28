"use client";

import { motion } from "framer-motion";
import { Award, Medal, Star } from "lucide-react";

const achievements = [
  {
    title: "Global Goals Hackathon",
    prize: "2nd Prize",
    icon: <Medal className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Global Goals Hackathon (2nd Edition)",
    prize: "2nd Prize",
    icon: <Medal className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Film Gala 2024",
    prize: "Winner",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Open Source Contributor",
    prize: "Active",
    icon: <Award className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold tracking-wider uppercase">
            <Award className="w-4 h-4" /> Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Honors &</span> <span className="text-gray-500">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm font-medium">
                  {item.prize}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
