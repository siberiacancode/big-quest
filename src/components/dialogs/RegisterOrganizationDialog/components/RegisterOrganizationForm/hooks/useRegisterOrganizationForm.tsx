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
  onRegistered: () => void;
}

export const useRegisterOrganizationForm = ({
  onRegistered
}: UseRegisterOrganizationFormParams) => {
  const i18n = useI18n();

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

    toast(i18n.formatMessage({ id: 'dialog.registerOrganization.success' }), {
      cancel: { label: 'Close' }
    });

    onRegistered();
  });

  return {
    state: {
      isLoading: postOrganizationRegister.isPending
    },
    form: registerOrganizationForm,
    functions: { onSubmit }
  };
};
