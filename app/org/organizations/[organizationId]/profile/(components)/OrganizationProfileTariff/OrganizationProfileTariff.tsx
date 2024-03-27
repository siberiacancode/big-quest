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
import { getTariffByLegalEntityId } from '@/utils/api';
import { getDateFromDateTime } from '@/utils/helpers';

import { EditOrganizationTariffDialog } from './EditOrganizationTariffDialog/EditOrganizationTariffDialog';

export interface OrganizationProfileTariffProps {
  organization: OrganizationResponse;
}

export const OrganizationProfileTariff = async ({
  organization
}: OrganizationProfileTariffProps) => {
  const tariff = await getTariffByLegalEntityId({
    params: { id: organization.id },
    config: {
      cache: 'no-cache'
    }
  });

  return (
    <InfoCard>
      <InfoCardHeader className='p-5'>
        <InfoCardTitle>
          <Typography variant='h5' tag='p'>
            <I18nText path='organization.profile.tariff.title' />{' '}
            {tariff.totalPrice || <I18nText path='organization.profile.tariff.free' />}
          </Typography>
        </InfoCardTitle>
        <InfoCardAction className='bg-transparent '>
          <EditOrganizationTariffDialog
            organization={organization}
            tariff={tariff}
            trigger={
              <Button variant='ghost' className='p-2'>
                <I18nText path='button.updateTariff' />
              </Button>
            }
          />
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent className='mt-3 flex w-full justify-center'>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              {tariff.freeActivity + tariff.paidActivity}
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
              {tariff.paidActivity}
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
              {!!tariff.dateEnd && getDateFromDateTime(tariff.dateEnd).replaceAll('-', '.')}
              {!tariff.dateEnd && <InfinityIcon className='my-1 size-6' />}
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
