'use client';

import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';
import { XIcon } from 'lucide-react';
import Image from 'next/image';

import participantAvatar from '@/assets/images/avatar/participant.png';
import { I18nText } from '@/components/common';
import { Dialog, DialogClose, DialogContent, Typography } from '@/components/ui';

import { SelectActivitySection } from '../SelectActivitySection/SelectActivitySection';

interface ConfirmParticipationDialogProps {
  userId: string;
  activities: OrganizationActivityFixMe[];
}

const ConfirmParticipationDialog = ({ userId, activities }: ConfirmParticipationDialogProps) => (
  <Dialog defaultOpen>
    <DialogContent
      onInteractOutside={(e) => e.preventDefault()}
      className='h-screen w-screen overflow-y-auto md:max-h-[700px] md:max-w-[500px]'
    >
      <DialogClose>
        <XIcon className='size-6' />
      </DialogClose>
      <div className='flex h-full flex-col'>
        <Typography tag='h2' className='text-center font-semibold'>
          {fns.format(new Date(), 'dd MMMM yyyy', { locale: fnsLocale.ru })}
        </Typography>
        <div className='mt-8'>
          <Typography variant='h7' className='text-gray-two'>
            <I18nText path='partner.confirmParticipation.participant' />
          </Typography>
          <div className='mt-6 flex items-center gap-3'>
            {/* // TODO add request to get user using userId from searchParams */}
            <Image src={participantAvatar} alt='' className='size-10 rounded-full' />
            <div className='flex grow flex-col justify-between'>
              <Typography variant='sub3'>Имя Фамилия</Typography>
              <Typography variant='body4' className='text-muted-foreground'>
                12 лет
              </Typography>
            </div>
          </div>
        </div>

        <div className='mt-8 grow'>
          <SelectActivitySection userId={userId} activities={activities} />
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ConfirmParticipationDialog;
