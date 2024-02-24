import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { I18nText } from '../common';

import { Input, type InputProps } from './input';

export type InnInputProps = InputProps;

export const INN_MIN_LENGTH = 10;
export const INN_MAX_LENGTH = 12;

export const innSchema = z
  .string()
  .min(INN_MIN_LENGTH, { message: 'validation.format' })
  .max(INN_MAX_LENGTH, { message: 'validation.format' });

export const InnInput = (props: InnInputProps) => (
  <div className='relative'>
    <Input className='pr-12' minLength={INN_MIN_LENGTH} maxLength={INN_MAX_LENGTH} {...props} />
    <div className='absolute right-3 top-[10px]'>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon className=' size-4' />
          </TooltipTrigger>
          <TooltipContent side='left'>
            <I18nText path='tooltip.inn' />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
