import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePostOrganizationRegisterMutation } from '@/utils/api';

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
    options: { onSuccess: () => onSuccessSubmit() }
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
