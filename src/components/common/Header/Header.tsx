import { SearchIcon, UserIcon } from 'lucide-react';

import { Button, Input } from '@/components/ui';

import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className='sticky right-0 top-0 z-50 flex h-20  px-9'>
      <div className='flex w-full items-center justify-between'>
        <div className='relative w-64'>
          <Input className='bg-secondary pl-10' placeholder='Найти...' type='search' />
          <SearchIcon
            className='pointer-events-none absolute inset-y-2/4 left-2.5 -translate-y-1/2 opacity-50'
            size={24}
          />
        </div>

        <div className='flex gap-6'>
          <ThemeSwitcher />
          <NotificationSwitcher />

          <div className='h-12 w-px bg-secondary' />

          <Button className='rounded-full' size='icon' variant='secondary'>
            <UserIcon />
            <span className='sr-only'>Account settings</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
