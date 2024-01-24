import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';

export const HeaderSearch = () => (
  <Input
    className='h-12 bg-secondary'
    placeholder='Найти...'
    type='search'
    icon={<SearchIcon className='opacity-50' />}
  />
);
