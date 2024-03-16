'use server';

import { cookies } from 'next/headers';

import { COOKIES } from '../../constants';
import { TOKENS_TIMER_EXPIRATION } from '../constants/time';

import { createTokensTimer } from './createTokensTimer';

// eslint-disable-next-line @typescript-eslint/require-await
export async function handleLogin(sessionData: UserResponse) {
  const tokensTimer = createTokensTimer(TOKENS_TIMER_EXPIRATION);

  const encryptedSessionData = JSON.stringify(sessionData);

  cookies().set(COOKIES.TOKENS_TIMER, tokensTimer.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });

  cookies().set(COOKIES.USER_SESSION, encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });
}
