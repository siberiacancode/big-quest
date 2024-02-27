import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { usePostOrganizationAddUserMutation } from '@/utils/api/hooks/usePostOrganizationAddUserMutation';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseAddEmployeeFormParams {
  onAdded: () => void;
}

export const useAddEmployeeForm = ({ onAdded }: UseAddEmployeeFormParams) => {
  const params = useParams<{ organizationId: string }>();

  const addEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      image: undefined,
      role: '',
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  });

  const postOrganizationAddEmployee = usePostOrganizationAddUserMutation();

  const onSubmit = addEmployeeForm.handleSubmit(async (values) => {
    await postOrganizationAddEmployee.mutateAsync({
      params: { ...values, organizationId: params.organizationId }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: false
    },
    form: addEmployeeForm,
    functions: { onSubmit }
  };
};
