import React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import type { InputProps } from '@/components/ui';
import { Button, Input } from '@/components/ui';

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className='relative'>
        <Input ref={ref} type={showPassword ? 'text' : 'password'} disabled={disabled} {...props} />
        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          disabled={!value || disabled}
        >
          {showPassword ? (
            <EyeOffIcon className='h-5 w-5' aria-hidden='true' />
          ) : (
            <EyeIcon className='h-5 w-5' aria-hidden='true' />
          )}
        </Button>
      </div>
    );
  }
);
