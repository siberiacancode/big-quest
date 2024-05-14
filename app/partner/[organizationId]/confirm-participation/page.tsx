import dynamic from 'next/dynamic';

import { getOrganizationActivities } from '@/utils/api';

const DynamicConfirmParticipationDialog = dynamic(
  () => import('./(components)/ConfirmParticipationDialog/ConfirmParticipationDialog'),
  { ssr: false }
);

interface OrganizationConfirmParticipationPageProps {
  searchParams: { userId?: string };
  params: { organizationId: string };
}

const OrganizationConfirmParticipationPage = async ({
  searchParams,
  params
}: OrganizationConfirmParticipationPageProps) => {
  const getOrganizationActivitiesResponse = await getOrganizationActivities({
    params: { id: params.organizationId }
  });

  return (
    <DynamicConfirmParticipationDialog
      userId={searchParams.userId ?? ''}
      activities={getOrganizationActivitiesResponse}
    />
  );
};

export default OrganizationConfirmParticipationPage;
