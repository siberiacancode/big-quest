'use server';

import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

import type { Theme } from '../ThemeContext';

export const getDefaultTheme = () => (cookies().get(COOKIES.THEME)?.value as Theme) ?? 'light';
