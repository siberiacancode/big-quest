import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { usePostOrganizationEditEmployeeMutation } from '@/utils/api/hooks/usePostOrganizationEditEmployeeMutation';
import { useI18n } from '@/utils/contexts';

import type { EmployeeSchema } from '../constants/EmployeeSchema';
import { employeeSchema } from '../constants/EmployeeSchema';

interface UseEditEmployeeFormParams {
  onAdded: () => void;
}

export const useEditEmployeeForm = ({ onAdded }: UseEditEmployeeFormParams) => {
  const i18n = useI18n();

  const params = useParams<{ organizationId: string }>();

  const editEmployeeForm = useForm<EmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      // дефотлные значния с пропсов будут прилетать в будушем
      role: '',
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  });

  const postOrganizationEditEmployee = usePostOrganizationEditEmployeeMutation();

  const onSubmit = editEmployeeForm.handleSubmit(async (values) => {
    await postOrganizationEditEmployee.mutateAsync({
      ...values,
      organizationId: params.organizationId
    });

    toast(i18n.formatMessage({ id: 'dialog.editEmployee.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: false
    },
    form: editEmployeeForm,
    functions: { onSubmit }
  };
};
