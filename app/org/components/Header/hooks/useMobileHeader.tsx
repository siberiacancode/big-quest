import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

export const useMobileHeader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = React.useState(false);
  const navigationLinks = getNavigationLinksByUserRole('organizer');

  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsOpen((prev) => !prev);
  };

  // ? достаточно странно, но в доке так
  React.useEffect(() => {
    if (isOpen) onBurgerClick();
  }, [pathname, searchParams]);

  return {
    state: { isOpen, navigationLinks },
    functions: { onBurgerClick }
  };
};
