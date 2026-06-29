"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE = {
  name: "Pushkar Prabhath Rayana",
  role: "AI Engineer & Researcher",
  location: "India",
  degree: "B.Tech Computer Science",
  focus: "AI/ML, Deep Learning, LLMs",
  interests: [
    "Large Language Models",
    "Agentic AI",
    "Deepfake Detection",
    "Computer Vision",
    "Reinforcement Learning",
  ],
  philosophy: "I believe AI should augment human potential, not replace it.",
};

export function AboutSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full px-6 md:px-12 lg:px-24 py-32 md:py-40"
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="terminal-window">
            <div className="terminal-window-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="text-xs text-text-muted/50 font-mono ml-2">profile.json</span>
            </div>

            <div className="p-6 md:p-8 font-mono text-sm space-y-3">
              {/* Command line */}
              {isInView && (
                <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                  <span className="text-accent-green">pushkar</span>
                  <span className="text-text-dim">@</span>
                  <span className="text-accent-cyan">phantom</span>
                  <span className="text-text-dim">:</span>
                  <span className="text-accent-blue">~/</span>
                  <span className="text-text-dim">$</span>
                  <span className="text-text-secondary ml-1">cat profile.json</span>
                </div>
              )}

              {/* JSON content */}
              <pre className="text-text-secondary leading-relaxed text-xs md:text-sm overflow-x-auto">
                <code>{`{
  "name": "${PROFILE.name}",
  "role": "${PROFILE.role}",
  "location": "${PROFILE.location}",
  "education": {
    "degree": "${PROFILE.degree}",
    "focus": "${PROFILE.focus}"
  },
  "interests": [
${PROFILE.interests.map(i => `    "${i}"`).join(',\n')}
  ],
  "philosophy": "${PROFILE.philosophy}"
}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Bio below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 space-y-5 max-w-2xl"
        >
          <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">
            I am a Computer Science Engineer specializing in Artificial Intelligence
            and Machine Learning. My work spans deep learning research to production-ready
            AI systems — from training models to deploying them at scale.
          </p>
          <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">
            I am passionate about building intelligent systems that understand, reason, and
            interact with the world. My research in zero-shot deepfake voice detection was
            accepted at IEEE, and I am constantly exploring new frontiers in AI — from LLM
            engineering to agentic systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}