import React from 'react';

export const useAddActivityDropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return { state: { isOpen }, functions: { setIsOpen } };
};
