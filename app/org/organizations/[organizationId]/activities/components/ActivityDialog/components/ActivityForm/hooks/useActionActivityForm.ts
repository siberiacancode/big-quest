import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';

import type { ActivityActionType } from '../../../constants/types';
import type { ActivitySchema } from '../constants/activitySchema';
import { activitySchema } from '../constants/activitySchema';

import { usePostActionActivityMutation } from './usePostActionActivityMutation';

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

  const defaultValues = {
    name: activity?.name ?? '',
    description: activity?.description ?? '',
    ageLimit: { min: activity?.ageLimit[0] ?? 7, max: activity?.ageLimit[1] ?? 14 },
    duration: 120,
    price: activity?.duration ?? 720,
    replay: activity?.replay ?? false,
    status: activity?.status ?? 'DRAFT',
    category: activity?.category ?? ''
  };

  const activityForm = useForm<ActivitySchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activitySchema),
    defaultValues
  });

  const postActionActivityMutation = usePostActionActivityMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const formattedValues = {
      ...values,
      ageLimit: [values?.ageLimit?.min, values.ageLimit?.max],
      organizationId: params.organizationId
    };

    const tempAddedFields =
      actionType === 'edit' ? { ...activity, ...formattedValues } : formattedValues;

    const postActionActivityParams = {
      params: { ...tempAddedFields, ...(actionType === 'edit' && activity && { id: activity.id }) },
      action: actionType
    };

    // @ts-ignore
    await postActionActivityMutation.mutateAsync(postActionActivityParams);

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
