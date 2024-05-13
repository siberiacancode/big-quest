import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useI18n, useUser } from '@/utils/contexts';

export const useOrganizationHeader = () => {
  const i18n = useI18n();
  const router = useRouter();
  const { user } = useUser();
  const [editEmployeeDialogOpen, setEditEmployeeDialogOpen] = React.useState(false);
  const [editQRScannerDialogOpen, setEditQRScannerDialogOpen] = React.useState(false);
  const [isEditPending, startEditTransition] = React.useTransition();

  const onEditPartner = () => {
    toast.success(i18n.formatMessage({ id: 'toast.editEmployee' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

    setEditEmployeeDialogOpen(false);
    startEditTransition(() => router.refresh());
  };
  const onEditPartnerClick = () => setEditEmployeeDialogOpen(true);
  const onEditPartnerCloseClick = () => setEditEmployeeDialogOpen(false);

  const onEditQRScannerClick = () => setEditQRScannerDialogOpen(true);
  const onEditQRScannerCloseClick = () => setEditQRScannerDialogOpen(false);

  return {
    state: {
      partner: user,
      editEmployeeDialogOpen,
      editQRScannerDialogOpen,
      isLoading: isEditPending
    },
    functions: {
      onEditPartnerClick,
      onEditQRScannerClick,
      onEditPartnerCloseClick,
      onEditQRScannerCloseClick,
      onEditPartner
    }
  };
};
