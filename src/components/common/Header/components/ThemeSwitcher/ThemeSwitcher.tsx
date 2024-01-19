import { SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const ThemeSwitcher = () => (
  <Button className='rounded-full' variant='outline'>
    <SunIcon />
    <span className='sr-only'>Toggle theme</span>
  </Button>
);
