"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Addwise Tech Innovations",
    duration: "May 2025 – Jul 2025",
    achievements: [
      "Developed REST APIs using Node.js with Supabase PostgreSQL for efficient backend data management.",
      "Built a Role-Based GPS Device Management and Tracking System with secure QR-based onboarding.",
      "Integrated Leaflet.js for real-time geospatial visualization and route tracking.",
      "Implemented role-based authentication and authorization to improve application security."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Work</span> <span className="text-gray-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between group mb-12 last:mb-0`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-[5px] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.8)] z-10" />

              {/* Left Side (Content on Mobile, alternating on Desktop) */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0 md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white font-heading mb-1">{exp.role}</h3>
                <div className="text-xl text-cyan-400 font-medium mb-2">{exp.company}</div>
                <div className="flex items-center gap-2 text-sm text-gray-400 md:justify-end">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Right Side (Content) */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ul className="relative z-10 space-y-3 text-gray-300 text-sm md:text-base">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
