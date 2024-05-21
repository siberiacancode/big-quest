import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';
import Image from 'next/image';

import participantAvatar from '@/assets/images/avatar/participant.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getUserById } from '@/utils/api';

import { SelectScheduleSection } from './(components)/SelectScheduleSection/SelectScheduleSection';

interface OrganizationConfirmParticipationPageProps {
  searchParams: { userId?: string };
}

const OrganizationConfirmParticipationPage = async ({
  searchParams
}: OrganizationConfirmParticipationPageProps) => {
  const userId = searchParams.userId ?? '';
  const getUserByIdResponse = await getUserById({ params: { id: userId } });

  return (
    <div className='mt-5 flex h-full flex-col'>
      <Typography tag='h2' className='text-center font-semibold'>
        {fns.format(new Date(), 'dd MMMM yyyy', { locale: fnsLocale.ru })}
      </Typography>
      <div className='mt-8'>
        <Typography variant='h7' className='text-gray-two'>
          <I18nText path='partner.confirmParticipation.participant' />
        </Typography>
        <div className='mt-6 flex items-center gap-3'>
          <Image src={participantAvatar} alt='' className='size-10 rounded-full' />
          <div className='flex grow flex-col justify-between'>
            <Typography variant='sub3'>
              {getUserByIdResponse.surname} {getUserByIdResponse.name}
            </Typography>
            <Typography variant='body4' className='text-muted-foreground'>
              {getUserByIdResponse.age && (
                <I18nText path='common.age' values={{ age: getUserByIdResponse.age }} />
              )}
            </Typography>
          </div>
        </div>
      </div>

      <div className='mt-8 grow'>
        <SelectScheduleSection userId={userId} />
      </div>
    </div>
  );
};

export default OrganizationConfirmParticipationPage;
