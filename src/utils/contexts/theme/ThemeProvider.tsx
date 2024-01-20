'use client';

import React from 'react';
import { setCookie } from 'cookies-next';

import { COOKIES } from '@/utils/constants';

import { type Theme, ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = React.useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    []
  );

  React.useEffect(() => {
    setCookie(COOKIES.THEME, theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])}
    >
      {children}
    </ThemeContext.Provider>
  );
};
