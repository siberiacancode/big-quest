import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { useDeleteFileByIdMutation, usePostFileMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import type { EmployeeData } from '../../../(constants)/types';
import type { EmployeeSchema } from '../constants/actionEmployeeSchema';
import { actionEmployeeSchema } from '../constants/actionEmployeeSchema';
import type { EmployeeActionType } from '../constants/types';

import { useActionEmployeeMutation } from './useActionEmployeeMutation';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: EmployeeActionType;
  employee?: EmployeeData;
}

export const useActionEmployeeForm = ({
  onAction,
  employee,
  actionType
}: UseActionEmployeeFormParams) => {
  const i18n = useI18n();
  const params = useParams<{ organizationId: string }>();

  const [avatarMedia, setAvatarMedia] = React.useState<string>();
  const [deleteFileId, setDeleteFileId] = React.useState<string>();

  const [showPreview, setShowPreview] = React.useState(actionType === 'edit' && !!employee?.avatar);

  const onDeletePreviewClick = () => {
    setShowPreview(false);
    if (actionType === 'edit' && employee?.avatar) {
      setDeleteFileId(employee?.avatar);
    }
  };

  const actionEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(actionEmployeeSchema),
    defaultValues: {
      position: employee?.position ?? 'ADMINISTRATOR',
      firstName: employee?.firstName ?? '',
      lastName: employee?.lastName ?? '',
      middleName: employee?.middleName ?? '',
      email: employee?.email ?? '',
      phone: employee?.phone.replace('+7', '') ?? '',
      file: undefined
    }
  });

  const organizationActionEmployeeMutation = useActionEmployeeMutation();
  const deleteFileByIdMutation = useDeleteFileByIdMutation();
  const postFileMutation = usePostFileMutation();

  const onSubmit = actionEmployeeForm.handleSubmit(async (values) => {
    const { file, ...restValues } = values;
    const requestParams = {
      ...restValues,
      organizationId: params.organizationId
    };

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const fileId = await postFileMutation.mutateAsync({ params: formData });

      setAvatarMedia(fileId);
    }

    if (actionType === 'add') {
      const postOrganizationActionEmployeeParams = {
        params: {
          ...requestParams,
          ...(avatarMedia && { avatar: avatarMedia })
        },
        action: actionType
      } as const;

      await organizationActionEmployeeMutation.mutateAsync(postOrganizationActionEmployeeParams);

      toast.success(i18n.formatMessage({ id: 'toast.addEmployee' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    if (actionType === 'edit' && employee?.userId) {
      const putOrganizationActionEmployeeParams = {
        params: {
          ...requestParams,
          ...(avatarMedia && { avatarMedia }),
          userId: employee?.userId,
          id: employee?.userId
        },

        action: actionType
      } as const;

      if (deleteFileId) {
        await deleteFileByIdMutation.mutateAsync({
          params: { id: deleteFileId }
        });
      }

      await organizationActionEmployeeMutation.mutateAsync(putOrganizationActionEmployeeParams);

      toast.success(i18n.formatMessage({ id: 'toast.editEmployee' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    onAction();
  });

  return {
    state: {
      showPreview,
      isLoading: organizationActionEmployeeMutation.isPending
    },
    form: actionEmployeeForm,
    functions: { onSubmit, onDeletePreviewClick }
  };
};
