"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const contactLinks = [
  {
    name: "Email",
    value: "rayanajagadeesh12@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:rayanajagadeesh12@gmail.com",
    color: "group-hover:text-red-400",
    bg: "group-hover:bg-red-500/10"
  },
  {
    name: "LinkedIn",
    value: "Jagadeesh Chandra",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/naga-venkata-jagadeesh-chandra-rayana-35719928b/",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-500/10"
  },
  {
    name: "GitHub",
    value: "JagadeeshChandra12",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/JagadeeshChandra12",
    color: "group-hover:text-white",
    bg: "group-hover:bg-white/10"
  },
  {
    name: "Resume",
    value: "Download PDF",
    icon: <FileText className="w-6 h-6" />,
    href: "/SDE Resume.pdf",
    color: "group-hover:text-cyan-400",
    bg: "group-hover:bg-cyan-500/10"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Let&apos;s</span> <span className="text-gray-500">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
            I&apos;m always open to discussing product design work or partnership opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <div className={`p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 transition-colors duration-300 ${link.bg} ${link.color}`}>
                {link.icon}
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">{link.name}</div>
                <div className="text-white font-medium group-hover:text-gray-200 transition-colors">{link.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
