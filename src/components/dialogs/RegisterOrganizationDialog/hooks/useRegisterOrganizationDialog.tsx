import React from 'react';

export const useRegisterOrganizationDialog = () => {
  const [open, setOpen] = React.useState(false);

  const onSuccessSubmit = () => {
    setOpen(false);
    // TODO может будет редирект
  };

  return { state: { open }, functions: { setOpen, onSuccessSubmit } };
};
