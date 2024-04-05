import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { ActivityActionType, ExtendedActivityProps } from '../../../constants/types';

interface UseActivityDialogProps {
  actionType: ActivityActionType;
  activity?: ExtendedActivityProps;
}

export const useActivityDialog = ({
  actionType: externalActionType,
  activity
}: UseActivityDialogProps) => {
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
    state: { open, actionType, activity },
    functions: { setOpen, onOpenChange, onEdit: setActionType, onAction }
  };
};
