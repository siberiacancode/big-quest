import Image from 'next/image';

import organizationBackgroundImage from '@/assets/images/background/organization.png';
import logo from '@/assets/images/logo/organization.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { OrganizationHeaderTabs } from './components/OrganizationHeaderTabs/OrganizationHeaderTabs';

interface OrganizationHeaderProps {
  organization: OrganizationResponse;
}

export const OrganizationHeader = ({ organization }: OrganizationHeaderProps) => (
  <div className='flex flex-wrap gap-2'>
    <div className='relative mt-2.5 flex h-64 w-full flex-col items-center'>
      <Image
        priority={false}
        className='h-[168px] w-full rounded-lg object-cover'
        src={organization.background || organizationBackgroundImage}
        alt='org-background'
      />
      <div className='absolute bottom-0 mx-4 mt-auto h-36 w-[96%] rounded-lg border-none bg-background/70 pb-4 pl-4 pr-4 pt-3 shadow-sm backdrop-blur-lg'>
        <div className='flex gap-5'>
          <div>
            <Image
              priority={false}
              className='h-15 w-15 rounded border-none'
              width={60}
              height={60}
              src={organization.avatar || logo}
              alt='org-background'
            />
          </div>

          <div className='flex flex-col justify-center'>
            <Typography variant='h5' tag='h5'>
              {organization.name}
            </Typography>
            <Typography variant='sub3' tag='p' className='text-muted-foreground'>
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
