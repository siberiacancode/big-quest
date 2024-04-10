import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getLegalAddressesByLegalId } from '@/utils/api/requests';

import { AddAddressDialog } from './(components)/AddAddressDialog/AddAddressDialog';
import { AddressCard } from './(components)/AddressCard/AddressCard';

interface OrganizationAddressesPageProps {
  params: { organizationId: string };
}

const OrganizationAddressesPage = async ({ params }: OrganizationAddressesPageProps) => {
  const getLegalAddressesByLegalIdResponse = await getLegalAddressesByLegalId({
    params: { legalId: params.organizationId },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <>
      <div className='flex justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.addresses.title' />
        </Typography>
        <AddAddressDialog />
      </div>
      <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
        {getLegalAddressesByLegalIdResponse.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </>
  );
};

export default OrganizationAddressesPage;
