'use client';

import React from 'react';
import { setCookie } from 'cookies-next';

import { COOKIES } from '@/utils/constants';
import { useNonInitialEffect } from '@/utils/hooks';

import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme: Theme;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useNonInitialEffect(() => {
    console.log('#theme switched to ', theme);
    setCookie(COOKIES.THEME, theme);
    document.documentElement.className = theme;
  }, [theme]);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
