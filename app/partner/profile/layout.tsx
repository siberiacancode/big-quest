import React from 'react';

interface PartnerProfileLayoutProps {
  children: React.ReactNode;
  card: React.ReactNode;
  changes: React.ReactNode;
  statistics: React.ReactNode;
  tariff: React.ReactNode;
}

const PartnerProfileLayout = ({ card, changes, statistics, tariff }: PartnerProfileLayoutProps) => (
  <div className='flex flex-1 flex-col justify-center gap-4 lg:flex-row'>
    <div className='flex-1'>{card}</div>
    <div className='flex flex-1 flex-col gap-4'>
      {tariff}
      {statistics}
      {changes}
    </div>
  </div>
);

export default PartnerProfileLayout;
