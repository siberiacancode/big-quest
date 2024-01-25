import React from 'react';

export const useProfileDropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return { state: { isOpen }, functions: { setIsOpen } };
};
