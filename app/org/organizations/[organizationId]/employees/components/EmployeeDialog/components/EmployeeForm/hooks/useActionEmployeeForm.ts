import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import { usePostOrganizationActionEmployeeMutation } from '@/utils/api/hooks/usePostOrganizationActionEmployeeMutation';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: 'add' | 'edit';
}

export const useActionEmployeeForm = ({ onAction, actionType }: UseActionEmployeeFormParams) => {
  const params = useParams<{ organizationId: string }>();
  const router = useRouter();
  const actionEmployeeForm = useForm<EmployeeSchema>({
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

  const onSubmit = actionEmployeeForm.handleSubmit(async (values) => {
    const postOrganizationActionEmployeeParams = {
      params: { ...values, organizationId: params.organizationId },
      action: actionType
    };
    await postOrganizationActionEmployee.mutateAsync(postOrganizationActionEmployeeParams);
    onAction();
    router.refresh();
  });

  return {
    state: {
      isLoading: false
    },
    form: actionEmployeeForm,
    functions: { onSubmit }
  };
};
