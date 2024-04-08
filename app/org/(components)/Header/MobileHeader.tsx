'use client';

import React from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import { Logo } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

import { SidebarNavigation } from '../navigation/SidebarNavigation/SidebarNavigation';

import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationsDropdownMenu } from './components/NotificationsDropdownMenu/NotificationsDropdownMenu';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { useMobileHeader } from './hooks/useMobileHeader';

export const MobileHeader = () => {
  const { state, functions } = useMobileHeader();

  return (
    <header className='flex h-20 w-full items-center justify-between bg-background px-6'>
      <Logo href={ROUTES.ORG.ROOT} full={false} className='fill-current' />
      <div
        className={cn(
          'fixed -top-full left-0 z-10 h-screen w-full bg-background py-24 opacity-0 transition-all',
          state.isOpen && 'top-0 overflow-auto opacity-100'
        )}
      >
        <div className='mx-auto flex flex-col items-center justify-center lgx:w-96 mdx:w-80 smx:w-64'>
          <div className='flex w-full flex-col items-center justify-center'>
            <HeaderSearch />

            <div className='mt-10 flex flex-col-reverse items-center gap-4'>
              <div className='flex gap-4'>
                <ThemeSwitcher />
                <NotificationsDropdownMenu />
              </div>

              <div className='h-px w-full bg-secondary' />
              <ProfileDropdownMenu />
            </div>
          </div>

          <SidebarNavigation isOpen userRole={state.userRole} />
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
