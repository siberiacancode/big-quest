import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const getDevice = () => {
  const { get } = headers();
  const userAgent = get('user-agent') || '';

  return new UAParser(userAgent).getDevice();
};
