"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ResearchSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="research" ref={ref} className="relative w-full px-6 md:px-12 lg:px-24 py-32 md:py-40 bg-bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Command */}
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-14">
            <div className="flex flex-wrap items-center gap-1.5 text-sm font-mono text-text-muted">
              <span className="text-accent-green">pushkar</span><span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span><span className="text-text-dim">:</span>
              <span className="text-accent-blue">~/research</span><span className="text-text-dim">$</span>
              <span className="text-text-secondary ml-1">ls papers/</span>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="terminal-window group cursor-default">
            <div className="terminal-window-header">
              <span className="terminal-dot terminal-dot-red" /><span className="terminal-dot terminal-dot-yellow" /><span className="terminal-dot terminal-dot-green" />
              <span className="flex items-center justify-between flex-1 ml-2">
                <span className="text-xs text-text-muted/50 font-mono">paper.md</span>
                <span className="text-[10px] text-accent-pink font-mono">IEEE NETCRYPT 2026</span>
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-lg mt-0.5">📝</span>
                <div>
                  <h3 className="text-text-primary font-mono font-semibold text-base md:text-lg mb-1">
                    Zero-Shot Deepfake Voice Detection Using Contrastive Learning with Domain-Aligned Augmentations
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted font-mono">IEEE Conference on Network and System Security (NETCRYPT 2026)</p>
                </div>
              </div>

              <div className="code-block">
                <p className="text-text-secondary text-sm leading-relaxed font-body">
                  <span className="text-accent-green font-mono">Abstract:</span> Deepfake audio poses a significant threat to voice-based authentication and media integrity. This paper presents a novel zero-shot approach using contrastive learning with domain-aligned augmentations, enabling detection of synthetic speech from unseen speakers without prior training data.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Deepfake Detection", "Zero-Shot Learning", "Audio Forensics", "PyTorch", "Librosa", "Contrastive Learning"].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-accent-pink bg-accent-pink/10 px-2.5 py-1 rounded border border-accent-pink/15">{tag}</span>
                ))}
              </div>

              <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-blue transition-colors font-mono">
                <span>→</span><span>View paper on IEEE Xplore</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
