import { I18nText } from '@/components/common';

import { AddAddressDialog } from './components/AddAddressDialog/AddAddressDialog';
import { AddressesList } from './components/AddressesList/AddressesList';

const PartnerPage = () => (
  <>
    <div className='flex justify-between'>
      <h3 className='text-lg font-bold'>
        <I18nText path='partners.addresses.title' />
      </h3>
      <AddAddressDialog />
    </div>
    <AddressesList />
  </>
);

export default PartnerPage;
