"use client";

import { useEffect } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden selection:bg-cyan-500/30">
      {/* Background gradients (Optimized for performance) */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.15 }}>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,229,255,1) 0%, rgba(0,229,255,0) 70%)" }} />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,1) 0%, rgba(124,58,237,0) 70%)" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full" style={{ background: "radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(79,70,229,0) 70%)" }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
