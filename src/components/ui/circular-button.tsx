import React from 'react';

import { Button } from '@/components/ui';

export interface CircularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CircularButton = React.forwardRef<HTMLButtonElement, CircularButtonProps>(
  ({ children, ...props }) => (
    <Button
      className='rounded-full border-gray-300  bg-transparent p-2'
      size='icon'
      variant='outline'
      {...props}
    >
      {children}
    </Button>
  )
);
CircularButton.displayName = 'CircularButton';

export { CircularButton };
