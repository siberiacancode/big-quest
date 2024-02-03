import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

import { AddressCard } from './components/AddressCard/AddressCard';

const PartnerPage = () => (
  <>
    <div className='flex'>
      <h3 className='text-lg font-bold'>Адреса</h3>
      <Button variant='outline' size='sm' className='mx-2 bg-secondary md:ml-auto'>
        <PlusCircledIcon className='mr-2 h-4 w-4' />
        <I18nText path='button.add' />
      </Button>
    </div>
    <div>
      <AddressCard />
    </div>
  </>
);

export default PartnerPage;
