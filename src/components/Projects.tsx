"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";

const featuredProjects = [
  {
    title: "Arogya Sathi",
    desc: "AI-powered healthcare assistant focused on improving medical accessibility through multilingual interaction, speech-to-text, text-to-speech, personalized health records, AI-assisted medical guidance, and AWS cloud integration.",
    tech: ["React.js", "Node.js", "AWS", "Google Gemini API", "NLP"],
    color: "from-cyan-500/20 to-blue-500/20",
    shadow: "shadow-[0_0_30px_rgba(0,229,255,0.2)]",
    live: "https://arogyasathi1.netlify.app/",
    github: "https://github.com/JagadeeshChandra12/ArogyaSathi",
    image: "/projects/arogya.png"
  },
  {
    title: "LearnMate AI",
    desc: "AI-powered adaptive learning platform featuring Google Gemini, Ollama, personalized learning, intelligent quiz generation, learner memory, and an interactive Three.js virtual assistant.",
    tech: ["FastAPI", "React.js", "Three.js", "Gemini API", "Ollama"],
    color: "from-purple-500/20 to-pink-500/20",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    live: "https://learnmate-fq4u.onrender.com/",
    github: "",
    image: "/projects/learnmate.png"
  },
  {
    title: "RouteCraft",
    desc: "Smart travel planning platform integrating Google Maps, RailRadar, route optimization, travel preference filtering, and interactive route visualization to simplify multi-modal travel.",
    tech: ["TypeScript", "Vite", "Node.js", "Google Maps API"],
    color: "from-indigo-500/20 to-purple-500/20",
    shadow: "shadow-[0_0_30px_rgba(99,102,241,0.2)]",
    live: "https://route-craft-blond.vercel.app/",
    github: "https://github.com/JagadeeshChandra12/RouteCraft.git",
    image: "/projects/routecraft.png"
  },
  {
    title: "FD-ISTA",
    desc: "AI-powered analytics platform that performs sentiment analysis, trend forecasting, community detection, graph analytics, and interactive visualization for large-scale social media data.",
    tech: ["Python", "Streamlit", "Machine Learning", "NLP", "Graph Analytics"],
    color: "from-emerald-500/20 to-teal-500/20",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    live: "",
    github: "https://github.com/JagadeeshChandra12/Research-Project",
    image: "/projects/fd_ista.png"
  }
];

const moreProjects = [
  {
    title: "Hamara Sadak",
    desc: "Web platform enabling users to report potholes and civic issues using geolocation, interactive maps, and real-time complaint management for efficient issue tracking.",
    tech: ["React.js", "Node.js", "MongoDB", "Maps API"],
    live: "https://luminous-hamster-828f0d.netlify.app/",
    github: "https://github.com/JagadeeshChandra12/HamaraSadak"
  },
  {
    title: "CourierX",
    desc: "Full-stack courier management platform supporting shipment booking, parcel tracking, role-based administration, authentication, and real-time delivery management.",
    tech: ["React.js", "Supabase", "PostgreSQL", "JavaScript"],
    live: "https://courierxbyjagadeesh.netlify.app/",
    github: "https://github.com/JagadeeshChandra12/CourierX"
  }
];

function ProjectCard({ project, index }: { project: { title: string, desc: string, tech: string[], color: string, shadow: string, live: string, github: string, image: string }, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`glass-card rounded-3xl p-1 relative group cursor-pointer ${project.shadow} transition-shadow duration-500`}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10`} 
      />
      
      <div className="bg-[#0a0a0a] rounded-[22px] h-full overflow-hidden border border-white/5 relative z-10 flex flex-col">
        {/* Placeholder for Project Image */}
        <div className="w-full h-48 bg-[#111] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border-b border-white/5 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-8 flex flex-col flex-grow relative z-20">
          <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
            {project.desc}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t: string) => (
                <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" /> Code
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Featured</span> <span className="text-gray-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-white">More</span> <span className="text-gray-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {moreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-purple-500/30 transition-colors duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t: string) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
