'use client';

import { Search } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';

import { Input } from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

const SEARCH_INPUT_DELAY = 500;

const ActivitySearchInput = () => {
  const { searchParams, setSearchParam } = useSearchParams();
  const activitySearchQueryText = searchParams.get('search');

  const onActivitySearch = useDebounceCallback((text) => {
    setSearchParam('search', text);
  }, SEARCH_INPUT_DELAY);

  return (
    <div className='relative h-10 w-[293px] smx:mb-6'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
      </div>
      <Input
        placeholder='Поиск актвности'
        defaultValue={activitySearchQueryText ?? ''}
        onChange={(event) => onActivitySearch(event.target.value)}
        className='block h-10 rounded-lg border px-3 py-2 pl-10 text-sm leading-6 outline-none focus-visible:ring-0'
      />
    </div>
  );
};

export default ActivitySearchInput;
