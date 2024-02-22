import React from 'react';

export const useEmployeeDialog = () => {
  const [open, setOpen] = React.useState(false);

  const onAdded = () => setOpen(false);

  return { state: { open }, functions: { setOpen, onAdded } };
};
