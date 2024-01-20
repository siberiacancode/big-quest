'use client';

import React from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import FullLogoIcon from '@/assets/icons/fullLogo.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { Sidebar } from '../Sidebar/Sidebar';

import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

interface HeaderProps {
  burgerOpen: boolean;
  setBurgerOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ burgerOpen, setBurgerOpen, setSidebarOpen, sidebarOpen }: HeaderProps) => {
  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setBurgerOpen(!burgerOpen);
  };

  return (
    <header className='fixed left-0 right-0 top-0 flex h-20 items-center justify-between bg-background pl-9 pr-14 mdx:pl-5 mdx:pr-5'>
      <Link className='' href='/'>
        {sidebarOpen && <Image src={FullLogoIcon as string} alt='лого' />}
        {!sidebarOpen && <Image src={LogoIcon as string} alt='лого' />}
      </Link>

      <div
        className={cn(
          'z-10 flex-1 lgx:fixed lgx:-top-full lgx:left-0 lgx:right-0 lgx:h-screen lgx:overflow-auto lgx:bg-background lgx:py-20 lgx:opacity-0 lgx:transition-all lg:h-full',
          burgerOpen && 'lgx:top-0 lgx:overflow-auto lgx:opacity-100'
        )}
      >
        <div className='lgx:flex lgx:flex-col lgx:items-center lgx:justify-center lg:ml-44  lg:h-full'>
          <div className='flex h-full items-center justify-between lgx:flex-col lgx:items-center lgx:justify-center'>
            <HeaderSearch />

            <div className='flex items-center gap-4 lgx:mt-10 lgx:flex-col-reverse'>
              <div className='lgx:flex'>
                <ThemeSwitcher />
                <NotificationSwitcher />
              </div>

              <div className='h-12 w-px bg-secondary lgx:h-px lgx:w-full' />
              <ProfileDropdownMenu />
            </div>
          </div>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>

      <Button
        className='relative z-20 rounded lg:hidden'
        size='icon'
        variant='secondary'
        onClick={onBurgerClick}
      >
        {burgerOpen && <XIcon />}
        {!burgerOpen && <MenuIcon />}
      </Button>
    </header>
  );
};
