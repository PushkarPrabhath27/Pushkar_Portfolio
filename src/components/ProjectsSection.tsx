"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  status: "completed" | "research" | "ongoing";
}

const PROJECTS: Project[] = [
  { id: "nft-trustscore", title: "NFT_TrustScore", description: "AI-powered dashboard for analyzing NFT smart contracts, trust, risk, price, fraud, and portfolio data.", tech: ["JavaScript", "AI/ML", "Blockchain"], github: "https://github.com/PushkarPrabhath27/NFT_TrustScore", status: "completed" },
  { id: "mediflow", title: "MediFlow", description: "Hospital asset management system with live availability boards, structured sharing workflow, and utilization analytics.", tech: ["Go", "SaaS", "Real-time"], github: "https://github.com/PushkarPrabhath27/MediFlow", status: "completed" },
  { id: "deepfake", title: "Zero-Shot Deepfake Voice Detection", description: "Novel zero-shot learning approach for detecting deepfake audio without prior training data on specific speakers.", tech: ["Python", "PyTorch", "Audio Processing"], github: "https://github.com/PushkarPrabhath27/Research-Model", status: "research" },
  { id: "bi-pipeline", title: "BI Pipeline with Anomaly Detection", description: "End-to-end ETL pipeline with anomaly detection to ensure data reliability.", tech: ["Python", "ETL"], github: "https://github.com/PushkarPrabhath27/BI-Pipeline-with-Anomaly-Detection", status: "completed" },
  { id: "research-engine", title: "ResearchCrossPollinationEngine", description: "AI-powered research discovery using RAG-based LLM to help scientists discover breakthrough ideas across disciplines.", tech: ["Python", "RAG", "LLM", "LangChain"], github: "https://github.com/PushkarPrabhath27/ResearchCrossPollinationEngine", status: "completed" },
  { id: "medigaurd", title: "MediGaurd", description: "AI-driven, multi-tenant SaaS platform for proactively predicting medical equipment failures.", tech: ["Go", "Next.js", "Redis", "AI"], github: "https://github.com/PushkarPrabhath27/MediGaurd", status: "completed" },
  { id: "agentic-acmg", title: "MechVUS Agentic-ACMG", description: "Autonomous agentic pipeline for resolving genetic VUS using mechanistic modeling, Monte Carlo simulations, and LLM-driven classification.", tech: ["HTML", "LLM", "Agentic AI"], github: "https://github.com/PushkarPrabhath27/MechVUS-Agentic-ACMG", status: "completed" },
  { id: "edusynth", title: "EduSynth", description: "Enterprise-grade autonomous media synthesis platform bridging Generative AI and educational content.", tech: ["Python", "Gen AI"], github: "https://github.com/PushkarPrabhath27/EduSynth", status: "completed" },
  { id: "web-for-all", title: "WEB-for-ALL", description: "AI-powered system transforming digital content into accessible formats in real-time using CV, NLP, and audio processing.", tech: ["JavaScript", "CV", "NLP"], github: "https://github.com/PushkarPrabhath27/WEB-for-ALL", status: "completed" },
];

export function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative w-full px-6 md:px-12 lg:px-24 py-32 md:py-40">
      <div className="max-w-5xl mx-auto">
        {/* Command */}
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-14">
            <div className="flex flex-wrap items-center gap-1.5 text-sm font-mono text-text-muted">
              <span className="text-accent-green">pushkar</span><span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span><span className="text-text-dim">:</span>
              <span className="text-accent-blue">~/workspace</span><span className="text-text-dim">$</span>
              <span className="text-text-secondary ml-1">tree</span>
            </div>
          </motion.div>
        )}

        {/* File tree */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="terminal-window">
            <div className="terminal-window-header">
              <span className="terminal-dot terminal-dot-red" /><span className="terminal-dot terminal-dot-yellow" /><span className="terminal-dot terminal-dot-green" />
              <span className="text-xs text-text-muted/50 font-mono ml-2">~/workspace — tree</span>
            </div>
            <div className="p-5 md:p-6">
              <div className="text-text-dim text-xs font-mono mb-3 pl-1">workspace/</div>
              <div className="space-y-1 pl-5 border-l border-border-subtle">
                {PROJECTS.map((project) => (
                  <div key={project.id}>
                    <button
                      onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                      className="flex items-center gap-2.5 w-full text-left py-1.5 px-2 -mx-2 rounded-md hover:bg-white/[0.04] transition-colors duration-180 group"
                    >
                      <span className="text-accent-yellow/80 text-sm">{expanded === project.id ? "▼" : "▶"}</span>
                      <span className="text-text-primary text-sm font-mono group-hover:text-accent-green transition-colors duration-180">{project.title}</span>
                      <span className={`text-[9px] px-1.5 py-[1px] rounded ${project.status === "research" ? "bg-accent-purple/15 text-accent-purple" : "bg-accent-green/15 text-accent-green"}`}>
                        {project.status}
                      </span>
                    </button>

                    <AnimatePresence>
                      {expanded === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-7 py-3 space-y-3">
                            <p className="text-text-secondary text-sm leading-relaxed font-body">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t) => (
                                <span key={t} className="text-[11px] font-mono text-text-dim bg-bg-tertiary/40 px-2 py-[3px] rounded">{t}</span>
                              ))}
                            </div>
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:underline font-mono">
                                → github
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
