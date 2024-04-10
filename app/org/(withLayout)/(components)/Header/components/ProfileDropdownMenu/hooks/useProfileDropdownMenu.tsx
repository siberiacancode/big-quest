import React from 'react';

import { useUser } from '@/utils/contexts';

export const useProfileDropdownMenu = () => {
  const { user } = useUser();

  const [isOpen, setIsOpen] = React.useState(false);

  return { state: { isOpen, user }, functions: { setIsOpen } };
};
