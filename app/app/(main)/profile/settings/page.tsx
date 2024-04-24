import { Building2Icon, ChevronLeftIcon, LogOutIcon, SmilePlusIcon } from 'lucide-react';

import { BackButton } from '@/components/buttons';
import { I18nText } from '@/components/common';
import { Button, Switch, Typography } from '@/components/ui';

import { ProfileSettingsLink } from './(components)/ProfileSettingsLink/ProfileSettingsLink';

const AppProfileSettingsPage = () => (
  <div className='px-5 py-9'>
    <BackButton variant='outline' size='icon' className='absolute left-4 top-8 lg:hidden'>
      <ChevronLeftIcon />
    </BackButton>
    <Typography variant='h4' className='text-center font-semibold'>
      <I18nText path='app.profile.settings.title' />
    </Typography>
    <ProfileSettingsLink />
    <hr className='mb-3 mt-5' />
    <div>
      <Typography variant='body3' className='font-medium text-taiga'>
        <I18nText path='app.profile.settings.location' />
      </Typography>
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <Building2Icon />
        <Typography variant='body3' className='text-foreground'>
          г. Новосибирск
        </Typography>
      </div>
    </div>
    <hr className='my-3' />
    <div>
      <Typography variant='body3' className='font-medium text-taiga'>
        <I18nText path='app.profile.settings.app' />
      </Typography>
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <SmilePlusIcon />
        <Typography variant='body3' className='flex-grow text-foreground'>
          <I18nText path='app.profile.settings.opekun' />
        </Typography>
        <Switch />
      </div>
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <SmilePlusIcon />
        <Typography variant='body3' className='flex-grow text-foreground'>
          <I18nText path='app.profile.settings.theme' />
        </Typography>
        <Switch />
      </div>
    </div>
    <hr className='mb-4 mt-3' />
    <div>
      <Typography variant='body3' className='font-medium text-taiga'>
        <I18nText path='app.profile.settings.app' />
      </Typography>
      <Button variant='link' className='mt-3 flex h-auto items-center gap-4 py-3 pl-1 font-normal'>
        <LogOutIcon className='stroke-[#EB5757]' />
        <I18nText path='button.logout' />
      </Button>
    </div>
  </div>
);

export default AppProfileSettingsPage;
