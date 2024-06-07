import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { usePostFileMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import type { EmployeeData } from '../../../(constants)/types';
import type { EmployeeSchema } from '../constants/actionEmployeeSchema';
import { actionEmployeeSchema } from '../constants/actionEmployeeSchema';
import type { EmployeeActionType } from '../constants/types';

import { useOrganizationActionEmployeeMutation } from './useOrganizationActionEmployeeMutation';

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

  const [showPreview, setShowPreview] = React.useState(actionType === 'edit' && !!employee?.image);
  const onDeletePreviewClick = () => setShowPreview(false);

  const actionEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(actionEmployeeSchema),
    defaultValues: {
      role: employee?.role ?? 'MANAGER',
      name: employee?.name ?? '',
      surname: employee?.surname ?? '',
      email: employee?.email ?? '',
      phone: employee?.phone.replace('+7', '') ?? '',
      file: undefined
    }
  });

  const organizationActionEmployeeMutation = useOrganizationActionEmployeeMutation();
  const postFileMutation = usePostFileMutation();

  const onSubmit = actionEmployeeForm.handleSubmit(async (values) => {
    const { file, ...restValues } = values;
    const requestParams = {
      ...restValues,
      legalEntityId: params.organizationId
    };

    let avatarMedia;

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const fileId = await postFileMutation.mutateAsync({ params: formData });
      avatarMedia = {
        media: [
          {
            id: { fileId },
            type: 'IMAGE',
            flag: 'AVATAR'
          }
        ]
      };
    }

    if (actionType === 'add') {
      const postOrganizationActionEmployeeParams = {
        params: {
          ...requestParams,
          ...(avatarMedia && { avatarMedia })
        },
        action: actionType
      } as const;

      await organizationActionEmployeeMutation.mutateAsync(postOrganizationActionEmployeeParams);

      toast.success(i18n.formatMessage({ id: 'toast.addEmployee' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    if (actionType === 'edit') {
      const postOrganizationActionEmployeeParams = {
        params: {
          ...requestParams,
          ...(avatarMedia && { avatarMedia }),
          userId: employee!.id
        },
        action: actionType
      } as const;

      await organizationActionEmployeeMutation.mutateAsync(postOrganizationActionEmployeeParams);

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
