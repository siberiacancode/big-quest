'use client';

import React from 'react';

export interface ThemeContextParams {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextParams>({
  theme: 'light',
  toggleTheme: () => {}
});
