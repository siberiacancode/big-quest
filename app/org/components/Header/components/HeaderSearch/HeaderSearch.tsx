import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui';

export const HeaderSearch = () => (
  <div className='relative'>
    <Input className='bg-secondary pl-10' placeholder='Найти...' type='search' />
    <SearchIcon
      className='pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50'
      size={24}
    />
  </div>
);
