import { THEME_KEY } from '../constants/themeKey';
import type { Theme } from '../ThemeContext';

export const getDefaultTheme = () => (localStorage.getItem(THEME_KEY) as Theme) || 'light';
