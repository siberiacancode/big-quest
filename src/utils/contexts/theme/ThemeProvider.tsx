'use client';

import React from 'react';
import { setCookie } from 'cookies-next';

import { COOKIES } from '@/utils/constants';

import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: Theme;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    setCookie(COOKIES.THEME, newTheme);
    document.documentElement.className = newTheme;
  };

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
