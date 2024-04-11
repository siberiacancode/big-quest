'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';

import { Button, Input } from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

const SEARCH_INPUT_DELAY = 500;

const ActivitySearchInput = () => {
  const { searchParams, setSearchParam } = useSearchParams();
  const activitySearchQueryText = searchParams.get('search');

  const [isInputEmpty, setIsInputEmpty] = useState(!activitySearchQueryText);
  const [isInputText, setIsIputText] = useState(activitySearchQueryText ?? '');

  const debounceSearch = useDebounceCallback((text) => {
    setSearchParam('search', text);
  }, SEARCH_INPUT_DELAY);

  const onActivitySearch = (text) => {
    setIsInputEmpty(text === '');
    setIsIputText(text);
    debounceSearch(text);
  };

  const onClear = () => {
    setIsIputText('');
    setIsInputEmpty(true);
    setSearchParam('search', '');
  };

  return (
    <div className='relative h-10 w-[293px] smx:mb-6'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
      </div>
      <Input
        placeholder='Поиск актвности'
        value={isInputText}
        onChange={(event) => onActivitySearch(event.target.value)}
        className='block h-10 rounded-lg border px-3 py-2 pl-10 text-sm leading-6 outline-none focus-visible:ring-0'
      />
      {!isInputEmpty && (
        <Button
          variant='outline'
          size='icon'
          className='absolute inset-y-[11px] right-0 mr-3 size-[18px] rounded-full border-none bg-taiga hover:bg-taiga'
          onClick={onClear}
        >
          <X strokeWidth={2} absoluteStrokeWidth size={8} className=' text-white' />
        </Button>
      )}
    </div>
  );
};

export default ActivitySearchInput;
