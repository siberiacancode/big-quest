import * as z from 'zod';

import type { InputProps } from './input';
import { Input } from './input';

export type KppInputProps = InputProps;

export const KPP_LENGTH = 9;

export const kppSchema = z.string().length(KPP_LENGTH, { message: 'validation.format' });

export const KppInput = (props: KppInputProps) => (
  <Input minLength={KPP_LENGTH} maxLength={KPP_LENGTH} {...props} />
);
