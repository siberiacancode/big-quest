import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

interface UseActionEmployeeDialogParams {
  actionType: 'add' | 'edit';
}

export const useActionAddressDialog = ({ actionType }: UseActionEmployeeDialogParams) => {
  const i18n = useI18n();
  const [open, setOpen] = React.useState(false);

  const onAction = () => {
    if (actionType === 'add') {
      toast(i18n.formatMessage({ id: 'toast.addAddress' }), {
        cancel: { label: 'Close' }
      });
    }

    if (actionType === 'edit') {
      toast(i18n.formatMessage({ id: 'toast.editAddress' }), {
        cancel: { label: 'Close' }
      });
    }

    setOpen(false);
  };

  return { state: { open }, functions: { setOpen, onAction } };
};
