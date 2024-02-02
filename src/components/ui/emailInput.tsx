import React from 'react';

import type { InputProps } from '@/components/ui';
import { Input } from '@/components/ui';

export const EmailInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, disabled, ...props }, ref) => {
    return (
      <div className='relative'>
        <Input ref={ref} {...props} placeholder='examples@mail.com' />
      </div>
    );
  }
);
