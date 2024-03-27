import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePutTariffMutation } from '@/utils/api';

import {
  type EditOrganizationTariffSchema,
  editOrganizationTariffSchema
} from '../constants/EditOrganizationTariffSchema';

interface UseEditOrganizationTariffFormParams {
  organization: OrganizationResponse;
  tariff: TariffResponse;
  onEdited: () => void;
}

export const useEditOrganizationTariffForm = ({
  onEdited,
  tariff
}: UseEditOrganizationTariffFormParams) => {
  const router = useRouter();
  const editOrganizationForm = useForm<EditOrganizationTariffSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(editOrganizationTariffSchema),
    defaultValues: {
      freeActivity: tariff.freeActivity.toString(),
      paidActivity: tariff.paidActivity.toString(),
      periodMonth: tariff.periodMonth.toString(),
      totalPrice: tariff.totalPrice.toString()
    }
  });

  const putTariffMutation = usePutTariffMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async (values) => {
    await putTariffMutation.mutateAsync({
      params: {
        ...tariff,
        freeActivity: +values.freeActivity,
        paidActivity: +values.paidActivity,
        periodMonth: +values.periodMonth,
        totalPrice: +values.totalPrice
      }
    });
    router.refresh();

    onEdited();
  });

  return {
    state: { isLoading: putTariffMutation.isPending },
    form: editOrganizationForm,
    functions: { onSubmit }
  };
};
