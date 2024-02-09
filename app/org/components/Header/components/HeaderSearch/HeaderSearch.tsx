'use client';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

export const HeaderSearch = () => {
  const intl = useI18n();

  return (
    <div className='relative'>
      <SearchIcon className='top-50% absolute left-3 translate-y-1/2 opacity-50' />
      <Input
        className='h-12 bg-secondary pl-11'
        placeholder={intl.formatMessage({ id: 'field.search.placeholder' })}
        type='search'
      />
    </div>
  );
};
