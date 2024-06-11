'use server';

import { redirect } from 'next/navigation';

import { ROUTES } from '@/utils/constants';

// eslint-disable-next-line @typescript-eslint/require-await
export const redirectToProfileAction = async () => redirect(ROUTES.APP.PROFILE.ROOT);
