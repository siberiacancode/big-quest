import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useDebounceCallback } from 'usehooks-ts';

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
  const debouncedSetLocationSearch = useDebounceCallback(setLocationSearch, 600);

  const getDadata = useGetDadataQuery({
    config: { params: { address: locationSearch } },
    options: { enabled: locationSearch.length > 3 }
  });

  const postOrganizationRegister = usePostOrganizationRegisterMutation();

  const onSubmit = registerOrganizationForm.handleSubmit(async (values) => {
    await postOrganizationRegister.mutateAsync(values);

    // ? может label close вынести глобально
    toast.success(intl.formatMessage({ id: 'feature.registerOrganization.success' }), {
      cancel: { label: 'Close' }
    });

    onSuccessSubmit();
  });

  return {
    state: {
      locations: getDadata.data,
      locationsLoading: getDadata.isLoading,
      registerLoading: postOrganizationRegister.isPending
    },
    form: registerOrganizationForm,
    functions: { onSubmit, debouncedSetLocationSearch }
  };
};
