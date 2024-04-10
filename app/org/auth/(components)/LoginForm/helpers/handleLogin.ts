'use server';

import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

// eslint-disable-next-line @typescript-eslint/require-await
export const handleLogin = async (sessionData: UserResponse) => {
  const stringifiedSessionData = JSON.stringify(sessionData);

  cookies().set(COOKIES.USER_SESSION, stringifiedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });
};
