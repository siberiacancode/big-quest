'use client';

import { OrganizationProfileJournal, OrganizationProfileStatistics } from './components';

const page = () => (
  <div className='mt-4 flex justify-center gap-[22px] smx:flex-col'>
    <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
      <OrganizationProfileStatistics />
      <OrganizationProfileJournal />
    </div>
  </div>
);

export default page;
