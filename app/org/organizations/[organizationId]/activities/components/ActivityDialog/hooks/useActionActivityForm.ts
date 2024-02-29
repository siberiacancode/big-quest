import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import type { ActivitySchema } from '../constants/ActivitySchema';
import { activitySchema } from '../constants/ActivitySchema';

import { usePostOrganizationActionActivityMutation } from './usePostOrganizationActionActivityMutation';

interface UseActionActivityFormParams {
  onAdded: () => void;
  actionType: 'add' | 'edit';
}

export const useActionActivityForm = ({ onAdded, actionType }: UseActionActivityFormParams) => {
  const params = useParams<{ organizationId: string }>();

  const addActivityForm = useForm<ActivitySchema>({
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

  const postOrganizationAddActivity = usePostOrganizationActionActivityMutation();

  const onSubmit = addActivityForm.handleSubmit(async (values) => {
    const mutationParams = {
      params: { ...values, organizationId: params.organizationId },
      actionType
    };

    // @ts-ignore
    await postOrganizationAddActivity.mutateAsync(mutationParams);
    onAdded();
  });

  return {
    state: {
      isLoading: false
    },
    form: addActivityForm,
    functions: { onSubmit }
  };
};
