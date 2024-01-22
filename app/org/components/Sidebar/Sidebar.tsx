'use client';

import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { ClosedSidebarNavigation } from './components/ClosedSidebarNavigation/ClosedSidebarNavigation';
import { OpenedSidebarNavigation } from './components/OpenedSidebarNavigation/OpenedSidebarNavigation';
import { useSidebar } from './hooks/useSidebar';

export const Sidebar = () => {
  const { state, functions } = useSidebar();
  const pathname = usePathname();

  return (
    <div className='relative'>
      <div className='flex h-20 items-center justify-center'>
        <Logo full={state.sidebarOpen} />
      </div>

      <div
        className={cn(
          'min-h-screen bg-background px-8',
          state.sidebarOpen && 'w-64',
          !state.sidebarOpen && 'px-6'
        )}
      >
        <Button
          className='absolute right-0 top-20 -translate-y-1/2 translate-x-1/2'
          size='icon'
          variant='outline'
          onClick={functions.toggleSidebarOpen}
        >
          {state.sidebarOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
          {!state.sidebarOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
        </Button>

        {state.sidebarOpen && (
          <OpenedSidebarNavigation links={state.navigationLinks} pathname={pathname} />
        )}
        {!state.sidebarOpen && (
          <ClosedSidebarNavigation links={state.navigationLinks} pathname={pathname} />
        )}
      </div>
    </div>
  );
};
