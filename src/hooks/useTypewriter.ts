"use client";

import { useState, useEffect, useCallback } from "react";

interface TerminalLine {
  prompt: string;
  command: string;
  output: string[];
  delay: number;
}

interface TerminalState {
  lines: TerminalLine[];
  currentLine: number;
  currentChar: number;
  phase: "typing" | "output" | "waiting";
}

export function useTypewriter(
  config: {
    lines: TerminalLine[];
    typingSpeed?: number;
    outputDelay?: number;
    startDelay?: number;
  } = { lines: [] }
) {
  const { lines, typingSpeed = 50, outputDelay = 100, startDelay = 0 } = config;

  const [state, setState] = useState<TerminalState>({
    lines: [],
    currentLine: -1,
    currentChar: 0,
    phase: "waiting",
  });

  const [displayedLines, setDisplayedLines] = useState<
    Array<{
      prompt: string;
      command: string;
      typedCommand: string;
      output: string[];
      isComplete: boolean;
      showOutput: boolean;
    }>
  >([]);

  const runSequence = useCallback(() => {
    let currentLineIndex = 0;
    let charIndex = 0;
    let currentPhase: "typing" | "output" | "waiting" = "typing";

    const typeNextChar = () => {
      if (currentLineIndex >= lines.length) return;

      const line = lines[currentLineIndex];

      if (currentPhase === "typing") {
        const command = line.command;
        if (charIndex < command.length) {
          charIndex++;
          setState((prev) => ({
            ...prev,
            currentLine: currentLineIndex,
            currentChar: charIndex,
            phase: "typing",
          }));
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (newLines[currentLineIndex]) {
              newLines[currentLineIndex].typedCommand = command.slice(
                0,
                charIndex
              );
            } else {
              newLines.push({
                prompt: line.prompt,
                command: line.command,
                typedCommand: command.slice(0, charIndex),
                output: [],
                isComplete: false,
                showOutput: false,
              });
            }
            return newLines;
          });

          setTimeout(typeNextChar, Math.random() * typingSpeed + typingSpeed);
        } else {
          // Command typed, show output after delay
          currentPhase = "output";
          setTimeout(() => {
            setState((prev) => ({ ...prev, phase: "output" }));
            setDisplayedLines((prev) => {
              const newLines = [...prev];
              if (newLines[currentLineIndex]) {
                newLines[currentLineIndex].showOutput = true;
                newLines[currentLineIndex].output = line.output;
              }
              return newLines;
            });

            // Move to next line after output delay
            setTimeout(() => {
              setDisplayedLines((prev) => {
                const newLines = [...prev];
                if (newLines[currentLineIndex]) {
                  newLines[currentLineIndex].isComplete = true;
                }
                return newLines;
              });

              currentLineIndex++;
              charIndex = 0;
              currentPhase = "typing";

              if (currentLineIndex < lines.length) {
                setTimeout(typeNextChar, outputDelay);
              } else {
                setState((prev) => ({ ...prev, phase: "waiting" }));
              }
            }, outputDelay);
          }, outputDelay);
        }
      }
    };

    // Start typing after start delay
    setTimeout(() => {
      typeNextChar();
    }, startDelay);
  }, [lines, typingSpeed, outputDelay, startDelay]);

  useEffect(() => {
    if (lines.length > 0) {
      runSequence();
    }
  }, [lines, runSequence]);

  return { displayedLines, state };
}
