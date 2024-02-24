import { InfoIcon } from 'lucide-react';
import * as z from 'zod';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { I18nText } from '../common';

import type { InputProps } from './input';
import { Input } from './input';

export type OgrnInputProps = InputProps;

export const OGRN_MIN_LENGTH = 13;
export const OGRN_MAX_LENGTH = 15;

export const ogrnSchema = z
  .string()
  .min(OGRN_MIN_LENGTH, { message: 'validation.format' })
  .max(OGRN_MAX_LENGTH, { message: 'validation.format' });

export const OgrnInput = (props: OgrnInputProps) => (
  <div className='relative'>
    <Input minLength={OGRN_MIN_LENGTH} maxLength={OGRN_MAX_LENGTH} {...props} />
    <div className='absolute right-3 top-[10px]'>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon className=' size-4' />
          </TooltipTrigger>
          <TooltipContent side='left'>
            <I18nText path='tooltip.ogrn' />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
