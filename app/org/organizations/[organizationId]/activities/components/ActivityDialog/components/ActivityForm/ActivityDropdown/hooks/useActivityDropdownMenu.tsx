import React from 'react';

export const useActivityDropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return { state: { isOpen }, functions: { setIsOpen } };
};
