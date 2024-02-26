import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  toggle: () => {},
  dark: '#333',
  light: 'white',
} as ThemeCtxType);

type ThemeCtxType = {
  toggle: () => void;
  dark: string;
  light: string;
};

// ThemeContext.Provider
type ThemeProviderProps = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: ThemeProviderProps) {
  function toggleTheme() {}

  const themeVal = {
    toggle: toggleTheme,
    dark: '#333',
    light: 'white',
  };
  return <ThemeContext.Provider value={themeVal}>{children}</ThemeContext.Provider>;
}

// useThemeCtx

export function useThemeCtx() {
  return useContext(ThemeContext);
}
