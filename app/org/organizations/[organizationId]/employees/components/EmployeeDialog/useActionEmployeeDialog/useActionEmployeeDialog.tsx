import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

interface UseActionEmployeeDialogProps {
  actionType: 'add' | 'edit';
}

export const useActionEmployeeDialog = ({ actionType }: UseActionEmployeeDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const i18n = useI18n();

  const onAdded = () => {
    if (actionType === 'add') {
      toast(i18n.formatMessage({ id: 'dialog.addEmployee.success' }), {
        cancel: { label: 'Close' }
      });
    }

    if (actionType === 'edit') {
      toast(i18n.formatMessage({ id: 'dialog.editEmployee.success' }), {
        cancel: { label: 'Close' }
      });
    }

    setOpen(false);
  };

  return { state: { open }, functions: { setOpen, onAdded } };
};
