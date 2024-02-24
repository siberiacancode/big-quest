import * as z from 'zod';

import type { InputProps } from './input';
import { Input } from './input';

export type CheckingAccountInputProps = InputProps;

export const CHECKING_ACCOUNT_LENGTH = 20;

export const checkingAccountSchema = z
  .string()
  .length(CHECKING_ACCOUNT_LENGTH, { message: 'validation.format' });

export const CheckingAccountInput = (props: CheckingAccountInputProps) => (
  <Input minLength={CHECKING_ACCOUNT_LENGTH} maxLength={CHECKING_ACCOUNT_LENGTH} {...props} />
);
