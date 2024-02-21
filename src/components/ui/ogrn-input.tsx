import * as z from 'zod';

import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

export type OgrnInputProps = NumberFormatInputProps;

export const OGRN_MIN_LENGTH = 13;
export const OGRN_MAX_LENGTH = 15;

export const ogrnSchema = z
  .string()
  .min(OGRN_MIN_LENGTH, { message: 'validation.ogrn.format' })
  .max(OGRN_MAX_LENGTH, { message: 'validation.ogrn.format' });

export const OgrnInput = (props: OgrnInputProps) => (
  <NumberFormatInput minLength={OGRN_MIN_LENGTH} maxLength={OGRN_MAX_LENGTH} {...props} />
);
