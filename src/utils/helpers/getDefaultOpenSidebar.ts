import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

export const getDefaultOpenSidebar = () => {
  const defaultOpen = cookies().get(COOKIES.SIDEBAR)?.value;

  return defaultOpen ? defaultOpen === 'true' : true;
};
