import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useEditOrganizationTariffDialog = () => {
  const i18n = useI18n();
  const [open, setOpen] = React.useState(false);

  const onEdited = () => {
    setOpen(false);

    toast(i18n.formatMessage({ id: 'dialog.editOrganizationTariff.success' }), {
      cancel: { label: 'Close' }
    });
  };

  return { state: { open }, functions: { setOpen, onEdited } };
};
