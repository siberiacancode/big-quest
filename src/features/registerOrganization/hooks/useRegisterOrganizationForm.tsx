import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePostOrganizationRegisterMutation } from '@/utils/api';

import {
  type RegisterOrganizationSchema,
  registerOrganizationSchema
} from '../constants/registerOrganizationSchema';

interface UseRegisterOrganizationFormParams {
  onFormSubmit?: () => void;
}

export const useRegisterOrganizationForm = ({
  onFormSubmit
}: UseRegisterOrganizationFormParams) => {
  const locations = [{ value: 'value', label: 'label' }];
  const registerOrganizationForm = useForm<RegisterOrganizationSchema>({
    resolver: zodResolver(registerOrganizationSchema),
    defaultValues: {
      organization: '',
      location: '',
      type: 'partner',
      contactName: '',
      phone: ''
    }
  });

  const postOrganizationRegister = usePostOrganizationRegisterMutation({
    options: { onSuccess: () => onFormSubmit?.() }
  });

  const onSubmit = registerOrganizationForm.handleSubmit((values) =>
    postOrganizationRegister.mutateAsync(values)
  );

  const onLocationSearchChange = (search: string) => {
    // TODO
    console.log(search);
  };

  return {
    state: { locations },
    form: registerOrganizationForm,
    functions: { onSubmit, onLocationSearchChange }
  };
};
