import { useThemeContext } from '@/utils/contexts';

export const useThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return { functions: { toggleTheme } };
};
