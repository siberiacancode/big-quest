import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

export const getDefaultTheme = () => (cookies().get(COOKIES.THEME)?.value as Theme) ?? 'light';
