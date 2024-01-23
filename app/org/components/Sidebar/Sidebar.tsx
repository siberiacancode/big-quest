import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';

import { Logo } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { useSidebar } from './hooks/useSidebar';

interface SidebarProps {
  children: (isOpen: boolean) => React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const { state, functions } = useSidebar();

  return (
    <div
      className={cn(
        'relative min-h-screen w-64 bg-background px-6 transition-[width] duration-300',
        !state.isOpen && 'w-28'
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

      {children(state.isOpen)}
    </div>
  );
};
