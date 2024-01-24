import { cookies } from 'next/headers';

import { COOKIES } from '@/utils/constants';

export const getDefaultOpenSidebar = () => {
  const defaultOpen = cookies().get(COOKIES.OPEN_SIDEBAR)?.value;

  return defaultOpen ? defaultOpen === 'true' : true;
};
