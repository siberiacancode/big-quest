import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { UserData } from '../../../(constants)/types';
import { type ProfileEditSchema, profileEditSchema } from '../constants/profileEditScheme';

interface UseProfileEditFormParams {
  user: UserData;
}

export const useProfileEditForm = ({ user }: UseProfileEditFormParams) => {
  const [showPreview, setShowPreview] = React.useState(true);
  const onDeletePreviewClick = () => setShowPreview(false);

  const profileEditForm = useForm<ProfileEditSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      name: user.name,
      surname: user.surname,
      birthdate: new Date(user.birthdate),
      userId: user.userId,
      file: undefined
    }
  });

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      profileEditForm.setValue('file', event.target.files[0]);
    }
  };

  const onSubmit = profileEditForm.handleSubmit(async (values) => {
    await console.log(values);
  });

  return {
    state: {
      showPreview,
      isLoading: false
    },
    form: profileEditForm,
    functions: { onSubmit, onDeletePreviewClick, onFileChange }
  };
};
