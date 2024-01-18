import React from 'react';
import { BellIcon } from 'lucide-react';

import { Button } from './ui/button';

export const NotificationSwitcher = () => (
  <Button className='rounded-full' size='icon' variant='secondary'>
    <BellIcon />
  </Button>
);
