import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

export const useActivityCard = () => {
  const i18n = useI18n();
  const router = useRouter();

  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [isEditPending, startEditTransition] = React.useTransition();

  const onEdit = () => {
    toast.success(i18n.formatMessage({ id: 'toast.editAddress' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

    setEditDialogOpen(false);
    startEditTransition(() => router.refresh());
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  const onInfoClick = () => setInfoDialogOpen(true);
  const onInfoCloseClick = () => setInfoDialogOpen(false);

  return {
    state: {
      infoDialogOpen,
      editDialogOpen,
      isLoading: isEditPending
    },
    functions: {
      onEdit,
      onEditClick,
      onEditCloseClick,
      onInfoClick,
      onInfoCloseClick
    }
  };
};
