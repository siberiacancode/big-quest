import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

import { usePostOrganizationActionEmployeeMutation } from './usePostOrganizationActionEmployeeMutation';

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

  const postOrganizationAddEmployee = usePostOrganizationActionEmployeeMutation();

  const onSubmit = addEmployeeForm.handleSubmit(async (values) => {
    const mutationParams = {
      params: { ...values, organizationId: params.organizationId },
      actionType
    };

    // @ts-ignore
    await postOrganizationAddEmployee.mutateAsync(mutationParams);
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
