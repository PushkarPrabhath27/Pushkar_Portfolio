/*
 * Design Tokens - Single source of truth
 * Exports the tokens as a JS object so we can use them in components
 */
export const tokens = {
  colors: {
    bg: {
      primary: '#0A0A0A',
      secondary: '#111111',
      tertiary: '#1A1A1A',
      terminal: '#0D0D0D',
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#B0B0B0',
      muted: '#666666',
      dim: '#444444',
    },
    accent: {
      green: '#4ADE80',
      blue: '#60A5FA',
      yellow: '#FBBF24',
      red: '#F87171',
      cyan: '#22D3EE',
    },
    border: {
      subtle: 'rgba(255,255,255,0.06)',
      medium: 'rgba(255,255,255,0.1)',
      strong: 'rgba(255,255,255,0.15)',
    }
  },
  spacing: {
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '8': '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 24px rgba(0,0,0,0.5)',
  },
  transition: {
    fast: '150ms ease',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
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
  }
};

/* Type-safe token keys if needed */
export type ColorKeys = keyof typeof tokens.colors;
export type SpacingKeys = keyof typeof tokens.spacing;
export type ZIndexKeys = keyof typeof tokens.zIndex;
