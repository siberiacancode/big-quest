import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';
import { getOrganizationAddressesById } from '@/utils/api/requests';

import { AddAddressDialog } from './components/AddAddressDialog/AddAddressDialog';
import { AddressCard } from './components/AddressCard/AddressCard';

interface OrganizationAddressesPageProps {
  params: { id: string };
}

const AddressesPage = async ({ params }: OrganizationAddressesPageProps) => {
  const organizationAddresses = await getOrganizationAddressesById({
    params: { id: params.id }
  });

  return (
    <>
      <div className='flex justify-between'>
        <h3 className='text-lg font-bold'>
          <I18nText path='partners.addresses.title' />
        </h3>
        <AddAddressDialog
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addAddress' />
            </Button>
          }
        />
      </div>
      <div className='m-3 mt-4 gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
        {organizationAddresses.addresses.map((address, index) => (
          <AddressCard key={index} address={address} />
        ))}
      </div>
    </>
  );
};

export default AddressesPage;
