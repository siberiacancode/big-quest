import React from 'react';
import { useParams } from 'next/navigation';
import { useIntersectionObserver } from 'usehooks-ts';

import { useGetSchedulesByOrganizationIdInfiniteQuery } from '@/utils/api';

interface UseSelectScheduleSectionParams {
  userId: string;
}

const DEFAULT_SCHEDULES_PAGE = 1;
const DEFAULT_SCHEDULES_LIMIT = 10;

export const useSelectScheduleSection = ({ userId }: UseSelectScheduleSectionParams) => {
  const params = useParams<{ organizationId: string }>();
  const [selectedActivityId, setSelectedActivityId] = React.useState<string | undefined>();
  const dateString = new Date().toISOString();

  const getSchedulesByOrganizationIdInfiniteQuery = useGetSchedulesByOrganizationIdInfiniteQuery({
    organizationId: params.organizationId,
    current: DEFAULT_SCHEDULES_PAGE,
    limit: DEFAULT_SCHEDULES_LIMIT,
    dateStart: dateString,
    dateEnd: dateString
  });

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting) getSchedulesByOrganizationIdInfiniteQuery.fetchNextPage();
    }
  });

  const onConfirmParticipationClick = () => {
    // TODO request with userId and selectedActivityId
    return userId;
  };

  return {
    state: {
      activities:
        getSchedulesByOrganizationIdInfiniteQuery?.data?.pages.flatMap((page) => page.rows) ?? [],
      selectedActivityId,
      isLoading: getSchedulesByOrganizationIdInfiniteQuery.isFetching,
      isLoadingMore: getSchedulesByOrganizationIdInfiniteQuery.isFetchingNextPage,
      intersectionRef: ref
    },
    functions: { setSelectedActivityId, onConfirmParticipationClick }
  };
};
