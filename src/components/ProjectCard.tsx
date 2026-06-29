"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <a
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-lg bg-bg-secondary border border-border-subtle/50 hover:border-border-medium/50 transition-colors duration-300"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.5 : 0.3,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg md:text-xl font-mono font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-accent-green text-lg flex-shrink-0"
            >
              →
            </motion.span>
          </div>

          <p className="text-sm font-mono text-text-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-text-dim bg-bg-tertiary/50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="pt-2">
            <span className="text-xs font-mono text-accent-green flex items-center gap-1 group-hover:text-accent-cyan transition-colors duration-200">
              <span className="text-accent-green/60">→</span>
              ./open --url
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
