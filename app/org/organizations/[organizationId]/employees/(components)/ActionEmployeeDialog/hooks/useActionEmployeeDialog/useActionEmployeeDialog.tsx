import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { EmployeeActionType } from '../../constants/types';

interface UseActionEmployeeDialogParams {
  actionType: EmployeeActionType;
}

export const useActionEmployeeDialog = ({ actionType }: UseActionEmployeeDialogParams) => {
  const i18n = useI18n();
  const [open, setOpen] = React.useState(false);

  const onAction = () => {
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

  return { state: { open }, functions: { setOpen, onAction } };
};
