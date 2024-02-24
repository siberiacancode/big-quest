import * as z from 'zod';

import type { InputProps } from './input';
import { Input } from './input';

export type BikInputProps = InputProps;

export const BIK_LENGTH = 9;

export const bikSchema = z.string().length(BIK_LENGTH, { message: 'validation.format' });

export const BikInput = (props: BikInputProps) => (
  <Input minLength={BIK_LENGTH} maxLength={BIK_LENGTH} {...props} />
);
