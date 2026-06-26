import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    background: '#FCFAF8',
    foreground: '#adfbff',
    typography: '#0c1b1a',
    dimmed: '#ECE8E4',
    tint: '#2a5452',
    activeTint: '#1B140C',
    link: '#1E3799',
    accents: {
      banana: '#F6E58D',
      pumpkin: '#FFBE76',
      apple: '#FF7979',
      grass: '#BADC58',
      storm: '#686DE0'
    }
  },
  gap: (v: number) => v * 8
} as const;

const darkTheme = {
  colors: {
    background: '#112022',
    foreground: '#183333',
    typography: '#FFFFFF',
    dimmed: '#A8A198',
    tint: '#92a7c9',
    activeTint: '#FFFFFF',
    link: '#0C2461',
    accents: {
      banana: '#f9CA24',
      pumpkin: '#F0932B',
      apple: '#EB4D4B',
      grass: '#6AB04C',
      storm: '#4834D4'
    }
  },
  gap: (v: number) => v * 8
} as const;

const appThemes = {
  light: lightTheme,
  dark: darkTheme
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// Configure adaptive themes and breakpoints with UniStyles
StyleSheet.configure({
  settings: {
    adaptiveThemes: true
  },
  themes: {
    light: lightTheme,
    dark: darkTheme
  },
  breakpoints
});
