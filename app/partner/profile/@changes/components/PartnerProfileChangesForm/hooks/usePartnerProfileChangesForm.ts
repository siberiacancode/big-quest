import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useGetChangesInfiniteQuery, usePostChangesMutation } from '@/utils/api';

import type { AddPartnerProfileChangesSchema } from '../constants/addPartnerProfileChangesSchema';
import { addPartnerProfileChangesSchema } from '../constants/addPartnerProfileChangesSchema';

const DEFAULT_CHANGES_PAGE = 1;
const CHANGES_LIMIT = 5;

interface UsePartnerProfileChangesFormParams {
  organizationId: string;
}

export const usePartnerProfileChangesForm = ({
  organizationId
}: UsePartnerProfileChangesFormParams) => {
  const postChangesMutation = usePostChangesMutation();

  const getChangesInfiniteQuery = useGetChangesInfiniteQuery({
    current: DEFAULT_CHANGES_PAGE,
    limit: CHANGES_LIMIT,
    criteria: organizationId
  });

  const addOrganizationChangeForm = useForm<AddPartnerProfileChangesSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addPartnerProfileChangesSchema),
    defaultValues: { comment: '' }
  });

  const onSubmit = addOrganizationChangeForm.handleSubmit(async (values) => {
    await postChangesMutation.mutateAsync({
      params: {
        criteria: organizationId,
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
