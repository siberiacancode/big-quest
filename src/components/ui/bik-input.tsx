import * as z from 'zod';

import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

export type BikInputProps = NumberFormatInputProps;

export const BIK_LENGTH = 9;

export const bikSchema = z.string().length(BIK_LENGTH, { message: 'validation.bik.format' });

export const BikInput = (props: BikInputProps) => (
  <NumberFormatInput minLength={BIK_LENGTH} maxLength={BIK_LENGTH} {...props} />
);
