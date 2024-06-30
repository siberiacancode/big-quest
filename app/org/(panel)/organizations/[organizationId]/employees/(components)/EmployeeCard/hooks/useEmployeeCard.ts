import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useDeleteEmployeeMutation, useGetAuthNewCodeMutation } from '@/utils/api/hooks';
import { useI18n } from '@/utils/contexts';

import type { EmployeeData } from '../../../(constants)/types';

export const useEmployeeCard = (employee: EmployeeData) => {
  const i18n = useI18n();
  const router = useRouter();

  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);
  const [isDeletePending, startDeleteTransition] = React.useTransition();
  const [isEditPending, startEditTransition] = React.useTransition();

  const getAuthNewCodeMutation = useGetAuthNewCodeMutation();
  const deleteEmployeeMutation = useDeleteEmployeeMutation();

  const onAlertDeleteClick = async () => {
    if (employee?.id) {
      await deleteEmployeeMutation.mutateAsync({ params: { id: employee?.id } });
      toast.success(
        i18n.formatMessage({ id: 'toast.employeeDeleted' }, { name: employee.firstName })
      );
      setDeleteAlertOpen(false);
      startDeleteTransition(() => router.refresh());
    }
  };

  const onSendConfirmationClick = async () => {
    await getAuthNewCodeMutation.mutateAsync({ params: { email: employee.email } });
    toast.success(i18n.formatMessage({ id: 'toast.sendConfirmation' }, { email: employee.email }));
  };

  const onEdit = () => {
    toast.success(i18n.formatMessage({ id: 'toast.editEmployee' }), {
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
      isLoading:
        getAuthNewCodeMutation.isPending ||
        deleteEmployeeMutation.isPending ||
        isDeletePending ||
        isEditPending
    },
    functions: {
      onEdit,
      onSendConfirmationClick,
      onDeleteClick,
      onEditClick,
      onEditCloseClick,
      onAlertDeleteClick,
      onDeleteCloseClick
    }
  };
};
