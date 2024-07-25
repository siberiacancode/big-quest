import Image from 'next/image';

import type { OrganizationResponse } from '@/api-types';
import avatar from '@/assets/images/avatar/organization.png';
import background from '@/assets/images/background/organization.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { OrganizationHeaderTabs } from './components/OrganizationHeaderTabs/OrganizationHeaderTabs';

interface OrganizationHeaderProps {
  organization: OrganizationResponse;
}

export const OrganizationHeader = ({ organization }: OrganizationHeaderProps) => (
  <div className='flex flex-wrap gap-2'>
    <div className='relative flex h-64 w-full flex-col items-center'>
      <Image
        priority={false}
        className='h-[168px] w-full rounded-lg'
        src={organization.background || background}
        alt='org-background'
      />
      <div className='absolute bottom-0 mx-4 mt-auto h-36 w-[96%] rounded-lg border-none bg-background/70 pb-4 pl-4 pr-4 pt-3 shadow-sm backdrop-blur-lg'>
        <div className='flex gap-5'>
          <Image
            priority={false}
            className='h-20 w-20 rounded border-none'
            width={80}
            height={80}
            src={organization.avatar || avatar}
            alt='org-background'
          />
          <div className='flex flex-col justify-center text-sm'>
            <Typography variant='h7' tag='h6'>
              {organization.name}
            </Typography>
            <Typography variant='sub5' tag='p' className='text-muted-foreground'>
              <I18nText
                path={`organization.stage.${organization.stage.toLowerCase()}` as LocaleMessageId}
              />
            </Typography>
          </div>
        </div>
        <OrganizationHeaderTabs organization={organization} />
      </div>
    </div>
  </div>
);
