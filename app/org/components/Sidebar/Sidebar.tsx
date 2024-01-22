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

interface SidebarProps {
  renderChildren?: (isOpen: boolean) => React.ReactNode;
}

export const Sidebar = ({ renderChildren }: SidebarProps) => {
  const { state, functions } = useSidebar();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'relative min-h-screen w-64 bg-background px-6 transition duration-1000',
        !state.isOpen && ' w-26 '
      )}
    >
      <div className='flex h-20 items-center justify-center'>
        <Logo full={state.isOpen} />
      </div>
      <Button
        className='absolute right-0 top-20 -translate-y-1/2 translate-x-1/2'
        size='icon'
        variant='outline'
        onClick={functions.toggleSidebarOpen}
      >
        {state.isOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
        {!state.isOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
      </Button>

      {renderChildren?.(state.isOpen)}

      {state.isOpen && (
        <OpenedSidebarNavigation links={state.navigationLinks} pathname={pathname} />
      )}
      {!state.isOpen && (
        <ClosedSidebarNavigation links={state.navigationLinks} pathname={pathname} />
      )}
    </div>
  );
};
