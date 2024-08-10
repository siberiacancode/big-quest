import React from 'react';
import { useIntersectionObserver } from '@siberiacancode/reactuse';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import {
  useGetSchedulesByOrganizationIdInfiniteQuery,
  usePostScheduleConfirmMutation
} from '@/utils/api';
import { useI18n } from '@/utils/contexts';

interface UseSelectScheduleSectionParams {
  userId: string;
}

const DEFAULT_SCHEDULES_LIMIT = 10;
const DEFAULT_SCHEDULES_PAGE = 1;

export const useSelectScheduleSection = ({ userId }: UseSelectScheduleSectionParams) => {
  const i18n = useI18n();
  const params = useParams<{ organizationId: string }>();
  const [selectedScheduleId, setSelectedScheduleId] = React.useState<string | undefined>();
  const dateString = new Date().toISOString();

  const getSchedulesByOrganizationIdInfiniteQuery = useGetSchedulesByOrganizationIdInfiniteQuery({
    organizationId: params.organizationId,
    current: DEFAULT_SCHEDULES_PAGE,
    limit: DEFAULT_SCHEDULES_LIMIT,
    dateStart: dateString,
    dateEnd: dateString
  });

  const activities =
    getSchedulesByOrganizationIdInfiniteQuery?.data?.pages.flatMap((page) => page.rows) ?? [];

  const postScheduleConfirmMutation = usePostScheduleConfirmMutation();

  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) getSchedulesByOrganizationIdInfiniteQuery.fetchNextPage();
    },
    enabled: !!activities.length && getSchedulesByOrganizationIdInfiniteQuery.hasNextPage
  });

  const onConfirmParticipationClick = async () => {
    if (!selectedScheduleId) return;
    await postScheduleConfirmMutation.mutateAsync({
      params: { scheduleId: selectedScheduleId, userId, confirm: true }
    });
    toast.success(i18n.formatMessage({ id: 'toast.participationConfirmed' }));
    // TODO maybe redirect
  };

  return {
    state: {
      activities,
      selectedScheduleId,
      isLoading:
        getSchedulesByOrganizationIdInfiniteQuery.isFetching ||
        postScheduleConfirmMutation.isPending,
      isLoadingMore: getSchedulesByOrganizationIdInfiniteQuery.isFetchingNextPage,
      intersectionRef: ref
    },
    functions: { setSelectedScheduleId, onConfirmParticipationClick }
  };
};
