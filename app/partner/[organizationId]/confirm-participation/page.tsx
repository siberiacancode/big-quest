import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { getOrganizationActivities } from '@/utils/api';

import { ActivityCard } from './(components)/ActivityCard/ActivityCard';

interface PartnerConfirmParticipationPageProps {
  searchParams: { userId?: string };
  params: { organizationId: string };
}

const PartnerConfirmParticipationPage = async ({
  searchParams,
  params
}: PartnerConfirmParticipationPageProps) => {
  const [getOrganizationActivitiesResponse] = await Promise.all([
    getOrganizationActivities({
      params: { id: params.organizationId }
    })
  ]);

  return (
    <div>
      <Typography className='font-semibold'>
        {fns.format(new Date(), 'dd MMMM yyyy', { locale: fnsLocale.ru })}
      </Typography>
      <div className='mt-8'>
        <Typography variant='h7' className='text-gray-two'>
          <I18nText path='partner.confirmParticipation.participant' />
        </Typography>
        <div className='mt-6'>{/*  */}</div>
      </div>

      <div className='mt-8'>
        <Typography variant='h7' className='text-gray-two'>
          <I18nText path='partner.confirmParticipation.activities' />
        </Typography>
        <div className='mt-6'>
          {getOrganizationActivitiesResponse.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerConfirmParticipationPage;
