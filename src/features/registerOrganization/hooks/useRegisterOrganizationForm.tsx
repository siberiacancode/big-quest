'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useDebouncedCallback } from 'use-debounce';

import { useGetDadataQuery, usePostOrganizationRegisterMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import {
  type RegisterOrganizationSchema,
  registerOrganizationSchema
} from '../constants/registerOrganizationSchema';

interface UseRegisterOrganizationFormParams {
  onSuccessSubmit: () => void;
}

export const useRegisterOrganizationForm = ({
  onSuccessSubmit
}: UseRegisterOrganizationFormParams) => {
  const intl = useI18n();

  const registerOrganizationForm = useForm<RegisterOrganizationSchema>({
    resolver: zodResolver(registerOrganizationSchema),
    defaultValues: {
      organization: '',
      location: '',
      type: 'PARTNER',
      contactName: '',
      phone: ''
    }
  });

  const [locationSearch, setLocationSearch] = React.useState('');
  const debouncedSetLocationSearch = useDebouncedCallback(setLocationSearch, 350);

  const getDadata = useGetDadataQuery({
    config: { params: { address: locationSearch } },
    options: { enabled: !!locationSearch.length }
  });

  const postOrganizationRegister = usePostOrganizationRegisterMutation({
    options: {
      onSuccess: () => {
        // ? может этот label: 'close' вынести глобально, он же везде будет
        toast.success(intl.formatMessage({ id: 'feature.registerOrganization.success' }), {
          cancel: { label: 'Close' }
        });

        onSuccessSubmit();
      }
    }
  });

  const onSubmit = registerOrganizationForm.handleSubmit((values) =>
    postOrganizationRegister.mutateAsync(values)
  );

  return {
    state: {
      locations: getDadata.data,
      locationsLoading: getDadata.isPending,
      registerLoading: postOrganizationRegister.isPending
    },
    form: registerOrganizationForm,
    functions: { onSubmit, debouncedSetLocationSearch }
  };
};
