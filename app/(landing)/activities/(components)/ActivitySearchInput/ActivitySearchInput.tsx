'use client';

import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';

import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

import { useActivitiesPage } from '../../(contexts)/activitiesPage';

export const ActivitySearchInput = () => {
  const i18n = useI18n();
  const { searchParams } = useSearchParams();
  const [name, setName] = React.useState(searchParams.get('name') ?? '');
  const { onSearchChange, onSearchClear } = useActivitiesPage();

  return (
    <div className='relative h-10 w-[293px] smx:mb-6'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
      </div>
      <Input
        placeholder={i18n.formatMessage({ id: 'field.activitySearch.placeholder' })}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          onSearchChange(event.target.value);
        }}
        className='block h-10 rounded-lg border px-3 py-2 pl-10 text-sm leading-6 outline-none focus-visible:ring-0'
      />
      {name && (
        <Button
          variant='outline'
          size='icon'
          className='absolute inset-y-[11px] right-0 mr-3 size-[18px] rounded-full border-none bg-taiga hover:bg-taiga'
          onClick={() => {
            setName('');
            onSearchClear();
          }}
        >
          <XIcon strokeWidth={2} absoluteStrokeWidth size={8} className=' text-white' />
        </Button>
      )}
    </div>
  );
};
