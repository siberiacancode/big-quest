import React from 'react';

export const useRegisterOrganizationDialog = () => {
  const [open, setOpen] = React.useState(false);

  const onRegistered = () => setOpen(false);

  return { state: { open }, functions: { setOpen, onRegistered } };
};
