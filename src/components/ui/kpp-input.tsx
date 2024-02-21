import * as z from 'zod';

import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

export type KppInputProps = NumberFormatInputProps;

export const KPP_LENGTH = 9;

export const kppSchema = z.string().length(KPP_LENGTH, { message: 'validation.kpp.format' });

export const KppInput = (props: KppInputProps) => (
  <NumberFormatInput minLength={KPP_LENGTH} maxLength={KPP_LENGTH} {...props} />
);
