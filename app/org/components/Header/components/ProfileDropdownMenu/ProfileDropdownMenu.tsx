'use client';

import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';

import userAvatar from '@/assets/icons/userAvatar.svg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui';

import { useProfileDropdownMenu } from './hooks/useProfileDropdownMenu';

export const ProfileDropdownMenu = () => {
  const { state, functions } = useProfileDropdownMenu();

  return (
    <DropdownMenu open={state.isOpen} onOpenChange={functions.setIsOpen}>
      <DropdownMenuTrigger>
        <div className='flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1 transition-colors hover:bg-secondary'>
          <div className='relative'>
            <Image className='h-10 w-10' src={userAvatar as string} alt='user avatar' />
            <div className='absolute bottom-0 right-0 h-2 w-2 rounded-full border bg-muted-foreground' />
          </div>
          <div className='flex flex-col justify-between'>
            <p className=''>Имя фамилия</p>
            <p className='text-sm text-muted-foreground'>Админ</p>
          </div>
          {state.isOpen && <ChevronUpIcon />}
          {!state.isOpen && <ChevronDownIcon />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>test content</DropdownMenuContent>
    </DropdownMenu>
  );
};
