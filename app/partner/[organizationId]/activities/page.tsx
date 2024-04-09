import React from 'react';

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const OrganizationActivitiesPage = ({ params }: OrganizationActivitiesPageProps) => {
  console.log(params);

  return <>заглушка чтобы посмотреть хэдер организации</>;
};

export default OrganizationActivitiesPage;
