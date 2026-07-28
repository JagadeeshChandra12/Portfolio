"use client";

import { motion } from "framer-motion";
import { Code2, MonitorPlay, Server, Database, Cloud, BrainCircuit, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Concepts",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C", "C++", "Python", "JavaScript", "SQL", "OOP", "DSA", "REST APIs"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "group-hover:border-cyan-500/50"
  },
  {
    title: "Frontend Development",
    icon: <MonitorPlay className="w-5 h-5" />,
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Vite", "Tailwind CSS"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Backend & Servers",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "FastAPI"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MySQL", "Supabase"],
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS"],
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "group-hover:border-yellow-500/50"
  },
  {
    title: "AI & LLMs",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Google Gemini API", "Ollama", "LLMs", "RAG", "NLP", "HuggingFace", "Tesseract OCR"],
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "group-hover:border-gray-500/50"
  }
];

export default function Skills() {
  const container: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Technical</span> <span className="text-gray-500">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item} className={`group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden ${category.title === 'AI & LLMs' ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`relative h-full bg-[#0a0a0a] rounded-xl p-6 border border-white/5 ${category.borderColor} transition-colors duration-500`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/20 group-hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
