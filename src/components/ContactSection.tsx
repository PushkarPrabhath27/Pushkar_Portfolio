"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Contact {
  command: string;
  action: string;
  url: string;
  icon: string;
  color: string;
}

const CONTACTS: Contact[] = [
  { command: "github", action: "git clone github.com/PushkarPrabhath27", url: "https://github.com/PushkarPrabhath27", icon: "", color: "text-text-primary" },
  { command: "linkedin", action: "ssh pushkar@linkedin.com", url: "https://www.linkedin.com/in/pushkar-prabhath/", icon: "", color: "text-accent-blue" },
  { command: "email", action: "mail pushkarprabhathrayana@gmail.com", url: "mailto:pushkarprabhathrayana@gmail.com", icon: "✉", color: "text-accent-green" },
];

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="contact" ref={ref} className="relative w-full px-6 md:px-12 lg:px-24 py-32 md:py-40">
      <div className="max-w-3xl mx-auto">
        {/* Command */}
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-14">
            <div className="flex flex-wrap items-center gap-1.5 text-sm font-mono text-text-muted">
              <span className="text-accent-green">pushkar</span><span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span><span className="text-text-dim">:</span>
              <span className="text-accent-blue">~/connect</span><span className="text-text-dim">$</span>
              <span className="text-text-secondary ml-1">ssh</span>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="terminal-window">
            <div className="terminal-window-header">
              <span className="terminal-dot terminal-dot-red" /><span className="terminal-dot terminal-dot-yellow" /><span className="terminal-dot terminal-dot-green" />
              <span className="text-xs text-text-muted/50 font-mono ml-2">~/connect</span>
            </div>
            <div className="p-6 space-y-1">
              <p className="text-text-muted font-mono text-xs mb-5">Available commands:</p>
              {CONTACTS.map((c) => (
                <a
                  key={c.command}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-white/[0.04] transition-all duration-200 group"
                  onMouseEnter={() => setHovered(c.command)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="text-lg">{c.icon}</span>
                  <div className="flex-1">
                <div className="flex items-center gap-2">
                  <code className={`text-sm font-mono ${hovered === c.command ? "text-accent-green" : "text-text-primary"}`}>{c.command}</code>
                  {hovered === c.command && (
                    <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="text-[10px] text-accent-cyan font-mono">→ {c.action}</motion.span>
                  )}
                </div>
              </div>
              <span className="text-text-dim group-hover:text-accent-green group-hover:translate-x-1 transition-all duration-200">→</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
