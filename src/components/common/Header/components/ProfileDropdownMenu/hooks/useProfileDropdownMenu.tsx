import React from 'react';

export const useProfileDropdownMenu = () => {
  const [open, setOpen] = React.useState(false);
  // TODO
  // const { user } = useUserContext();

  return { state: { open }, functions: { setOpen } };
};
