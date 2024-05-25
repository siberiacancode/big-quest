import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useCopyToClipboard } from 'usehooks-ts';

import { useI18n } from '@/utils/contexts';

import type { UserData } from '../../../(constants)/types';
import type { ProfileEditSchema } from '../constants/profileEditScheme';
import { profileEditSchema } from '../constants/profileEditScheme';

interface UseProfileEditFormParams {
  user: UserData;
}

export const useProfileEditForm = ({ user }: UseProfileEditFormParams) => {
  const i18n = useI18n();
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [copiedText, copy] = useCopyToClipboard();

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

  const onCopy = (value: string) => {
    copy(value);
    toast.success(i18n.formatMessage({ id: 'toast.userIdCopied' }, { value: copiedText }));
  };

  const onSubmit = profileEditForm.handleSubmit(async (values) => {
    await console.log(values);
  });

  return {
    state: {
      isLoading: false,
      fileInputRef
    },
    form: profileEditForm,
    functions: { onSubmit, onFileChange, onCopy }
  };
};
