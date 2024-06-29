'use client';

import { LogOutIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

import { useAppSection } from './hooks/useAppSection';

export const AppSection = () => {
  const { functions } = useAppSection();

  return (
    <section>
      <Typography variant='body3' className='font-medium text-taiga'>
        <I18nText path='page.app.profile.settings.app' />
      </Typography>
      <Button
        variant='link'
        onClick={functions.onLogoutClick}
        className='mt-3 flex h-auto items-center gap-4 py-3 pl-1 font-normal'
      >
        <LogOutIcon className='stroke-[#EB5757]' />
        <I18nText path='button.logout' />
      </Button>
    </section>
  );
};
