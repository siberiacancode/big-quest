import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { usePostOrganizationActionEmployeeMutation } from '@/utils/api/hooks/usePostOrganizationActionEmployeeMutation';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseActionEmployeeFormParams {
  onAdded: () => void;
  actionType: 'add' | 'edit';
}

export const useActionEmployeeForm = ({ onAdded, actionType }: UseActionEmployeeFormParams) => {
  const params = useParams<{ organizationId: string }>();
  const addEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      // image: undefined,
      role: '',
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  });

  const postOrganizationActionEmployee = usePostOrganizationActionEmployeeMutation();

  const onSubmit = addEmployeeForm.handleSubmit(async (values) => {
    const mutationParams = {
      params: { ...values, organizationId: params.organizationId },
      action: actionType
    };
    await postOrganizationActionEmployee.mutateAsync(mutationParams);
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
