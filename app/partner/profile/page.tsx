import React from 'react';

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const PartnerProfilePage = ({ params }: OrganizationActivitiesPageProps) => {
  console.log(params);

  return <>заглушка чтобы посмотреть хэдер организации</>;
};

export default PartnerProfilePage;
