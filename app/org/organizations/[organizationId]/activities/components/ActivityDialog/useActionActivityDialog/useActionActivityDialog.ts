import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useActionActivityDialog = () => {
  const [open, setOpen] = React.useState(false);
  const i18n = useI18n();

  const onAdded = () => {
    toast(i18n.formatMessage({ id: 'dialog.addActivity.success' }), {
      cancel: { label: 'Close' }
    });
    setOpen(false);
  };

  return { state: { open }, functions: { setOpen, onAdded } };
};
