import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { ActivityActionType } from '../constants/types';

export const useActivityDialog = ({ actionType: externalActionType, activity }) => {
  const i18n = useI18n();
  const [open, setOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<ActivityActionType>(externalActionType);

  const onOpenChange = () => {
    setOpen(!open);
    if (externalActionType === 'info') {
      setActionType('info');
    }
  };

  const getActivityByIdResponse = activity;

  const onAction = () => {
    if (actionType === 'add') {
      toast(i18n.formatMessage({ id: 'dialog.addActivity.success' }), {
        cancel: { label: 'Close' }
      });
    }

    if (actionType === 'edit') {
      toast(i18n.formatMessage({ id: 'dialog.editActivity.success' }), {
        cancel: { label: 'Close' }
      });
    }
    setOpen(false);
  };

  return {
    state: { open, actionType, activity: getActivityByIdResponse },
    functions: { setOpen, onOpenChange, setActionType, onAction }
  };
};
