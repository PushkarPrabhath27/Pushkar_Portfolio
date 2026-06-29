"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  isDark?: boolean;
}

export const Section = ({ children, id, className = "", isDark = false }: SectionProps) => {
  return (
    <section
      id={id}
      data-section
      className={`relative w-full px-6 md:px-12 lg:px-24 ${
        isDark ? "bg-bg-primary" : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

// A reusable section header (e.g. jon@saxton:~/section)
interface SectionPromptProps {
  path: string;
  command: string;
  showOutput?: boolean;
  output?: string | ReactNode;
  className?: string;
}

export const SectionPrompt = ({
  path,
  command,
  showOutput = true,
  output,
  className = "",
}: SectionPromptProps) => {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="font-mono text-sm md:text-base text-text-muted flex flex-wrap items-center gap-x-2">
        <span className="text-accent-green">jon</span>
        <span className="text-accent-cyan/80">@</span>
        <span className="text-accent-cyan">saxton</span>
        <span className="text-text-muted/60">:</span>
        <span className="text-accent-blue">~/{path}</span>
        <span className="text-text-dim">$</span>
        <span className="text-text-secondary ml-1 typing-animation">
          {command}
          <motion.span
            className="inline-block w-[0.5em] h-[1em] bg-accent-green ml-[1px] align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </div>
      {showOutput && output && (
        <div className="mt-4 pl-2 border-l-2 border-accent-green/20">
          {typeof output === "string" ? (
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              {output}
            </p>
          ) : (
            output
          )}
        </div>
      )}
    </div>
  );
};
