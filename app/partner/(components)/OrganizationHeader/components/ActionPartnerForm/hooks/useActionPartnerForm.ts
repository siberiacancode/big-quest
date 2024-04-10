import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePutUserMutation } from '@/utils/api/hooks/usePutUserMutation';
import { useI18n } from '@/utils/contexts';

import type { PartnerData } from '../../../constants/types';
import type { PartnerSchema } from '../constants/actionPartnerSchema';
import { actionPartnerSchema } from '../constants/actionPartnerSchema';

interface UseActionPartnerFormParams {
  onAction: () => void;
  partner: PartnerData;
}

export const useActionPartnerForm = ({ onAction, partner }: UseActionPartnerFormParams) => {
  const i18n = useI18n();

  const [showPreview, setShowPreview] = React.useState(!!partner.avatar);
  const onDeletePreviewClick = () => setShowPreview(false);

  const actionPartnerForm = useForm<PartnerSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(actionPartnerSchema),
    defaultValues: {
      role: partner.roles[0] ?? 'MANAGER',
      name: partner.name ?? '',
      surname: partner.surname ?? '',
      email: partner.email ?? '',
      phone: partner.phone.replace('+7', '') ?? '',
      file: undefined
    }
  });

  const putUserMutation = usePutUserMutation();

  const onSubmit = actionPartnerForm.handleSubmit(async (values) => {
    const { file, ...restRequestParams } = values;

    const userData = { ...partner, ...restRequestParams };

    const putUserParams = {
      params: {
        ...userData,
        ...(file && { file })
      }
    } as const;

    await putUserMutation.mutateAsync(putUserParams);

    toast.success(i18n.formatMessage({ id: 'toast.editPartner' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });
    onAction();
  });

  return {
    state: {
      showPreview,
      isLoading: putUserMutation.isPending
    },
    form: actionPartnerForm,
    functions: { onSubmit, onDeletePreviewClick }
  };
};
