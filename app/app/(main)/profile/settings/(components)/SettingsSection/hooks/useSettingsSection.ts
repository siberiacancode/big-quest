import { useTheme } from '@/utils/contexts';

export const useSettingsSection = () => {
  const { toggleTheme, theme } = useTheme();

  const toggleIsParent = () => {
    // TODO request
  };

  return {
    state: { isDarkTheme: theme === 'dark' },
    functions: { toggleTheme, toggleIsParent }
  };
};
