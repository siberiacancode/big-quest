import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getOrganizationAddressesById } from '@/utils/api/requests';

import { AddAddressDialog } from './components/AddAddressDialog/AddAddressDialog';
import { AddressCard } from './components/AddressCard/AddressCard';

interface OrganizationAddressesPageProps {
  params: { organizationId: string };
}

const OrganizationAddressesPage = async ({ params }: OrganizationAddressesPageProps) => {
  const getOrganizationAddressesByIdResponse = await getOrganizationAddressesById({
    params: { id: params.organizationId }
  });

  return (
    <>
      <div className='flex justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.addresses.title' />
        </Typography>
        <AddAddressDialog
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addAddress' />
            </Button>
          }
        />
      </div>
      <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap xl:grid 2xl:grid-cols-3'>
        {getOrganizationAddressesByIdResponse.addresses.map((address, index) => (
          <AddressCard key={index} address={address} />
        ))}
      </div>
    </>
  );
};

export default OrganizationAddressesPage;
