"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  children: string;
  delay?: number;
  className?: string;
  isPrompt?: boolean;
  onComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  children,
  delay = 0,
  className = "",
  isPrompt = false,
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= children.length) {
          setCurrentText(children.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
        }
      }, 50 + Math.random() * 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [children, delay, onComplete]);

  if (isPrompt) {
    return (
      <span className={`font-mono ${className}`}>
        {currentText}
        {!isComplete && (
          <span className="inline-block w-[0.5em] h-[1em] bg-accent-green animate-blink ml-[1px] align-middle" />
        )}
      </span>
    );
  }

  return <span className={`font-mono ${className}`}>{currentText}</span>;
};

export default TerminalText;
