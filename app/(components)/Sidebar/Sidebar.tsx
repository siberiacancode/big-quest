import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';

import { Logo } from '@/components/common';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { useSidebar } from './hooks/useSidebar';

export interface SidebarProps {
  children: (isOpen: boolean) => React.ReactNode;
  defaultOpen: boolean;
}

export const Sidebar = ({ children, defaultOpen }: SidebarProps) => {
  const { state, functions } = useSidebar({ defaultOpen });

  return (
    <div
      className={cn(
        ' min-h-screen w-[302px] bg-background px-8 transition-[width] duration-300',
        !state.isOpen && 'w-[92px] px-[22px]'
      )}
    >
      <div
        className={cn(
          'relative flex h-24 items-center justify-start',
          !state.isOpen && 'justify-center'
        )}
      >
        <Logo full={state.isOpen} className='fill-foreground' />
        <Button
          className={cn(
            'absolute bottom-0 translate-x-1/2 translate-y-1/2',
            state.isOpen && '-right-8',
            !state.isOpen && '-right-[22px]'
          )}
          size='icon'
          variant='outline'
          onClick={functions.toggleSidebarOpen}
        >
          {state.isOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
          {!state.isOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
        </Button>
      </div>

      <div className='w-full'>{children(state.isOpen)}</div>
    </div>
  );
};
