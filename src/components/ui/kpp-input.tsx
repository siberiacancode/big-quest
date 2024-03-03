import React from 'react';
import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import type { InputProps } from './input';
import { Input } from './input';

export interface KppInputProps extends InputProps {
  tooltip?: string;
}

export const KPP_LENGTH = 9;

export const kppSchema = z.string().length(KPP_LENGTH, { message: 'validation.format' });

export const KppInput = React.forwardRef<HTMLInputElement, KppInputProps>(
  ({ tooltip, ...props }, ref) => (
    <div className='relative'>
      <Input minLength={KPP_LENGTH} maxLength={KPP_LENGTH} {...props} ref={ref} />
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
