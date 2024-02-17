import React from 'react';

export const useEditOrganizationProfileDialog = () => {
  const [open, setOpen] = React.useState(false);

  const onEdited = () => setOpen(false);

  return { state: { open }, functions: { setOpen, onEdited } };
};
