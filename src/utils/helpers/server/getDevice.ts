import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const getDevice = () => {
  const { get } = headers();
  const userAgent = get('user-agent') || '';

  const device = new UAParser(userAgent).getDevice();
  const isMobile = device.type === 'mobile';

  return { ...device, isMobile };
};
