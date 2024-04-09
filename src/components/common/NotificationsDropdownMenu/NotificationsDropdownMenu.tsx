import React from 'react';
import { BellIcon } from 'lucide-react';

import {
  CircularButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui';

export const NotificationsDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <CircularButton>
        <BellIcon />
      </CircularButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent>test content</DropdownMenuContent>
  </DropdownMenu>
);
