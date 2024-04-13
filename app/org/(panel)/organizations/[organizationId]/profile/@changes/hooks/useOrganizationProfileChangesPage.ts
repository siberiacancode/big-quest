import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { useGetChangesInfiniteQuery, usePostChangesMutation } from '@/utils/api';

import type { AddOrganizationChangesSchema } from '../constants/addOrganizationChangeSchema';
import { addOrganizationChangesSchema } from '../constants/addOrganizationChangeSchema';

const DEFAULT_CHANGES_PAGE = 1;
const CHANGES_LIMIT = 5;

export const useOrganizationProfileChangesPage = () => {
  const params = useParams<{ organizationId: string }>();

  const postChangesMutation = usePostChangesMutation();

  const getChangesInfiniteQuery = useGetChangesInfiniteQuery({
    current: DEFAULT_CHANGES_PAGE,
    limit: CHANGES_LIMIT,
    criteria: params.organizationId
  });

  const addOrganizationChangeForm = useForm<AddOrganizationChangesSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addOrganizationChangesSchema),
    defaultValues: { comment: '' }
  });

  const onSubmit = addOrganizationChangeForm.handleSubmit(async (values) => {
    await postChangesMutation.mutateAsync({
      params: {
        criteria: params.organizationId,
        new: { comment: values.comment },
        action: 'comment'
      }
    });
    addOrganizationChangeForm.reset();
    getChangesInfiniteQuery.refetch();
  });

  return {
    state: {
      isLoading: postChangesMutation.isPending,
      query: getChangesInfiniteQuery
    },
    form: addOrganizationChangeForm,
    functions: { onSubmit }
  };
};
