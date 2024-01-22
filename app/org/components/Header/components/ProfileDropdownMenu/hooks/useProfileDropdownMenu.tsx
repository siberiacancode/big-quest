import React from 'react';

export const useProfileDropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // TODO
  // const { user } = useUserContext();

  return { state: { isOpen }, functions: { setIsOpen } };
};
