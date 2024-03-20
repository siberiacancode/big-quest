import type { PatternFormatProps } from 'react-number-format';
import * as z from 'zod';

import { PatternFormatInput } from './pattern-format-input';

type PhoneNumberInputProps = Omit<PatternFormatProps, 'format'>;

export const PHONE_NUMBER_LENGTH = 10;

export const phoneNumberSchema = z
  .string()
  .length(PHONE_NUMBER_LENGTH, { message: 'validation.format' });

export const PhoneNumberInput = (props: PhoneNumberInputProps) => (
  <PatternFormatInput format='+7 (###) ###-##-##' placeholder='+7 (999) 999-99-99' {...props} />
);
