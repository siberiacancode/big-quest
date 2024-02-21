'use client';

import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';

import { useAddActivityDropdownMenu } from './hooks/useAddActivityDropdownMenu';

export const AddActivityDropdownMenu = () => {
  const { state, functions } = useAddActivityDropdownMenu();
  const [position, setPosition] = React.useState('bottom');

  return (
    <DropdownMenu open={state.isOpen} onOpenChange={functions.setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className='flex max-w-40 items-center justify-between gap-2 rounded-md border border-secondary bg-input-foreground px-3 py-2'>
          <Typography variant='body2'>{position}</Typography>
          {state.isOpen && <ChevronUpIcon className='h-4 w-4' />}
          {!state.isOpen && <ChevronDownIcon className='h-4 w-4' />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40 bg-background'>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className='bg-background text-start' value='top'>
            Status Bar
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='bg-background text-start' value='add'>
            Activity Bar
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='bg-background text-start' value='agv'>
            Panel
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
