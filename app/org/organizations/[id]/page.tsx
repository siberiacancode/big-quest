'use client';

import { useParams } from 'next/navigation';

import { OrgBreadcrumbs } from '../../components/OrgBreadcrumbs/OrgBreadcrumbs';

const Page = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <OrgBreadcrumbs /> organization
    </div>
  );
};

export default Page;
