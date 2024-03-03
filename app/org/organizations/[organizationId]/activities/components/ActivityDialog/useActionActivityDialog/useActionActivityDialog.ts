import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useActionActivityDialog = ({ actionType }) => {
  const [open, setOpen] = React.useState(false);
  const i18n = useI18n();

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

  return { state: { open }, functions: { setOpen, onAction } };
};
