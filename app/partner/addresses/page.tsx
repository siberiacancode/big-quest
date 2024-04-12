import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getLegalAddressesByLegalId, getOrganizationCurrent } from '@/utils/api/requests';

import { AddAddressDialog } from './(components)/AddAddressDialog/AddAddressDialog';
import { AddressCard } from './(components)/AddressCard/AddressCard';

const PartnerAddressesPage = async () => {
  const getOrganizationCurrentResponse = await getOrganizationCurrent({
    config: { cache: 'no-store' }
  });

  const getLegalAddressesByLegalIdResponse = await getLegalAddressesByLegalId({
    params: { legalId: getOrganizationCurrentResponse.id },
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
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
        {getLegalAddressesByLegalIdResponse.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </>
  );
};

export default PartnerAddressesPage;
