import { I18nText } from '@/components/common';

import { AddAddressDialog } from './components/AddAddressDialog/AddAddressDialog';
import { AddressesList } from './components/AddressesList/AddressesList';
import { addresses } from './components/AddressesList/constants/fakeData';

const Addresses = () => (
  <>
    <div className='flex justify-between'>
      <h3 className='text-lg font-bold'>
        <I18nText path='partners.addresses.title' />
      </h3>
      <AddAddressDialog />
    </div>
    <AddressesList addresses={addresses} />
  </>
);

export default Addresses;
