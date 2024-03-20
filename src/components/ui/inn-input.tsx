import React from 'react';
import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import type { InputProps } from './input';
import { Input } from './input';

export interface InnInputProps extends InputProps {
  tooltip?: string;
}

export const INN_MIN_LENGTH = 10;
export const INN_MAX_LENGTH = 12;

export const innSchema = z
  .string()
  .min(INN_MIN_LENGTH, { message: 'validation.format' })
  .max(INN_MAX_LENGTH, { message: 'validation.format' });

export const InnInput = React.forwardRef<HTMLInputElement, InnInputProps>(
  ({ tooltip, ...props }, ref) => (
    <div className='relative'>
      <Input
        className='pr-12'
        minLength={INN_MIN_LENGTH}
        maxLength={INN_MAX_LENGTH}
        {...props}
        ref={ref}
      />
      {!!tooltip && (
        <div className='absolute right-3 top-[10px]'>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className='size-4' />
              </TooltipTrigger>
              <TooltipContent side='left'>{tooltip}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  )
);
