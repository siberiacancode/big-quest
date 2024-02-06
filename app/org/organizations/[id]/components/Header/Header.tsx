import Image from 'next/image';

import organizationBackground from '@/assets/images/organizationBackground.png';
import { TabsList } from '@/components/ui';
import type { Organization } from '@/utils/api/types/types';
import { ORG_PROFILE_LINKS } from '@/utils/constants/profile/profileOptions';

import { TabsTriggerWithIcon } from './components/TabsTriggerWithIcon/TabsTriggerWithIcon';

interface HeaderProps {
  organization: Organization;
}

export const Header = ({ organization }: HeaderProps) => {
  return (
    <div className='flex flex-wrap gap-2'>
      <div className='relative mt-2.5 flex h-64 w-full flex-col items-center'>
        <Image
          priority={false}
          className='h-[168px] w-full'
          src={organizationBackground}
          alt='org-background'
        />
        <div className='absolute bottom-0 mx-4 mt-auto h-36 w-[96%] rounded-lg border-none bg-background/70 pb-4 pl-4 pr-4 pt-3 shadow-sm backdrop-blur-lg'>
          <div className='flex'>
            <Image
              priority={false}
              className='h-20 w-20 rounded border-none'
              src={organizationBackground}
              alt='org-background'
            />
            <div className='ml-5 flex flex-col justify-center'>
              <p className='text-lg font-bold text-muted-foreground'>{organization.name} </p>
              <p className='text-sm font-medium text-muted-foreground'>
                {organization.stage === 'REQUEST' ? 'Запрос' : 'Сотрудничество'}
              </p>
            </div>
          </div>
          <div>
            <TabsList className='items-top text-organization-tabs flex w-full justify-end gap-1 bg-transparent'>
              {organization.type === 'PARTNER' ? (
                ORG_PROFILE_LINKS.map((tab) => (
                  <TabsTriggerWithIcon value={tab.value} icon={tab.icon} title={tab.title} />
                ))
              ) : (
                <TabsTriggerWithIcon
                  value={ORG_PROFILE_LINKS[0].value}
                  icon={ORG_PROFILE_LINKS[0].icon}
                  title={ORG_PROFILE_LINKS[0].title}
                />
              )}
            </TabsList>
          </div>
        </div>
      </div>
    </div>
  );
};
