import { SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const ThemeSwitcher = () => (
  <Button className='rounded-full hover:bg-accent hover:text-accent-foreground'>
    <SunIcon />
    <span className='sr-only'>Toggle theme</span>
  </Button>
);
