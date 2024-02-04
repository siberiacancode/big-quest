import { I18nText } from '@/components/common';
import { Input } from '@/components/ui';

export const WorkingTimeBlock = () => (
  <div>
    <h3 className='font-medium'>
      <I18nText path='addressCard.description.workingTime' />
    </h3>
    <div className='mt-3 flex'>
      <div className='w-6 rounded-md bg-gray-two p-1 px-1.5 text-center text-[10px] text-white '>
        Пн
      </div>
      <div>
        <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='8:30' />
      </div>
      <I18nText path='addressModal.description.untill' />
      <div>
        <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='17:30' />
      </div>
    </div>
    <div className='mt-3 flex'>
      <div className='w-6 rounded-md bg-gray-two p-1 px-1.5 text-center text-[10px] text-white '>
        Вт
      </div>
      <div>
        <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='8:30' />
      </div>
      <I18nText path='addressModal.description.untill' />
      <div>
        <Input className='mx-2 h-6 w-11 border-0 border-b p-1' placeholder='17:30' />
      </div>
    </div>
  </div>
);
