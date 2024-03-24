import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const useHeader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = React.useState(false);

  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (isOpen) onBurgerClick();
  }, [pathname, searchParams]);

  return [isOpen, onBurgerClick] as const;
};
