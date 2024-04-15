import type { NumberFormatInputProps } from './number-format-input';
import { NumberFormatInput } from './number-format-input';

const clockFormat = (value: string) => {
  if (!value) return '00:00';
  const [h1 = 0, h2 = 0] = value.substring(0, 2);
  const [m1 = 0, m2 = 0] = value.substring(2, 4);

  let hours = `${h1}${h2}`;
  let minutes = `${m1}${m2}`;

  if (!h2 && Number(h1) > 2) {
    hours = `0${h1}`;
  } else if (h1 && h2) {
    if (Number(hours) === 0) {
      hours = '00';
    } else if (Number(hours) > 23) {
      hours = '23';
    }
  }

  if (!m2 && Number(m1) > 5) {
    minutes = `0${m1}`;
  } else if (minutes.length === 2) {
    if (Number(minutes) === 0) {
      minutes = '00';
    } else if (Number(minutes) > 59) {
      minutes = '59';
    }
  }

  return `${hours}:${minutes}`;
};

export type ClockInputProps = Omit<NumberFormatInputProps, 'format'>;

export const ClockInput = (props: ClockInputProps) => (
  <NumberFormatInput {...props} format={clockFormat} />
);
