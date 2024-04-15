import { useGetActivityPublicInfiniteQuery } from '@/utils/api/hooks';

const DEFAULT_ACTIVITIES_LIMIT = 6;
const DEFAULT_ACTIVITIES_PAGE = 1;

interface UseActivtyCatalogPageParams {
  searchParams: SearchParams;
}
export const useActivtyCatalogPage = ({ searchParams }: UseActivtyCatalogPageParams) => {
  //   const { searchParams } = useSearchParams();

  //   console.log(searchParams);

  const getChangesInfiniteQuery = useGetActivityPublicInfiniteQuery({
    current: DEFAULT_ACTIVITIES_PAGE,
    limit: DEFAULT_ACTIVITIES_LIMIT,
    ...searchParams
  });

  return {
    state: {
      query: getChangesInfiniteQuery
    }
  };
};
