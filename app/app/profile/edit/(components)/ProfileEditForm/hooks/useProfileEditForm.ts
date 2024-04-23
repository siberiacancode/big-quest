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

  const onSubmit = actionEmployeeForm.handleSubmit(async () => {});

  return {
    state: {
      showPreview,
      isLoading: false
    },
    form: actionEmployeeForm,
    functions: { onSubmit, onDeletePreviewClick }
  };
};
