import { createContext, useContext, useState } from 'react';

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
  const [colors, setColors] = useState({
    dark: '#333',
    light: 'white',
  });
  console.log('colors ===', colors);

  function toggleTheme() {
    // if (colors.dark === '#333') {
    //   setColors({
    //     light: '#333',
    //     dark: 'white',
    //   });
    // } else {
    //   setColors({
    //     dark: '#333',
    //     light: 'white',
    //   });
    // }
    setColors({
      dark: colors.dark === '#333' ? 'white' : '#333',
      light: colors.dark === '#333' ? '#333' : 'white',
    });
  }

  const themeVal = {
    toggle: toggleTheme,
    dark: colors.dark,
    light: colors.light,
  };
  return <ThemeContext.Provider value={themeVal}>{children}</ThemeContext.Provider>;
}

// useThemeCtx

export function useThemeCtx() {
  return useContext(ThemeContext);
}
