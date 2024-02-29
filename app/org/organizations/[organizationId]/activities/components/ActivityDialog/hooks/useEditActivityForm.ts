import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import type { ActivitySchema } from '../constants/ActivitySchema';
import { activitySchema } from '../constants/ActivitySchema';

import { usePostOrganizationActionActivityMutation } from './usePostOrganizationActionActivityMutation';

interface UseEditActivityFormParams {
  onAdded: () => void;
  actionType: 'add' | 'edit';
}

export const useEditActivityForm = ({ onAdded, actionType }: UseEditActivityFormParams) => {
  const params = useParams<{ organizationId: string }>();

  const editActivityForm = useForm<ActivitySchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activitySchema),
    defaultValues: {
      name: '',
      description: '',
      ageLimit: { min: 0, max: 0 },
      duration: 120,
      price: 720,
      replay: false
    }
  });

  const postOrganizationEditActivity = usePostOrganizationActionActivityMutation();

  const onSubmit = editActivityForm.handleSubmit(async (values) => {
    const mutationParams = {
      params: { ...values, organizationId: params.organizationId },
      actionType
    };

    // @ts-ignore
    await postOrganizationEditActivity.mutateAsync(mutationParams);
    onAdded();
  });

  return {
    state: {
      isLoading: false
    },
    form: editActivityForm,
    functions: { onSubmit }
  };
};
