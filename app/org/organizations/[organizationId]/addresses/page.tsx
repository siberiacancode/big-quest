import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { getLegalAddressesByLegalId } from '@/utils/api/requests';

import { ActionAddressDialog } from './(components)/ActionAddressDialog/ActionAddressDialog';
import { AddressCard } from './(components)/AddressCard/AddressCard';

interface OrganizationAddressesPageProps {
  params: { organizationId: string };
}

const AddressesPage = async ({ params }: OrganizationAddressesPageProps) => {
  const getLegalAddressesByLegalIdResponse = await getLegalAddressesByLegalId({
    params: { legalId: params.organizationId }
  });

  return (
    <>
      <div className='flex justify-between'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.addresses.title' />
        </Typography>
        <ActionAddressDialog
          actionType='add'
          trigger={
            <Button variant='light' className='mx-2 p-5' size='sm'>
              <PlusCircledIcon className='mr-2 h-4 w-4' />
              <I18nText path='button.addAddress' />
            </Button>
          }
        />
      </div>
      <div className='gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
        {getLegalAddressesByLegalIdResponse.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </>
  );
};

export default AddressesPage;
