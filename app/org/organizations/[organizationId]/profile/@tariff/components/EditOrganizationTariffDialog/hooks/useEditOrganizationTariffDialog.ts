import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useEditOrganizationTariffDialog = () => {
  const i18n = useI18n();

  const onEdited = () =>
    toast(i18n.formatMessage({ id: 'dialog.editOrganizationTariff.success' }), {
      cancel: { label: 'Close' }
    });

  return { functions: { onEdited } };
};
