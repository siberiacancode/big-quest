import { NumberFormatBase, type NumberFormatBaseProps } from 'react-number-format';

import { Input } from './input';

export type NumberFormatInputProps = NumberFormatBaseProps;

export const NumberFormatInput = (props: NumberFormatInputProps) => (
  <NumberFormatBase {...props} customInput={Input} />
);
