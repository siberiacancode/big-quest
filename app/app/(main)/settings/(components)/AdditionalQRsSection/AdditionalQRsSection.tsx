'use client';

import { PlusIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

import { ProfileSettingsLink } from '../ProfileSettingsLink/ProfileSettingsLink';

import { useAdditionalQRsSection } from './hooks/useAdditionalQRsSection';

interface AdditionalQRsSectionProps {
  children: $TSFIXME[];
}

export const AdditionalQRsSection = ({ children }: AdditionalQRsSectionProps) => {
  const { functions } = useAdditionalQRsSection();

  return (
    <section>
      <Typography variant='body3' className='mb-4 font-medium text-taiga'>
        <I18nText path='page.app.profile.settings.additionalQRs' />
      </Typography>
      {children.map((child) => (
        <ProfileSettingsLink key={child.id} {...child} />
      ))}
      <Button
        variant='outline'
        size='lg'
        onClick={functions.onAddQRClick}
        className='mt-4 w-full gap-3'
      >
        <PlusIcon className='stroke-muted-foreground' />
        <Typography variant='body3'>
          <I18nText path='button.addQR' />
        </Typography>
      </Button>
    </section>
  );
};
