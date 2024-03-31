import React from 'react';

interface OrganizationProfilePageLayoutProps {
  children: React.ReactNode;
  card: React.ReactNode;
  changes: React.ReactNode;
  statistics: React.ReactNode;
  tariff: React.ReactNode;
}

const OrganizationProfilePageLayout = ({
  card,
  changes,
  statistics,
  tariff
}: OrganizationProfilePageLayoutProps) => (
  <div className='flex justify-center gap-[22px] smx:flex-col'>
    {card}
    <div className='flex w-1/2 flex-col gap-[22px] smx:w-full'>
      {tariff}
      {statistics}
      {changes}
    </div>
  </div>
);

export default OrganizationProfilePageLayout;
