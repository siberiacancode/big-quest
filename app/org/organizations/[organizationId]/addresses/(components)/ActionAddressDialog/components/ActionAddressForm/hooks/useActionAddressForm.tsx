import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import type { AddressData } from '../../../../../(constants)/types';
import type { AddressActionType } from '../../../contants/types';
import type { ActionAddressSchema } from '../constants/actionAddressSchema';
import { actionAddressSchema } from '../constants/actionAddressSchema';

import { useOrganizationActionAddressMutation } from './useOrganizationActionAddressMutation';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: AddressActionType;
  address?: AddressData;
}

export const useActionAddressForm = ({
  onAction,
  address,
  actionType
}: UseActionEmployeeFormParams) => {
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();

  const actionAddressForm = useForm<ActionAddressSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(actionAddressSchema),
    defaultValues: {
      locality: '',
      street: '',
      house: '',
      details: '',
      workingHours: {
        '0': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '1': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '2': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '3': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '4': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '5': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '6': { time: { from: '09:00', to: '18:00' }, dayOff: true }
      }
    }
  });

  const organizationActionAddressMutation = useOrganizationActionAddressMutation();

  const onSubmit = actionAddressForm.handleSubmit(async (values) => {
    const formattedWorkingHours = Object.entries(values.workingHours).map(([day, element]) => {
      const [from1, from2] = element.time.from.split(':');
      const [to1, to2] = element.time.to.split(':');

      const fromHour = Number(from1);
      const fromMinutes = Number(from2);

      const toHour = Number(to1);
      const toMinutes = Number(to2);

      return {
        day: Number(day),
        from: { hour: fromHour, minutes: fromMinutes },
        to: { hour: toHour, minutes: toMinutes },
        dayOff: element.dayOff
      };
    });

    const requestParams = { ...values, workingHours: formattedWorkingHours };

    if (actionType === 'add') {
      const postOrganizationActionAddressParams = {
        params: { ...requestParams, legalId: params.organizationId },
        action: actionType
      } as const;

      await organizationActionAddressMutation.mutateAsync(postOrganizationActionAddressParams);
    }

    if (actionType === 'edit') {
      const putOrganizationActionAddressParams = {
        params: { requestParams, id: address!.id },
        action: actionType
      } as const;

      await organizationActionAddressMutation.mutateAsync(putOrganizationActionAddressParams);
    }

    onAction();
    router.refresh();
  });

  return {
    state: {
      isLoading: organizationActionAddressMutation.isPending
    },
    form: actionAddressForm,
    functions: { onSubmit }
  };
};
