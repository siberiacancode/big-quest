import { useTheme } from '@/utils/contexts';

export const useThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return { functions: { toggleTheme } };
};
