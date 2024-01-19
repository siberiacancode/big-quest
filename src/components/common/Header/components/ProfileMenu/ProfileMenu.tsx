'use client';

import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';

import userAvatar from '@/assets/icons/userAvatar.svg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui';

export const ProfileMenu = () => {
  const [open, setOpen] = React.useState(false);
  // TODO
  // const { user } = useUserContext();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className='flex cursor-pointer items-center gap-4 rounded-lg px-3 py-1 transition-colors hover:bg-secondary'>
          <div className='relative'>
            <Image className='h-10 w-10' src={userAvatar as string} alt='user avatar' />
            <div className='absolute bottom-0 right-0 h-2 w-2 rounded-full border bg-muted-foreground' />
          </div>
          <div className='flex flex-col justify-between'>
            <p className=''>Имя фамилия</p>
            <p className='text-sm text-muted-foreground'>Админ</p>
          </div>
          {open && <ChevronUpIcon />}
          {!open && <ChevronDownIcon />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>test content</DropdownMenuContent>
    </DropdownMenu>
  );
};
