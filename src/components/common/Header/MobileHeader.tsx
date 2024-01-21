'use client';

import React from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoIcon from '@/assets/icons/logo.svg';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getNavigationLinksByUserRole } from '@/utils/helpers';

import { OpenedSidebarNavigation } from '../Sidebar/components/OpenedSidebarNavigation/OpenedSidebarNavigation';

import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { NotificationSwitcher } from './components/NotificationSwitcher/NotificationSwitcher';
import { ProfileDropdownMenu } from './components/ProfileDropdownMenu/ProfileDropdownMenu';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const MobileHeader = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const navigationLinks = getNavigationLinksByUserRole('organizer');
  const pathname = usePathname();

  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setBurgerOpen(!burgerOpen);
  };

  return (
    <header className='flex h-20 w-full items-center justify-between bg-background pl-8 pr-14'>
      <Link className='z-20' href='/'>
        <Image src={LogoIcon as string} alt='лого' />
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
          <OpenedSidebarNavigation links={navigationLinks} pathname={pathname} />
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
