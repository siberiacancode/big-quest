import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { I18nText } from '../common';

import type { InputProps } from './input';
import { Input } from './input';

export type KppInputProps = InputProps;

export const KPP_LENGTH = 9;

export const kppSchema = z.string().length(KPP_LENGTH, { message: 'validation.format' });

export const KppInput = (props: KppInputProps) => (
  <div className='relative'>
    <Input minLength={KPP_LENGTH} maxLength={KPP_LENGTH} {...props} />
    <div className='absolute right-3 top-[10px]'>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon className=' size-4' />
          </TooltipTrigger>
          <TooltipContent side='left'>
            <I18nText path='tooltip.kpp' />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
