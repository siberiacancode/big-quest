'use client';

import { SunIcon } from 'lucide-react';

import { CircularButton } from '@/components/ui';

import { useThemeSwitcher } from './hooks/useThemeSwitcher';

export const ThemeSwitcher = () => {
  const { functions } = useThemeSwitcher();

  return (
    <CircularButton onClick={functions.toggleTheme}>
      <SunIcon />
      <span className='sr-only'>Toggle theme</span>
    </CircularButton>
  );
};
