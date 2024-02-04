import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostOrganizationRegisterMutation } from '@/utils/api';
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

  const postOrganizationRegister = usePostOrganizationRegisterMutation();

  const onSubmit = registerOrganizationForm.handleSubmit(async (values) => {
    await postOrganizationRegister.mutateAsync(values);

    toast(intl.formatMessage({ id: 'feature.registerOrganization.success' }), {
      cancel: { label: 'Close' }
    });

    onSuccessSubmit();
  });

  return {
    state: {
      registerLoading: postOrganizationRegister.isPending
    },
    form: registerOrganizationForm,
    functions: { onSubmit }
  };
};
