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

  // TODO получение списка населенных пунктов
  const locations = [
    { value: 'Новосибирск', label: 'Новосибирск' },
    { value: 'Томск', label: 'Томск' }
  ];

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

  const onLocationSearchChange = (search: string) => {
    // TODO запрос на список населенных пунктов
    console.log(search);
  };

  return {
    state: { locations },
    form: registerOrganizationForm,
    functions: { onSubmit, onLocationSearchChange }
  };
};
