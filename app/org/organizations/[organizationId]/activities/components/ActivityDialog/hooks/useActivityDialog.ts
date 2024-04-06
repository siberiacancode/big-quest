import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { ActivityActionType } from '../../../constants/types';

interface UseActivityDialogProps {
  actionType: ActivityActionType;
}

export const useActivityDialog = ({ actionType: externalActionType }: UseActivityDialogProps) => {
  const i18n = useI18n();
  const [open, setOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<ActivityActionType>(externalActionType);

  const onOpenChange = () => {
    setOpen(!open);
    if (externalActionType === 'info') {
      setActionType('info');
    }
  };

  const onAction = () => {
    if (actionType === 'add') {
      toast(i18n.formatMessage({ id: 'dialog.addActivity.success' }), {
        cancel: { label: 'Close' }
      });

      setOpen(false);
    }

    if (actionType === 'edit') {
      toast(i18n.formatMessage({ id: 'dialog.editActivity.success' }), {
        cancel: { label: 'Close' }
      });
    }
  };

  return {
    state: { open, actionType },
    functions: { setOpen, onOpenChange, onEdit: setActionType, onAction }
  };
};
