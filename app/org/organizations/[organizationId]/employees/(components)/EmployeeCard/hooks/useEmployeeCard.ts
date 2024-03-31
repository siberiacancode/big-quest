import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  useDeleteOrganizationDeleteEmployeeMutation,
  useGetAuthNewCodeMutation
} from '@/utils/api/hooks';
import { useI18n } from '@/utils/contexts';

import type { EmployeeData } from '../../../(constants)/types';

export const useEmployeeCard = (employee: EmployeeData) => {
  const i18n = useI18n();
  const router = useRouter();

  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);

  const getAuthNewCodeMutation = useGetAuthNewCodeMutation();
  const deleteOrganizationDeleteEmployeeMutation = useDeleteOrganizationDeleteEmployeeMutation();

  const onAlertDeleteClick = async () => {
    await deleteOrganizationDeleteEmployeeMutation.mutateAsync({ params: { id: employee.id } });
    toast.success(i18n.formatMessage({ id: 'toast.deleted' }, { name: employee.name }));
    setDeleteAlertOpen(false);
    router.refresh();
  };

  const onSendConfirmationClick = async () => {
    await getAuthNewCodeMutation.mutateAsync({ params: { email: employee.email } });
    toast.success(i18n.formatMessage({ id: 'toast.sendConfirmation' }, { email: employee.email }));
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  const onDeleteClick = () => setDeleteAlertOpen(true);
  const onDeleteCloseClick = () => setDeleteAlertOpen(false);

  return {
    state: {
      editDialogOpen,
      deleteAlertOpen,
      isLoading:
        getAuthNewCodeMutation.isPending || deleteOrganizationDeleteEmployeeMutation.isPending
    },
    functions: {
      onSendConfirmationClick,
      onDeleteClick,
      onEditClick,
      onEditCloseClick,
      onAlertDeleteClick,
      onDeleteCloseClick
    }
  };
};
