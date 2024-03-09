import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

export const getUserSession = () => {
  const userSessionCookie = cookies().get(COOKIES.USER_SESSION);
  return userSessionCookie?.value ? JSON.parse(userSessionCookie.value) : null;
};
