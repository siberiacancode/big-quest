import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

import { isSSR } from './isSSR';

export const getAnyCookie = (key: string) => (isSSR ? cookies().get(key)?.value : getCookie(key));
