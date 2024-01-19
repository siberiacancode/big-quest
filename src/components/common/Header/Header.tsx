import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';

import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className='sticky right-0 top-0 z-10 flex h-20 bg-background pl-9 pr-14'>
      <div className='flex w-full items-center justify-between'>
        <div className='relative w-64'>
          <Input className='bg-secondary pl-10' placeholder='Найти...' type='search' />
          <SearchIcon
            className='pointer-events-none absolute inset-y-2/4 left-2.5 -translate-y-1/2 opacity-50'
            size={24}
          />
        </div>

        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <NotificationSwitcher />

          <div className='h-12 w-px bg-secondary' />

          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};
