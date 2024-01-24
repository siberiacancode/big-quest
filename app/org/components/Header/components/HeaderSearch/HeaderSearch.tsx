'use client';

import { useIntl } from 'react-intl';
import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';

export const HeaderSearch = () => {
  const intl = useIntl();

  return (
    <Input
      className='h-12 bg-secondary'
      placeholder={intl.formatMessage({ id: 'field.search.placeholder' })}
      type='search'
      icon={<SearchIcon className='opacity-50' />}
    />
  );
};
