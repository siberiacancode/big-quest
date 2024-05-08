import * as fns from 'date-fns';
import * as fnsLocale from 'date-fns/locale';

import { I18nText } from '@/components/common';
import { Dialog, Typography } from '@/components/ui';
import { getOrganizationActivities } from '@/utils/api';

import { SelectActivitySection } from './(components)/SelectActivitySection/SelectActivitySection';

interface PartnerConfirmParticipationPageProps {
  searchParams: { userId?: string };
  params: { organizationId: string };
}

const PartnerConfirmParticipationPage = async ({
  params
}: PartnerConfirmParticipationPageProps) => {
  const [getOrganizationActivitiesResponse] = await Promise.all([
    getOrganizationActivities({
      params: { id: params.organizationId }
    })
  ]);

  return (
    <Dialog>
      <div className='flex items-center justify-center bg-white'>
        <div className='flex flex-col'>
          <Typography className='text-center font-semibold'>
            {fns.format(new Date(), 'dd MMMM yyyy', { locale: fnsLocale.ru })}
          </Typography>
          <div className='mt-8'>
            <Typography variant='h7' className='text-gray-two'>
              <I18nText path='partner.confirmParticipation.participant' />
            </Typography>
            <div className='mt-6'>{/*  */}</div>
          </div>

          <div className='mt-8 grow'>
            <SelectActivitySection activities={getOrganizationActivitiesResponse} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PartnerConfirmParticipationPage;
