import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useEditOrganizationProfileDialog = () => {
  const intl = useI18n();
  const [open, setOpen] = React.useState(false);

  const onEdited = () => {
    setOpen(false);

    toast(intl.formatMessage({ id: 'dialog.editOrganizationProfile.success' }), {
      cancel: { label: 'Close' }
    });
  };

  return { state: { open }, functions: { setOpen, onEdited } };
};
