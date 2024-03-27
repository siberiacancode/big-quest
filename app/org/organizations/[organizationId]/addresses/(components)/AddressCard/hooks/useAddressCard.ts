import React from 'react';
import { useRouter } from 'next/navigation';

// import { toast } from 'sonner';
import { useI18n } from '@/utils/contexts';

import type { AddressData } from '../../../(constants)/types';

export const useAddressCard = (address: AddressData) => {
  const i18n = useI18n();
  const router = useRouter();
  console.log('@', address, i18n, router);

  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);

  //   const deleteOrganizationDeleteEmployeeMutation = useDeleteOrganizationDeleteEmployeeMutation();

  const onAlertDeleteClick = async () => {
    //   await deleteOrganizationDeleteEmployeeMutation.mutateAsync({ params: { id: employee.id } });
    //   toast.success(
    //     i18n.formatMessage({ id: 'employeeCard.toast.deleted' }, { name: employee.name })
    //   );
    //   setDeleteAlertOpen(false);
    //   router.refresh();
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  const onDeleteClick = () => setDeleteAlertOpen(true);
  const onDeleteCloseClick = () => setDeleteAlertOpen(false);

  return {
    state: { editDialogOpen, deleteAlertOpen },
    functions: {
      onDeleteClick,
      onEditClick,
      onEditCloseClick,
      onAlertDeleteClick,
      onDeleteCloseClick
    }
  };
};
