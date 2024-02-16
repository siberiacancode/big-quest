'use client';

import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';

import { useProfileDropdownMenu } from './hooks/useProfileDropdownMenu';

export const ProfileDropdownMenu = () => {
  const { state, functions } = useProfileDropdownMenu();

  return (
    <DropdownMenu open={state.isOpen} onOpenChange={functions.setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className='flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-colors hover:bg-secondary'>
          <div className='relative'>
            <div className='h-10 w-10 rounded-full bg-primary' />
            <div className='absolute bottom-0 right-0 h-2 w-2 rounded-full border bg-muted-foreground' />
          </div>
          <div className='flex flex-col justify-between'>
            <Typography variant='h6' tag='p'>
              Имя фамилия
            </Typography>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              Админ
            </Typography>
          </div>
          {state.isOpen && <ChevronUpIcon />}
          {!state.isOpen && <ChevronDownIcon />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>test content</DropdownMenuContent>
    </DropdownMenu>
  );
};
