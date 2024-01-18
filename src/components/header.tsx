import { SearchIcon, UserIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { NotificationSwitcher } from './notification-switcher';
import { ThemeSwitcher } from './theme-switcher';

export const Header = () => {
  return (
    <header className='sticky right-0 top-0 z-50 flex h-20 border bg-primary px-9'>
      <div className='flex w-full items-center justify-between'>
        <div className='relative w-64'>
          <Input className='pl-8' placeholder='Найти...' type='search' />
          <SearchIcon className='pointer-events-none absolute inset-y-2/4 left-2.5 h-4 w-4 -translate-y-1/2 opacity-50' />
        </div>

        <div>
          <ThemeSwitcher />
          <NotificationSwitcher />

          <Button className='rounded-full' size='icon' variant='secondary'>
            <UserIcon />
            <span className='sr-only'>Account settings</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
