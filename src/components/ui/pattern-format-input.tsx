import type { PatternFormatProps } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

import { Input } from './input';

interface PatternFormatInputProps extends PatternFormatProps {}

export const PatternFormatInput = (props: PatternFormatInputProps) => (
  <PatternFormat {...props} customInput={Input} />
);
