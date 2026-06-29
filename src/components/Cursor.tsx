'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  blink?: boolean;
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Cursor({
  blink = true,
  className = '',
  color = '#4ADE80',
  size = 'md',
}: CursorProps) {
  const sizeClass = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  if (!blink) {
    return (
      <span
        className={`inline-block ${sizeClass[size]} rounded-sm ${className}`}
        style={{ backgroundColor: color }}
      />
    );
  }

  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`inline-block ${sizeClass[size]} rounded-sm ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}
