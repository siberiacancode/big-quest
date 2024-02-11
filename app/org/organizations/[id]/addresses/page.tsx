import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

import { AddAddressDialog } from './components/AddAddressDialog/AddAddressDialog';
import { AddressCard } from './components/AddressCard/AddressCard';
import { addresses } from './constants/fakeData';

const AddressesPage = () => (
  <>
    <div className='flex justify-between'>
      <h3 className='text-lg font-bold'>
        <I18nText path='partners.addresses.title' />
      </h3>
      <AddAddressDialog
        trigger={
          <Button variant='default' className='mx-2 p-5 font-medium' size='sm'>
            <PlusCircledIcon className='mr-2 h-4 w-4' />
            <I18nText path='button.addAddress' />
          </Button>
        }
      />
    </div>
    <div className='m-3 mt-4 flex flex-wrap justify-center gap-5'>
      {addresses.map((address, index) => (
        <AddressCard key={index} address={address} />
      ))}
    </div>
  </>
);

export default AddressesPage;
