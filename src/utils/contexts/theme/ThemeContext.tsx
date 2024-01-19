'use client';

import React from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextParams {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextParams>({
  theme: 'light',
  toggleTheme: () => {}
});
