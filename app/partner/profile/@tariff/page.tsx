import * as fns from 'date-fns';
import { InfinityIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle,
  Typography
} from '@/components/ui';
import { getOrganizationCurrent, getTariffByLegalEntityId } from '@/utils/api';

import { EditOrganizationTariffDialog } from './components/EditOrganizationTariffDialog/EditOrganizationTariffDialog';

const PartnerProfileTariffPage = async () => {
  const getOrganizationCurrentResponse = await getOrganizationCurrent({
    config: { cache: 'no-store' }
  });

  const getTariffByLegalEntityIdResponse = await getTariffByLegalEntityId({
    params: { legalEntityId: getOrganizationCurrentResponse.id },
    config: {
      cache: 'no-store'
    }
  });

  return (
    <InfoCard>
      <InfoCardHeader className='p-5'>
        <InfoCardTitle>
          <Typography variant='h5' tag='p'>
            <I18nText path='organization.profile.tariff.title' />{' '}
            {getTariffByLegalEntityIdResponse.totalPrice !== '0' &&
              getTariffByLegalEntityIdResponse.totalPrice}
            {getTariffByLegalEntityIdResponse.totalPrice === '0' && (
              <I18nText path='organization.profile.tariff.free' />
            )}
          </Typography>
        </InfoCardTitle>
        <InfoCardAction className='bg-transparent '>
          <EditOrganizationTariffDialog
            tariff={getTariffByLegalEntityIdResponse}
            trigger={
              <Button variant='ghost' className='p-2 text-muted-foreground'>
                <I18nText path='button.updateTariff' />
              </Button>
            }
          />
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent className='mt-1 flex w-full justify-center'>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              {getTariffByLegalEntityIdResponse.freeActivity +
                getTariffByLegalEntityIdResponse.paidActivity}
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.activity' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              {getTariffByLegalEntityIdResponse.paidActivity}
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.paid' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
        <InfoCardItem className='flex flex-col items-center justify-between border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              {!!getTariffByLegalEntityIdResponse.dateEnd &&
                fns.format(getTariffByLegalEntityIdResponse.dateEnd, 'dd.MM.yy')}
              {!getTariffByLegalEntityIdResponse.dateEnd && (
                <InfinityIcon className='my-1 size-6' />
              )}
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.valid' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
      </InfoCardContent>
    </InfoCard>
  );
};

export default PartnerProfileTariffPage;
