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
        ' min-h-screen w-[302px] bg-background transition-[width] duration-300',
        !state.isOpen && 'w-[92px]'
      )}
    >
      <div className='relative flex h-24 items-center justify-center'>
        <Logo full={state.isOpen} />
        <Button
          className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2'
          size='icon'
          variant='outline'
          onClick={functions.toggleSidebarOpen}
        >
          {state.isOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
          {!state.isOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
        </Button>
      </div>

      <div className={cn('px-8', !state.isOpen && 'px-[22px]')}>{children(state.isOpen)}</div>
    </div>
  );
};
