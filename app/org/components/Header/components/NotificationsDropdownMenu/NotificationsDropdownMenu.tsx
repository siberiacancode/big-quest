import React from 'react';
import { BellIcon } from 'lucide-react';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui';

export const NotificationsDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button className='rounded-full' size='icon' variant='secondary'>
        <BellIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>test content</DropdownMenuContent>
  </DropdownMenu>
);
