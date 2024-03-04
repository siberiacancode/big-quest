import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostOrganizationActionEmployeeMutation } from 'app/org/organizations/[organizationId]/employees/components/EmployeeDialog/components/EmployeeForm/hooks/usePostOrganizationActionEmployeeMutation';
import { useParams, useRouter } from 'next/navigation';

import type { EmployeeData } from '../../../../EmployeeCard/EmployeeCard';
import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: 'add' | 'edit';
  employee?: EmployeeData;
}

export const useActionEmployeeForm = ({
  onAction,
  actionType,
  employee
}: UseActionEmployeeFormParams) => {
  const params = useParams<{ organizationId: string }>();
  const router = useRouter();

  const emptyData = {
    // image: undefined,
    role: '',
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  const defaultValues = employee ?? emptyData;

  const actionEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(employeeSchema),
    defaultValues
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
