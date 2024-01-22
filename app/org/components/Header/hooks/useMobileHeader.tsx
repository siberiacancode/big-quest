import React from 'react';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

export const useMobileHeader = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  // TODO здесь будет роль лежать
  // const { user } = useUserContext()
  const navigationLinks = getNavigationLinksByUserRole('organizer');

  const onBurgerClick = () => {
    document.body.classList.toggle('overflow-hidden');
    setBurgerOpen((prev) => !prev);
  };

  return {
    state: { burgerOpen, navigationLinks },
    functions: { onBurgerClick }
  };
};
