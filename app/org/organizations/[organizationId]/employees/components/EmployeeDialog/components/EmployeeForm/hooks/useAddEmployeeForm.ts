import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { usePostOrganizationAddEmployeeMutation } from '@/utils/api/hooks/usePostOrganizationAddEmployeeMutation';
import { useI18n } from '@/utils/contexts';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseAddEmployeeFormParams {
  onAdded: () => void;
}

export const useAddEmployeeForm = ({ onAdded }: UseAddEmployeeFormParams) => {
  const i18n = useI18n();

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

  const postOrganizationAddEmployee = usePostOrganizationAddEmployeeMutation();

  const onSubmit = addEmployeeForm.handleSubmit(async (values) => {
    await postOrganizationAddEmployee.mutateAsync({
      ...values,
      organizationId: params.organizationId
    });

    toast(i18n.formatMessage({ id: 'dialog.addEmployee.success' }), {
      cancel: { label: 'Close' }
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
