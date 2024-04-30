import { ChevronLeftIcon } from 'lucide-react';

import { BackButton } from '@/components/buttons';
import { I18nText } from '@/components/common';
import { CityIcon } from '@/components/icons';
import { Typography } from '@/components/ui';
import { getUserProfileSettings } from '@/utils/api';

import { AdditionalQRsSection } from './(components)/AdditionalQRsSection/AdditionalQRsSection';
import { AppSection } from './(components)/AppSection/AppSection';
import { ProfileSettingsLink } from './(components)/ProfileSettingsLink/ProfileSettingsLink';
import { SettingsSection } from './(components)/SettingsSection/SettingsSection';

const AppProfileSettingsPage = async () => {
  const getUserProfileSettingsResponse = await getUserProfileSettings({
    config: { cache: 'no-store' }
  });

  return (
    <div className='px-4 py-8'>
      <BackButton
        variant='outline'
        size='icon'
        className='absolute left-4 top-8 z-10 size-8 bg-white lg:hidden'
      >
        <ChevronLeftIcon />
      </BackButton>
      <Typography tag='h1' className='text-center font-semibold'>
        <I18nText path='app.profile.settings.title' />
      </Typography>
      <ProfileSettingsLink {...getUserProfileSettingsResponse} />
      <hr className='mx-auto mb-3 mt-5 w-[90%] opacity-50' />
      {getUserProfileSettingsResponse.role === 'PARENT' && (
        <>
          <AdditionalQRsSection children={getUserProfileSettingsResponse.children} />
          <hr className='mx-auto my-3 w-[90%] opacity-50' />
        </>
      )}
      <div>
        <Typography variant='body3' className='font-medium text-taiga'>
          <I18nText path='app.profile.settings.location' />
        </Typography>
        <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
          <CityIcon className='stroke-foreground' squareClassName='fill-foreground' />
          <Typography variant='body3' className='text-foreground'>
            г. Новосибирск
          </Typography>
        </div>
      </div>
      <hr className='mx-auto my-3 w-[90%] opacity-50' />
      <SettingsSection
        role={getUserProfileSettingsResponse.role}
        hasChildren={!!getUserProfileSettingsResponse.children.length}
      />
      <hr className='mx-auto mb-4 mt-3 w-[90%] opacity-50' />
      <AppSection />
    </div>
  );
};

export default AppProfileSettingsPage;
