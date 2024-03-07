import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import type { EmployeeData } from '../../../../../constants/types';
import type { EmployeeActionType } from '../../../constants/types';
import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

import { usePostOrganizationActionEmployeeMutation } from './usePostOrganizationActionEmployeeMutation';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: EmployeeActionType;
  employee?: EmployeeData;
}

export const useActionEmployeeForm = ({
  onAction,
  employee,
  actionType
}: UseActionEmployeeFormParams) => {
  const params = useParams<{ organizationId: string }>();
  const router = useRouter();

  const actionEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      role: employee?.role ?? '',
      name: employee?.name ?? '',
      surname: employee?.surname ?? '',
      email: employee?.email ?? '',
      phone: employee?.phone ?? ''
    }
  });

  const postOrganizationActionEmployee = usePostOrganizationActionEmployeeMutation();

  const onSubmit = actionEmployeeForm.handleSubmit(async (values) => {
    const requestParams = {
      ...values,
      legalEntityId: params.organizationId
    };

    if (actionType === 'add') {
      const postOrganizationActionEmployeeParams = {
        params: requestParams,
        action: actionType
      } as const;

      await postOrganizationActionEmployee.mutateAsync(postOrganizationActionEmployeeParams);
    }

    if (actionType === 'edit') {
      const postOrganizationActionEmployeeParams = {
        params: {
          ...requestParams,
          userId: employee!.id
        },
        action: actionType
      } as const;

      await postOrganizationActionEmployee.mutateAsync(postOrganizationActionEmployeeParams);
    }

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
