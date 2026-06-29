export interface DesignTokens {
  colors: {
    background: Record<string, string>;
    text: Record<string, string>;
    accent: Record<string, string>;
    border: Record<string, string>;
  };
  spacing: Record<string, string>;
  typography: {
    family: string;
    size: Record<string, string>;
    weight: Record<string, number>;
    lineHeight: Record<string, number>;
    letterSpacing: Record<string, string>;
  };
  radius: Record<string, string>;
  shadow: Record<string, string>;
  transition: {
    fast: string;
    base: string;
    slow: string;
  };
  zIndex: Record<string, number>;
  container: Record<string, string>;
  ease: {
    default: string;
    in: string;
    out: string;
    bounce: string;
  };
  duration: {
    instant: string;
    fast: string;
    base: string;
    slow: string;
    entrance: string;
  };
}

export const designTokens: DesignTokens = {
  colors: {
    background: {
      primary: "#0A0A0A",
      secondary: "#111111",
      tertiary: "#1A1A1A",
      terminal: "#0D0D0D",
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#B0B0B0",
      muted: "#666666",
      dim: "#444444",
    },
    accent: {
      green: "#4ADE80",
      blue: "#60A5FA",
      yellow: "#FBBF24",
      red: "#F87171",
      cyan: "#22D3EE",
    },
    border: {
      subtle: "rgba(255,255,255,0.06)",
      medium: "rgba(255,255,255,0.1)",
      strong: "rgba(255,255,255,0.15)",
    },
  },
  spacing: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
  },
  typography: {
    family:
      "'SF Mono', 'Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace",
    size: {
      xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
      sm: "clamp(0.875rem, 0.8rem + 0.35vw, 1rem)",
      base: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
      lg: "clamp(1.125rem, 1rem + 0.65vw, 1.25rem)",
      xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
      "2xl": "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)",
      "3xl": "clamp(2rem, 1.5rem + 2.5vw, 3rem)",
      "4xl": "clamp(2.5rem, 2rem + 3vw, 4rem)",
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.6,
    },
    letterSpacing: {
      tight: "-0.05em",
      normal: "0",
      wide: "0.05em",
    },
  },
  radius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.3)",
    md: "0 4px 12px rgba(0,0,0,0.4)",
    lg: "0 8px 24px rgba(0,0,0,0.5)",
  },
  transition: {
    fast: "150ms ease",
    base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  zIndex: {
    behind: -1,
    default: 0,
    content: 1,
    elevated: 10,
    sticky: 20,
    header: 50,
    modal: 100,
    tooltip: 200,
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
  ease: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  duration: {
    instant: "0.1s",
    fast: "0.2s",
    base: "0.3s",
    slow: "0.5s",
    entrance: "0.6s",
  },
};
