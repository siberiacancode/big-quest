import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useI18n, useUser } from '@/utils/contexts';

export const useOrganizationHeader = () => {
  const i18n = useI18n();
  const router = useRouter();
  const { user } = useUser();
  const [editEmployeeDialogOpen, setEditEmployeeDialogOpen] = React.useState(false);
  const [editQrScannerDialogOpen, setEditQrScannerDialogOpen] = React.useState(false);
  console.log(user);
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

  const onEditQrScannerClick = () => setEditQrScannerDialogOpen(true);
  const onEditQrScannerCloseClick = () => setEditQrScannerDialogOpen(false);

  return {
    state: {
      partner: { ...user, phone: '79138888888', password: 'password' },
      editEmployeeDialogOpen,
      editQrScannerDialogOpen,
      isLoading: isEditPending
    },
    functions: {
      onEditPartnerClick,
      onEditQrScannerClick,
      onEditPartnerCloseClick,
      onEditQrScannerCloseClick,
      onEditPartner
    }
  };
};
