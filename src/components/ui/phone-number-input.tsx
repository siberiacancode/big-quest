import type { PatternFormatProps } from 'react-number-format';

import { PatternFormatInput } from './pattern-format-input';

type PhoneNumberInputProps = Omit<PatternFormatProps, 'format'>;

export const PhoneNumberInput = (props: PhoneNumberInputProps) => (
  <PatternFormatInput {...props} format='+7 (###) ###-##-##' placeholder='+7 (999) 999-99-99' />
);
