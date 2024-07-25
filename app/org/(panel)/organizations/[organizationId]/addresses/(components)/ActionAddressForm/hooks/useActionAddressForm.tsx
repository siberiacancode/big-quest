import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import type { AddressResponseDto } from '@/api-types';
import type { ComboBoxOption } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import type { AddressData } from '../../../(constants)/types';
import type { ActionAddressSchema, AddressActionType } from '../constants';
import { actionAddressSchema } from '../constants';
import { convertWorkingHours } from '../helpers';

import { useOrganizationActionAddressMutation } from './useOrganizationActionAddressMutation';

interface UseActionEmployeeFormParams {
  onAction: () => void;
  actionType: AddressActionType;
  address?: AddressData;
}

const DEFAULT_WORKING_HOURS = {
  '0': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '1': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '2': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '3': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '4': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '5': { time: { from: '09:00', to: '18:00' }, dayOff: false },
  '6': { time: { from: '09:00', to: '18:00' }, dayOff: true }
};

export const useActionAddressForm = ({
  onAction,
  address,
  actionType
}: UseActionEmployeeFormParams) => {
  const i18n = useI18n();
  const params = useParams<{ organizationId: string }>();

  const actionAddressForm = useForm<ActionAddressSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(actionAddressSchema),
    defaultValues: {
      locality:
        { id: address?.value, label: address?.value, value: address } ??
        ({} as ComboBoxOption<AddressResponseDto>),
      phone: address?.phoneNumber.replace('7', '') ?? '',
      workingHours: address?.workingHours
        ? convertWorkingHours(address.workingHours)
        : DEFAULT_WORKING_HOURS
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

    const { locality, phone, ...requestParams } = {
      ...values,
      workingHours: formattedWorkingHours
    };

    if (actionType === 'add') {
      const postOrganizationActionAddressParams = {
        params: {
          ...requestParams,
          legalEntityId: params.organizationId,
          locality: locality.value,
          phone: `7${phone}`
        },
        action: actionType
      } as const;

      await organizationActionAddressMutation.mutateAsync(postOrganizationActionAddressParams);

      toast.success(i18n.formatMessage({ id: 'toast.addAddress' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    if (actionType === 'edit') {
      const putOrganizationActionAddressParams = {
        params: {
          ...requestParams,
          legalEntityId: params.organizationId,
          id: address!.id,
          locality: locality.value,
          phone: `7${phone}`
        },
        action: actionType
      } as const;

      await organizationActionAddressMutation.mutateAsync(putOrganizationActionAddressParams);

      toast.success(i18n.formatMessage({ id: 'toast.editAddress' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    onAction();
  });

  return {
    state: {
      isLoading: organizationActionAddressMutation.isPending
    },
    form: actionAddressForm,
    functions: { onSubmit }
  };
};
