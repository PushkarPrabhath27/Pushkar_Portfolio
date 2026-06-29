'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TerminalPromptProps {
  command: string;
  path?: string;
  className?: string;
}

export function TerminalPrompt({ command, path = '~', className = '' }: TerminalPromptProps) {
  const paths = {
    '~': '~',
    'about': '~/about',
    'projects': '~/projects',
    'contact': '~/contact',
  };

  return (
    <div className={`flex items-center gap-2 font-mono text-sm ${className}`}>
      <span className="text-[#4ADE80]">jon</span>
      <span className="text-[#666666]">@</span>
      <span className="text-[#22D3EE]">saxton</span>
      <span className="text-[#666666]">:</span>
      <span className="text-[#60A5FA]">{paths[path as keyof typeof paths]}</span>
      <span className="text-[#B0B0B0]">$</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-[#F0F0F0] ml-2"
      >
        {command}
      </motion.span>
    </div>
  );
}
