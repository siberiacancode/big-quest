import { SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const ThemeSwitcher = () => (
  <Button className='w-10 rounded-full' size='icon' variant='outline'>
    <SunIcon />
    <span className='sr-only'>Toggle theme</span>
  </Button>
);
