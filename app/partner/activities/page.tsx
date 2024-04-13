import React from 'react';

interface PartnerActivitiesPageProps {
  params: { organizationId: string };
}

const PartnerActivitiesPage = ({ params }: PartnerActivitiesPageProps) => {
  console.log(params);

  return <>заглушка чтобы посмотреть хэдер организации</>;
};

export default PartnerActivitiesPage;
