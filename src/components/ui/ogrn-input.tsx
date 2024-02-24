import * as z from 'zod';

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
  <Input minLength={OGRN_MIN_LENGTH} maxLength={OGRN_MAX_LENGTH} {...props} />
);
