import * as z from 'zod';

import { Input, type InputProps } from './input';

export type InnInputProps = InputProps;

export const INN_MIN_LENGTH = 10;
export const INN_MAX_LENGTH = 12;

export const innSchema = z
  .string()
  .min(INN_MIN_LENGTH, { message: 'validation.format' })
  .max(INN_MAX_LENGTH, { message: 'validation.format' });

export const InnInput = (props: InnInputProps) => (
  <Input minLength={INN_MIN_LENGTH} maxLength={INN_MAX_LENGTH} {...props} />
);
