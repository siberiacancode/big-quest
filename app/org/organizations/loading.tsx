import { Loader2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

const OrganizationsLoading = () => (
  <div className='flex items-center justify-center'>
    <Loader2Icon className={cn('my-28 h-16 w-16 animate-spin text-primary/60')} />
  </div>
);

export default OrganizationsLoading;
