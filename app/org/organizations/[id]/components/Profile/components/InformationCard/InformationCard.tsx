import { Edit3Icon, TrendingUpIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle
} from '@/components/ui';

export const InformationCard = () => {
  return (
    <InfoCard className='w-1/2'>
      <InfoCardHeader>
        <InfoCardTitle className='text-lg	 font-bold	'>
          <I18nText path='organization.profile.information.name' />
        </InfoCardTitle>
        <InfoCardAction className='rounded-none bg-transparent'>
          <Edit3Icon size={20} strokeWidth={1.5} />
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent>
        <InfoCardItem>
          <InfoCardItemTitle>560</InfoCardItemTitle>
          <InfoCardItemDescription className='flex gap-1'>
            <TrendingUpIcon size={14} /> +24 <I18nText path='infoCard.description.perMonth' />
          </InfoCardItemDescription>
        </InfoCardItem>
      </InfoCardContent>
    </InfoCard>
  );
};
