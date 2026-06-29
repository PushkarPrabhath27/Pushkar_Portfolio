"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ───────────────────── boot logs ───────────────────── */
const BOOT_LOGS = [
  { delay: 200, text: "[BIOS] Phoenix SecureCore Tiano 5.0" },
  { delay: 500, text: "[CPU] Intel® Core™ i9-14900K — 24 cores, 32 threads" },
  { delay: 800, text: "[RAM] 64GB DDR5-5600 — dual channel" },
  { delay: 1100, text: "[GPU] NVIDIA RTX 4090 — 24GB GDDR6X" },
  { delay: 1400, text: "[CUDA] CUDA 12.1 — compute capability 8.9" },
  { delay: 1700, text: "[NVMe] Samsung 990 Pro 2TB — mounted /workspace" },
  { delay: 2000, text: "[NET] 10 Gbps — connected" },
  { delay: 2300, text: "[PYENV] Python 3.12.2 — venv /workspace/ai" },
  { delay: 2600, text: "[PYTORCH] torch==2.2.1+cu121 — GPU accel ON" },
  { delay: 2900, text: "[HF] HuggingFace cache — /home/pushkar/.cache/hf" },
  { delay: 3200, text: "[LANGCHAIN] Agentic modules loaded" },
  { delay: 3500, text: "[OK] System initialized. Welcome to the workstation." },
];

/* ──────────────────── useTyping hook ────────────────── */
function useTyping(text: string, speed: number = 60, start: boolean = true) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!start) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i >= text.length) { clearInterval(interval); return; }
      setDisplayed(text.slice(0, i + 1));
      i++;
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start]);
  return displayed;
}

/* ──────────────────── useTime hook ────────────────────── */
function useTime() {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ═══════════════════ HERO SECTION ═══════════════════════ */
export function HeroSection() {
  const [bootDone, setBootDone] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBootDone(true), 3800);
    const t2 = setTimeout(() => setTypingDone(true), 6200);
    const t3 = setTimeout(() => setShowSubtitle(true), 7200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const nameTyped = useTyping("Pushkar", 100, bootDone);
  const surnameTyped = useTyping("Prabhath", 100, typingDone);
  const time = useTime();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.04)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] rounded-full bg-accent-green/5 blur-[140px] animate-pulse-slow" />
      <div className="absolute top-[20%] right-[10%] w-[28rem] h-[28rem] rounded-full bg-accent-blue/5 blur-[120px] animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">

        {/* Boot Sequence */}
        <AnimatePresence>
          {!bootDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-[3px] font-mono text-[11px] md:text-xs text-text-muted"
            >
              {BOOT_LOGS.map((log, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -3 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: log.delay / 1000, duration: 0.03 }}
                >
                  <span className="text-accent-green mr-2">&gt;</span>{log.text}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Name */}
        <AnimatePresence>
          {bootDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title with typewriter */}
              <div className="space-y-1">
                <h1 className="font-display text-[3.5rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] tracking-tight text-text-bright">
                  <span>{nameTyped}</span>
                  {nameTyped.length < 7 && <span className="typing-cursor" />}
                </h1>
                {typingDone && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] leading-[1] tracking-tight text-accent-green"
                  >
                    <span>{surnameTyped}</span>
                    {surnameTyped.length < 8 && <span className="typing-cursor" />}
                  </motion.h2>
                )}
              </div>

              {/* Subtitle lines */}
              {showSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 pt-4"
                >
                  <p className="font-mono text-sm md:text-base text-text-secondary tracking-wide">
                    AI Engineer &middot; Researcher &middot; Builder
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-text-muted font-mono">
                    <span>LLMs</span>
                    <span className="text-text-dim">|</span>
                    <span>Computer Vision</span>
                    <span className="text-text-dim">|</span>
                    <span>Agentic AI</span>
                    <span className="text-text-dim">|</span>
                    <span>Deep Learning</span>
                  </div>

                  {/* Terminal prompt preview */}
                  <div className="pt-8 flex flex-wrap justify-center gap-1.5 text-xs font-mono text-text-muted">
                    <span className="text-accent-green">pushkar</span>
                    <span className="text-text-dim">@</span>
                    <span className="text-accent-cyan">phantom</span>
                    <span className="text-text-dim">:</span>
                    <span className="text-accent-blue">~/</span>
                    <span className="text-text-dim">$</span>
                    <span className="typing-cursor ml-1" />
                  </div>

                  <p className="text-[11px] text-text-dim animate-cursor-blink pt-2">
                    System ready. Scroll to explore.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status bar at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-text-muted/50">
          <div className="flex items-center gap-4">
            <span>GPU: RTX 4090</span>
            <span>RAM: 32.1/64.0 GB</span>
          </div>
          <div className="flex items-center gap-4">
            <span>CPU: 14%</span>
            <span className="tabular-nums">{time}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
