import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Input } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { WorkingTimeBlock } from './components/WorkingTimeBlock/WorkingTimeBlock';

export const AddAddressDialog = () => (
  <Dialog>
    <DialogTrigger>
      <Button
        variant='secondary'
        className='mx-2 bg-background p-5 font-medium hover:bg-background '
        size='sm'
      >
        <PlusCircledIcon className='mr-2 h-4 w-4' />
        <I18nText path='button.addAddress' />
      </Button>
    </DialogTrigger>
    <DialogContent className='flex h-[550px] w-11/12 max-w-[713px] flex-col rounded-lg smx:h-fit'>
      <DialogHeader>
        <DialogTitle className='text-xl font-bold'>
          <I18nText path='addressModal.title.addAddress' />
        </DialogTitle>
      </DialogHeader>
      <div className='flex h-full flex-col items-end justify-between rounded-lg border p-5'>
        <div className='flex w-full smx:flex-col'>
          <div className='flex-1 items-center space-y-3'>
            <h3 className='font-medium'>
              <I18nText path='table.column.location' />
            </h3>
            <Select>
              <SelectTrigger className='w-[220px]'>
                <SelectValue placeholder='Выберите город' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Город</SelectLabel>
                  <SelectItem value='г. Новосибирск'>г. Новосибирск</SelectItem>
                  <SelectItem value='Moscow'>Moscow</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <h3 className='font-medium'>
              <I18nText path='addressCard.description.street' />,{' '}
              <I18nText path='addressCard.description.house' />
            </h3>
            <Input placeholder='ул.' className='max-w-[220px]' />
            <h3 className='font-medium'>
              <I18nText path='addressModal.description.coordinates' />
            </h3>
            <span className='text-sm font-normal'>53.688207, 88.078577</span>
          </div>
          <div className='flex-1 space-y-3'>
            <h3 className='font-medium'>
              <I18nText path='addressCard.description.details' />
            </h3>
            <Input placeholder='Офис, вход, этаж' className='max-w-[220px]' />
            <WorkingTimeBlock />
          </div>
        </div>

        <Button type='submit' variant='secondary'>
          <I18nText path='button.save' />
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);
