import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const useMobileHeader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = React.useState(false);

  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isOpen) onBurgerClick();
  }, [pathname, searchParams]);

  return {
    state: { isOpen },
    functions: { onBurgerClick }
  };
};
