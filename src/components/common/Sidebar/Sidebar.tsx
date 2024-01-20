'use client';

import React from 'react';
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button, Collapsible, CollapsibleTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

import { SidebarLink } from './components/SidebarLink/SidebarLink';
import { linksInfo } from './constants/linksInfo';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <Collapsible
      className={cn(
        'bg-background lg:fixed lg:left-0 lg:min-h-screen lg:px-8',
        sidebarOpen && 'w-64 lgx:w-48',
        !sidebarOpen && 'lg:px-6'
      )}
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
    >
      <CollapsibleTrigger asChild>
        <Button
          className='absolute right-0 -translate-y-1/2 translate-x-1/2 lgx:hidden'
          size='icon'
          variant='outline'
        >
          {sidebarOpen && <ArrowLeftFromLineIcon className='h-4 w-4' />}
          {!sidebarOpen && <ArrowRightFromLineIcon className='h-4 w-4' />}
        </Button>
      </CollapsibleTrigger>

      <nav className=' mt-10 flex flex-col items-center gap-2'>
        {linksInfo.organizer.map((link) => (
          <SidebarLink key={link.id} link={link} pathname={pathname} open={sidebarOpen} />
        ))}
      </nav>
    </Collapsible>
  );
};
