import React from 'react';

import { useThemeSwitcher } from '@/components/common/ThemeSwitcher/hooks/useThemeSwitcher';
import { useTheme, useUser } from '@/utils/contexts';

export const useMobileProfileDropdownMenu = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  const { functions } = useThemeSwitcher();

  const [isOpen, setIsOpen] = React.useState(false);

  return {
    state: { isOpen, user, theme },
    functions: { setIsOpen, toggleTheme: functions.toggleTheme }
  };
};
