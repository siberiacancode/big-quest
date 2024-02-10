import { NumberFormatInput } from './number-format-input';

const ClockFormat = (val) => {
  if (val === '') return '';
  let hours = val.substring(0, 2);
  let minutes = val.substring(2, 4);

  if (hours.length === 1 && hours[0] > 2) {
    hours = `0${hours[0]}`;
  } else if (hours.length === 2) {
    if (Number(hours) === 0) {
      hours = `00`;
    } else if (Number(hours) > 23) {
      hours = '23';
    }
  }

  if (minutes.length === 1 && minutes[0] > 5) {
    minutes = `0${minutes[0]}`;
  } else if (minutes.length === 2) {
    if (Number(minutes) === 0) {
      minutes = `00`;
    } else if (Number(minutes) > 59) {
      minutes = '59';
    }
  }

  return `${hours}:${minutes}`;
};

export const ClockInput = (props) => {
  return <NumberFormatInput {...props} format={ClockFormat} />;
};
