'use client';

import { SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useThemeSwitcher } from './hooks/useThemeSwitcher';

export const ThemeSwitcher = () => {
  const { functions } = useThemeSwitcher();

  return (
    <Button
      className='w-10 rounded-full'
      size='icon'
      variant='outline'
      onClick={functions.toggleTheme}
    >
      <SunIcon />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
