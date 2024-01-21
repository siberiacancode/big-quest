'use server';

import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export const checkMobileDevice = () => {
  const headersList = headers();
  const agent = userAgent({ headers: headersList });

  return agent.device.type === 'mobile';
};
