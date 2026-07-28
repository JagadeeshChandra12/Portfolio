"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitMerge } from "lucide-react";
import { Github } from "@/components/icons";

const contributions = [
  {
    repo: "lingdojo/kana-dojo",
    status: "Merged",
    desc: "Contributed merged pull requests to the open-source repository KanaDojo.",
    icon: <GitMerge className="w-5 h-5 text-purple-400" />,
    link: "https://github.com/lingdojo/kana-dojo/pull/20135"
  },
  {
    repo: "roostorg/coop",
    status: "Merged",
    desc: "Contributed merged pull requests to the open-source repository Coop.",
    icon: <GitMerge className="w-5 h-5 text-cyan-400" />,
    link: "https://github.com/roostorg/coop/pull/702"
  }
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider uppercase">
            <Github className="w-4 h-4" /> Open Source
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-white">Global</span> <span className="text-gray-500">Contributions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                      {item.repo}
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <ExternalIcon />
                      </a>
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm whitespace-nowrap">
                  <GitPullRequest className="w-4 h-4" /> {item.status} Pull Request
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
