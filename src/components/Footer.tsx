"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-16 md:py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Terminal shutdown */}
          <div className="space-y-2 font-mono text-xs text-text-dim">
            <div className="flex items-center justify-center gap-2">
              <span className="text-accent-green">pushkar</span><span className="text-text-dim">@</span>
              <span className="text-accent-cyan">phantom</span><span className="text-text-dim">:</span>
              <span className="text-accent-blue">~/</span><span className="text-text-dim">$</span>
              <span className="text-text-secondary">shutdown</span>
            </div>
            <p>Stopping AI agents...</p>
            <p>Saving workspace state...</p>
            <p>Committing memories...</p>
            <p className="text-accent-green">Thank you for visiting.</p>
            <p>System halted.</p>
            <div className="flex justify-center pt-4">
              <span className="typing-cursor" />
            </div>
          </div>

          <div className="text-[10px] font-mono text-text-dim/40 mt-8 space-y-1">
            <p>&copy; 2026 Pushkar Prabhath Rayana. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
