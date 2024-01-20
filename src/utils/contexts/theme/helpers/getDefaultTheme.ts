'use server';

import { COOKIES } from '@/utils/constants';
import { getAnyCookie } from '@/utils/helpers';

import type { Theme } from '../ThemeContext';

export const getDefaultTheme = () => (getAnyCookie(COOKIES.THEME) as Theme) ?? 'dark';
