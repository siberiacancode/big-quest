import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';

import type { ActivitySchema } from '../constants/ActivitySchema';
import { activitySchema } from '../constants/ActivitySchema';

import { usePostOrganizationActionActivityMutation } from './usePostOrganizationActionActivityMutation';

interface UseActionActivityFormParams {
  onAction: () => void;
  actionType: ActivityActionType;
  activity?: ActivityResponse;
}

export const useActionActivityForm = ({
  onAction,
  actionType,
  activity
}: UseActionActivityFormParams) => {
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);

  const params = useParams<{ organizationId: string }>();

  const categoryResponse = useGetCategoryQuery();

  const emptyData = {
    name: '',
    description: '',
    ageLimit: { min: 7, max: 14 },
    duration: 120,
    price: 720,
    replay: false,
    status: 'DRAFT',
    category: ''
  };

  const defaultValues = activity
    ? {
        ...activity,
        ageLimit: { min: activity.ageLimit[0], max: activity.ageLimit[1] }
      }
    : emptyData;

  const activityForm = useForm<ActivitySchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activitySchema),
    defaultValues
  });

  const postOrganizationActionActivity = usePostOrganizationActionActivityMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const ageLimitArray = [values?.ageLimit?.min, values.ageLimit?.max];
    const formattedValues = {
      ...values,
      ageLimit: ageLimitArray,
      organizationId: params.organizationId
    };

    const tempAddedFields =
      actionType === 'edit' ? { ...activity, ...formattedValues } : formattedValues;

    const mutationParams = {
      params: { ...tempAddedFields, ...(actionType === 'edit' && activity && { id: activity.id }) },
      action: actionType
    };
    // @ts-ignore
    await postOrganizationActionActivity.mutateAsync(mutationParams);

    onAction();
  });

  return {
    state: {
      isCategoryOpen,
      isStatusOpen,
      categoryValues: categoryResponse.data
    },
    form: activityForm,
    functions: { onSubmit, setIsCategoryOpen, setIsStatusOpen }
  };
};
