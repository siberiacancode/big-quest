import type { PatternFormatProps } from 'react-number-format';
import * as z from 'zod';

import { PatternFormatInput } from './pattern-format-input';

export type CheckingAccountInputProps = Omit<PatternFormatProps, 'format'>;

export const CHECKING_ACCOUNT_LENGTH = 25;

export const checkingAccountSchema = z
  .string()
  .length(CHECKING_ACCOUNT_LENGTH, { message: 'validation.format' });

export const CheckingAccountInput = (props: CheckingAccountInputProps) => (
  <PatternFormatInput
    format='###.##.###.#.####.#######'
    placeholder='111.22.333.4.5555.6666666'
    {...props}
  />
);
