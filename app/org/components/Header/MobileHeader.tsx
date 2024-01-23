'use client';

import React from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import { Logo } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { OrganizerNavigation } from '../navigation/OrganizerNavigation/OrganizerNavigation';

import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationsDropdownMenu } from './components/NotificationsDropdownMenu/NotificationsDropdownMenu';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { useMobileHeader } from './hooks/useMobileHeader';

export const MobileHeader = () => {
  const { state, functions } = useMobileHeader();

  return (
    <header className='flex h-20 w-full items-center justify-between bg-background px-6'>
      <Logo full={false} />
      <div
        className={cn(
          'fixed -top-full left-0 right-0 z-10 flex h-screen flex-1 items-center justify-center bg-background opacity-0 transition-all lg:h-full',
          state.isOpen && 'top-0 overflow-auto opacity-100'
        )}
      >
        <div className='flex w-64 flex-col items-center justify-center overflow-auto py-24 '>
          <div className='flex h-full flex-col items-center justify-center'>
            <HeaderSearch />

            <div className='mt-10 flex flex-col-reverse items-center gap-4'>
              <div className='flex'>
                <ThemeSwitcher />
                <NotificationsDropdownMenu />
              </div>

              <div className='h-px w-full bg-secondary' />
              <ProfileDropdownMenu />
            </div>
          </div>

          <OrganizerNavigation isOpen />
        </div>
      </div>
      <Button
        className='relative z-20 rounded lg:hidden'
        size='icon'
        variant='secondary'
        onClick={functions.onBurgerClick}
      >
        {state.isOpen && <XIcon />}
        {!state.isOpen && <MenuIcon />}
      </Button>
    </header>
  );
};
