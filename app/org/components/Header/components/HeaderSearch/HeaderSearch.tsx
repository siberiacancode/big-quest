'use client';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

export const HeaderSearch = () => {
  const i18n = useI18n();

  return (
    <Input
      className='h-12 bg-secondary'
      placeholder={i18n.formatMessage({ id: 'field.search.placeholder' })}
      type='search'
      icon={<SearchIcon className='opacity-50' />}
    />
  );
};
