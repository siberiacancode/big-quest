import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useActionActivityDialog = ({ actionType }) => {
  const intl = useI18n();
  const [open, setOpen] = React.useState(false);

  const onAction = () => {
    if (actionType === 'add') {
      toast(intl.formatMessage({ id: 'dialog.addActivity.success' }), {
        cancel: { label: 'Close' }
      });
    }

    if (actionType === 'edit') {
      toast(intl.formatMessage({ id: 'dialog.editActivity.success' }), {
        cancel: { label: 'Close' }
      });
    }

    setOpen(false);
  };

  return { state: { open }, functions: { setOpen, onAction } };
};
