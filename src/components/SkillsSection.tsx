"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const SKILLS = [
  { category: "ML/DL", color: "text-accent-green", border: "border-accent-green/30", bg: "bg-accent-green/5",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "HuggingFace", "spaCy", "OpenCV", "Keras"] },
  { category: "LLM / Gen AI", color: "text-accent-blue", border: "border-accent-blue/30", bg: "bg-accent-blue/5",
    items: ["LangChain", "LlamaIndex", "OpenAI API", "RAG", "Vector DBs", "FP", "Transformers"] },
  { category: "Languages", color: "text-accent-purple", border: "border-accent-purple/30", bg: "bg-accent-purple/5",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Go"] },
  { category: "Infra / MLOps", color: "text-accent-orange", border: "border-accent-orange/30", bg: "bg-accent-orange/5",
    items: ["Docker", "Kubernetes", "AWS", "FastAPI", "Flask", "CI/CD", "Linux"] },
  { category: "Data / Viz", color: "text-accent-yellow", border: "border-accent-yellow/30", bg: "bg-accent-yellow/5",
    items: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Seaborn"] },
  { category: "Frontend", color: "text-accent-cyan", border: "border-accent-cyan/30", bg: "bg-accent-cyan/5",
    items: ["React", "Next.js", "Tailwind", "TypeScript"] },
];

export function SkillsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full px-6 md:px-12 lg:px-24 py-32 md:py-40 bg-bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Command */}
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-14">
            <div className="flex flex-wrap items-center gap-1.5 text-sm font-mono text-text-muted">
              <span className="text-accent-green">pushkar</span><span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span><span className="text-text-dim">:</span>
              <span className="text-accent-blue">~/skills</span><span className="text-text-dim">$</span>
              <span className="text-text-secondary ml-1">pip freeze | head</span>
            </div>
          </motion.div>
        )}

        {/* Skills display as pip list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              onMouseEnter={() => setHoveredCat(i)}
              onMouseLeave={() => setHoveredCat(null)}
              className={`terminal-window p-5 h-full transition-all duration-300 cursor-default
                ${hoveredCat === i ? "border-border-strong bg-white/[0.03]" : ""}`}
            >
              <h3 className={`text-xs font-mono font-semibold ${skill.color} mb-3 flex items-center gap-2`}>
                <span className="text-[10px] text-text-dim">●</span>{skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-[11px] font-mono text-text-secondary
                    bg-bg-tertiary/60 px-2.5 py-[5px] rounded-md border border-border-subtle
                    hover:border-text-muted/30 hover:text-text-primary transition-colors duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
