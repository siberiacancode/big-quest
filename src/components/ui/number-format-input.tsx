import { NumberFormatBase, type NumberFormatBaseProps } from 'react-number-format';

import { Input } from './input';

interface NumberFormatInputProps extends NumberFormatBaseProps {}

export const NumberFormatInput = (props: NumberFormatInputProps) => (
  <NumberFormatBase {...props} customInput={Input} />
);
