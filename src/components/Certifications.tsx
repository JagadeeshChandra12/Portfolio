"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    color: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-red-500/50"
  },
  {
    name: "Google Generative AI",
    issuer: "Google",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-semibold tracking-wider uppercase">
            <BadgeCheck className="w-4 h-4" /> Verified
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Licenses &</span> <span className="text-gray-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 group relative overflow-hidden transition-all duration-500 border border-white/10 ${cert.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <BadgeCheck className="w-10 h-10 text-white/50 group-hover:text-white transition-colors duration-300 mb-6" />
                <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug">{cert.name}</h3>
                <p className="text-gray-400 font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
