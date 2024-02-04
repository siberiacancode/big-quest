import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { AddressesList } from './components/AddressesList/AddressesList';

const PartnerPage = () => (
  <>
    <div className='flex'>
      <h3 className='text-lg font-bold'>
        <I18nText path='partners.addresses.title' />
      </h3>
      <Dialog>
        <DialogTrigger>
          <Button
            variant='secondary'
            className='mx-2 bg-background p-5 font-medium hover:bg-background md:ml-auto'
            size='sm'
          >
            <PlusCircledIcon className='mr-2 h-4 w-4' />
            <I18nText path='button.addAddress' />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
    <AddressesList />
  </>
);

export default PartnerPage;
