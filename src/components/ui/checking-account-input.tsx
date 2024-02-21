import * as z from 'zod';

import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

export type CheckingAccountInputProps = NumberFormatInputProps;

export const CHECKING_ACCOUNT_LENGTH = 20;

export const checkingAccountSchema = z
  .string()
  .length(CHECKING_ACCOUNT_LENGTH, { message: 'validation.checkingAccount.format' });

export const CheckingAccountInput = (props: CheckingAccountInputProps) => (
  <NumberFormatInput
    minLength={CHECKING_ACCOUNT_LENGTH}
    maxLength={CHECKING_ACCOUNT_LENGTH}
    {...props}
  />
);
