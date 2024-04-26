import { useTheme } from '@/utils/contexts';

export const useSettingsSection = () => {
  const { toggleTheme, theme } = useTheme();

  const onToggleParentChange = () => {
    // TODO request
  };

  return {
    state: { isDarkTheme: theme === 'dark' },
    functions: { onToggleThemeChange: toggleTheme, onToggleParentChange }
  };
};
