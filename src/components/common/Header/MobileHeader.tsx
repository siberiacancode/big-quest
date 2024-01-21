'use client';

import React from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { Logo } from '../Logo/Logo';
import { OpenedSidebarNavigation } from '../Sidebar/components/OpenedSidebarNavigation/OpenedSidebarNavigation';

import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { useMobileHeader } from './hooks/useMobileHeader';

export const MobileHeader = () => {
  const { state, functions } = useMobileHeader();
  const pathname = usePathname();

  return (
    <header className='flex h-20 w-full items-center justify-between bg-background px-6'>
      <Logo full={false} />
      <div
        className={cn(
          'fixed -top-full left-0 right-0 z-10 h-screen flex-1 overflow-auto bg-background py-24 opacity-0 transition-all lg:h-full',
          state.burgerOpen && 'top-0 overflow-auto opacity-100'
        )}
      >
        <div className='mx-auto flex w-56 flex-col items-center justify-center'>
          <div className='flex h-full flex-col items-center justify-center'>
            <HeaderSearch />

            <div className='mt-10 flex flex-col-reverse items-center gap-4'>
              <div className='flex'>
                <ThemeSwitcher />
                <NotificationSwitcher />
              </div>

              <div className='h-px w-full bg-secondary' />
              <ProfileDropdownMenu />
            </div>
          </div>
          <OpenedSidebarNavigation links={state.navigationLinks} pathname={pathname} />
        </div>
      </div>
      <Button
        className='relative z-20 rounded lg:hidden'
        size='icon'
        variant='secondary'
        onClick={functions.onBurgerClick}
      >
        {state.burgerOpen && <XIcon />}
        {!state.burgerOpen && <MenuIcon />}
      </Button>
    </header>
  );
};
