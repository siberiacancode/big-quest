import { getOrganizationCurrent } from '@/utils/api';

import { PartnerProfileChangesForm } from './components/PartnerProfileChangesForm/PartnerProfileChangesForm';

const PartnerProfileChangesPage = async () => {
  const getOrganizationCurrentResponse = await getOrganizationCurrent({
    config: { cache: 'no-store' }
  });

  return <PartnerProfileChangesForm organizationId={getOrganizationCurrentResponse.id} />;
};

export default PartnerProfileChangesPage;
