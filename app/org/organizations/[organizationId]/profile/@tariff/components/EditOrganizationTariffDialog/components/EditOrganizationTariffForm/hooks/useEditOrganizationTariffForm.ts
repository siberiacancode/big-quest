import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { usePutTariffMutation } from '@/utils/api';

import {
  type EditOrganizationTariffSchema,
  editOrganizationTariffSchema
} from '../constants/editOrganizationTariffSchema';

interface UseEditOrganizationTariffFormParams {
  tariff: TariffResponse;
  onEdited: () => void;
}

export const useEditOrganizationTariffForm = ({
  onEdited,
  tariff
}: UseEditOrganizationTariffFormParams) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const editOrganizationForm = useForm<EditOrganizationTariffSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(editOrganizationTariffSchema),
    defaultValues: {
      freeActivity: tariff.freeActivity.toString(),
      paidActivity: tariff.paidActivity.toString(),
      periodMonth: tariff.periodMonth ? tariff.periodMonth.toString() : '',
      totalPrice: tariff.totalPrice.toString()
    }
  });

  const putTariffMutation = usePutTariffMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async (values) => {
    await putTariffMutation.mutateAsync({
      params: {
        id: tariff.id,
        freeActivity: +values.freeActivity,
        paidActivity: +values.paidActivity,
        periodMonth: +values.periodMonth,
        totalPrice: +values.totalPrice
      }
    });
    router.refresh();
    queryClient.invalidateQueries({ queryKey: ['getChanges'] });

    onEdited();
  });

  return {
    state: { isLoading: putTariffMutation.isPending },
    form: editOrganizationForm,
    functions: { onSubmit }
  };
};
