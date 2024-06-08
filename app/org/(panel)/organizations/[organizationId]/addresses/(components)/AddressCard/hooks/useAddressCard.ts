import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useDeleteLegalAddressByIdMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import type { AddressData } from '../../../(constants)/types';

interface UseAddressCardParams {
  address: AddressData;
}

export const useAddressCard = ({ address }: UseAddressCardParams) => {
  const i18n = useI18n();
  const router = useRouter();

  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);
  const [isDeletePending, startDeleteTransition] = React.useTransition();
  const [isEditPending, startEditTransition] = React.useTransition();

  const deleteLegalAddressByIdMutation = useDeleteLegalAddressByIdMutation();

  const onAlertDeleteClick = async () => {
    await deleteLegalAddressByIdMutation.mutateAsync({ params: { id: address.id } });
    toast.success(
      i18n.formatMessage(
        { id: 'toast.deleted' },
        { name: `${address.locality.city} ${address.locality.street}, ${address.locality.house}` }
      ),
      {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      }
    );
    setDeleteAlertOpen(false);
    startDeleteTransition(() => router.refresh());
  };

  const onEdit = () => {
    toast.success(i18n.formatMessage({ id: 'toast.editAddress' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

    setEditDialogOpen(false);
    startEditTransition(() => router.refresh());
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  const onDeleteClick = () => setDeleteAlertOpen(true);
  const onDeleteCloseClick = () => setDeleteAlertOpen(false);

  return {
    state: {
      editDialogOpen,
      deleteAlertOpen,
      isLoading: deleteLegalAddressByIdMutation.isPending || isDeletePending || isEditPending
    },
    functions: {
      onEdit,
      onDeleteClick,
      onEditClick,
      onEditCloseClick,
      onAlertDeleteClick,
      onDeleteCloseClick
    }
  };
};
