'use client';

import React from 'react';

import { THEME_KEY } from './constants/themeKey';
import { getDefaultTheme } from './helpers/getDefaultTheme';
import { type Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(getDefaultTheme());

  const toggleTheme = React.useCallback(
    () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    []
  );

  React.useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])}
    >
      {children}
    </ThemeContext.Provider>
  );
};
