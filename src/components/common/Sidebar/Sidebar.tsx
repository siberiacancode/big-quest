'use client';

import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FullLogoIcon from '@/assets/icons/fullLogo.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getNavigationLinksByUserRole } from '@/utils/helpers';

import { ClosedSidebarNavigation } from './components/ClosedSidebarNavigation/ClosedSidebarNavigation';
import { OpenedSidebarNavigation } from './components/OpenedSidebarNavigation/OpenedSidebarNavigation';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const navigationLinks = getNavigationLinksByUserRole('organizer');
  const pathname = usePathname();

  const toggleSidebarOpen = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className='relative'>
      <div className='flex h-20 items-center justify-center'>
        <Link href='/'>
          {sidebarOpen && <Image src={FullLogoIcon as string} alt='лого' />}
          {!sidebarOpen && <Image src={LogoIcon as string} alt='лого' />}
        </Link>
      </div>

      <div
        className={cn(
          'min-h-screen bg-background px-8',
          sidebarOpen && 'w-64 lgx:w-48',
          !sidebarOpen && 'lg:px-6'
        )}
      >
        <Button
          className='absolute right-0 top-20 -translate-y-1/2 translate-x-1/2 lgx:hidden'
          size='icon'
          variant='outline'
          onClick={toggleSidebarOpen}
        >
          {sidebarOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
          {!sidebarOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
        </Button>

        {sidebarOpen && <OpenedSidebarNavigation links={navigationLinks} pathname={pathname} />}
        {!sidebarOpen && <ClosedSidebarNavigation links={navigationLinks} pathname={pathname} />}
      </div>
    </div>
  );
};
