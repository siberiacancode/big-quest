import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { I18nText } from '../common';

import type { InputProps } from './input';
import { Input } from './input';

export type BikInputProps = InputProps;

export const BIK_LENGTH = 9;

export const bikSchema = z.string().length(BIK_LENGTH, { message: 'validation.format' });

export const BikInput = (props: BikInputProps) => (
  <div className='relative'>
    <Input minLength={BIK_LENGTH} maxLength={BIK_LENGTH} {...props} />
    <div className='absolute right-3 top-[10px]'>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon className=' size-4' />
          </TooltipTrigger>
          <TooltipContent side='left'>
            <I18nText path='tooltip.bik' />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
