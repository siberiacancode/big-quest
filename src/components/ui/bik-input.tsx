import React from 'react';
import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import type { InputProps } from './input';
import { Input } from './input';

export interface BikInputProps extends InputProps {
  tooltip?: string;
}

export const BIK_LENGTH = 9;

export const bikSchema = z.string().length(BIK_LENGTH, { message: 'validation.format' });

export const BikInput = React.forwardRef<HTMLInputElement, BikInputProps>(
  ({ tooltip, ...props }, ref) => (
    <div className='relative'>
      <Input minLength={BIK_LENGTH} maxLength={BIK_LENGTH} {...props} ref={ref} />
      {!!tooltip && (
        <div className='absolute right-3 top-[10px]'>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className=' size-4' />
              </TooltipTrigger>
              <TooltipContent side='left'>{tooltip}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  )
);
