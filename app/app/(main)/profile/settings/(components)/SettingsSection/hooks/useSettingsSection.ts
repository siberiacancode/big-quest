import { useTheme } from '@/utils/contexts';

export const useSettingsSection = () => {
  const { toggleTheme, theme } = useTheme();

  const onToggleParentChange = () => {};
  const onToggleThemeChange = () => toggleTheme();

  return {
    state: { isDarkTheme: theme === 'dark' },
    functions: { onToggleThemeChange, onToggleParentChange }
  };
};
