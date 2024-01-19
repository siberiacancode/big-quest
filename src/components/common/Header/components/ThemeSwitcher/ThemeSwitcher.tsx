'use client';

import { SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useThemeContext } from '@/utils/contexts';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Button className='w-10 rounded-full' size='icon' variant='outline' onClick={toggleTheme}>
      <SunIcon />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
