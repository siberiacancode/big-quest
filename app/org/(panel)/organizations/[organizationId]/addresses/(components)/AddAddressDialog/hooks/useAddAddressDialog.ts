import React from 'react';
import { useRouter } from 'next/navigation';

export const useAddAddressDialog = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [isAddPending, setAddTransition] = React.useTransition();

  const onAction = () => {
    setOpen(false);
    setAddTransition(() => router.refresh());
  };

  return { state: { open, isLoading: isAddPending }, functions: { setOpen, onAction } };
};
