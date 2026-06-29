"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SECTIONS = ["hero", "about", "skills", "projects", "research", "contact"];

export function StatusBar() {
  const [time, setTime] = useState("00:00:00");
  const [gpuLoad] = useState(14);
  const [cpuLoad] = useState(8);
  const [ramUsed] = useState(32.1);
  const [ramTotal] = useState(64.0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    update();
    const id = setInterval(update, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      clearInterval(id);
      observer.disconnect();
    };
  }, []);

  const promptPath = {
    hero: "~/",
    about: "~/about",
    skills: "~/skills",
    projects: "~/workspace",
    research: "~/research",
    contact: "~/connect",
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/80 backdrop-blur-md border-b border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left: System + Prompt */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-accent-green animate-pulse">SYS</span>
              <span className="text-text-dim">[</span>
              <span className="text-accent-green">OK</span>
              <span className="text-text-dim">]</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs font-mono text-text-muted/60">
              <span className="text-accent-green">pushkar</span>
              <span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span>
              <span className="text-text-dim">:</span>
              <span className="text-accent-blue">{promptPath[activeSection as keyof typeof promptPath] || "~/"}</span>
            </div>
          </div>

          {/* Center: Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: "hero", label: "home" },
              { id: "about", label: "about" },
              { id: "skills", label: "skills" },
              { id: "projects", label: "workspace" },
              { id: "research", label: "research" },
              { id: "contact", label: "connect" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-accent-green bg-accent-green/10"
                    : "text-text-muted hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Live Metrics */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="hidden xl:inline text-text-muted/40">GPU:{gpuLoad}%</span>
            <span className="hidden xl:inline text-text-muted/40">CPU:{cpuLoad}%</span>
            <span className="hidden lg:inline text-text-muted/40">RAM:{ramUsed.toFixed(1)}G/{ramTotal.toFixed(0)}G</span>
            <span className="tabular-nums text-text-muted/60">{time}</span>
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
