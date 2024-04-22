import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { UserData } from '../../../(constants)/types';
import { type ProfileEditSchema, profileEditSchema } from '../constants/profileEditScheme';

interface UseProfileEditFormParams {
  user?: UserData;
}

export const useProfileEditForm = ({ user }: UseProfileEditFormParams) => {
  const [showPreview, setShowPreview] = React.useState(true);
  const onDeletePreviewClick = () => setShowPreview(false);

  const actionEmployeeForm = useForm<ProfileEditSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      name: user?.name ?? '',
      surname: user?.surname ?? '',
      birthdate: user?.birthdate ?? '',
      userID: user?.userID ?? '',
      file: undefined
    }
  });

  //   const organizationActionEmployeeMutation = useOrganizationActionEmployeeMutation();

  const onSubmit = actionEmployeeForm.handleSubmit(async (values) => {
    await console.log(values);
    // const requestParams = {
    //   ...values,
    //   legalEntityId: params.organizationId
    // };
    // if (actionType === 'add') {
    //   const postOrganizationActionEmployeeParams = {
    //     params: requestParams,
    //     action: actionType
    //   } as const;
    //   await organizationActionEmployeeMutation.mutateAsync(postOrganizationActionEmployeeParams);
    //   toast.success(i18n.formatMessage({ id: 'toast.addEmployee' }), {
    //     cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    //   });
    // }
    // if (actionType === 'edit') {
    //   const { file, ...restRequestParams } = requestParams;
    //   const postOrganizationActionEmployeeParams = {
    //     params: {
    //       ...restRequestParams,
    //       ...(file && { file }),
    //       userId: employee!.id
    //     },
    //     action: actionType
    //   } as const;
    //   await organizationActionEmployeeMutation.mutateAsync(postOrganizationActionEmployeeParams);
    //   toast.success(i18n.formatMessage({ id: 'toast.editEmployee' }), {
    //     cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    //   });
    // }
    // onAction();
  });

  return {
    state: {
      showPreview,
      isLoading: false
    },
    form: actionEmployeeForm,
    functions: { onSubmit, onDeletePreviewClick }
  };
};
