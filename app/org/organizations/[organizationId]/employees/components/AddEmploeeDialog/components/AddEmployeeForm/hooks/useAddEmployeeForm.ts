import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import { type AddEmployeeSchema, addEmployeeSchema } from '../constants/addEmployeeSchema';

interface UseAddEmployeeFormParams {
  onAdded: () => void;
}

export const useAddEmployeeForm = ({ onAdded }: UseAddEmployeeFormParams) => {
  const i18n = useI18n();

  //   const params = useParams<{ id: string }>();

  const addEmployeeForm = useForm<AddEmployeeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addEmployeeSchema),
    defaultValues: {
      role: '',
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  });

  //   const postOrganizationAddEmployee = usePostOrganizationAddAddressMutation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
  const onSubmit = addEmployeeForm.handleSubmit(async () => {
    // await postOrganizationAddEmployee.mutateAsync({
    //   ...values,
    //   organizationId: params.id
    // });

    toast(i18n.formatMessage({ id: 'dialog.addAddress.success' }), {
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
