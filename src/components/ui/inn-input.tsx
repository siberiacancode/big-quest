import * as z from 'zod';

import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

export type InnInputProps = NumberFormatInputProps;

export const INN_MIN_LENGTH = 10;
export const INN_MAX_LENGTH = 12;

export const innSchema = z
  .string()
  .min(INN_MIN_LENGTH, { message: 'validation.inn.format' })
  .max(INN_MAX_LENGTH, { message: 'validation.inn.format' });

export const InnInput = (props: InnInputProps) => (
  <NumberFormatInput minLength={INN_MIN_LENGTH} maxLength={INN_MAX_LENGTH} {...props} />
);
