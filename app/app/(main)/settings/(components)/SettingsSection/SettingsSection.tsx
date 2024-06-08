'use client';

import { SmilePlusIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { MoonIcon } from '@/components/icons';
import { Label, Switch, Typography } from '@/components/ui';

import { useSettingsSection } from './hooks/useSettingsSection';

interface SettingsSectionProps {
  role: $TSFIXME;
  hasChildren: boolean;
}

export const SettingsSection = ({ role, hasChildren }: SettingsSectionProps) => {
  const { state, functions } = useSettingsSection();

  return (
    <section>
      <Typography variant='sub4' className='text-taiga'>
        <I18nText path='app.profile.settings.title' />
      </Typography>
      {role !== 'CHILD' && (
        <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
          <SmilePlusIcon />
          <Label htmlFor='parent-switch' className='flex-grow'>
            <Typography variant='body3' className='text-foreground'>
              <I18nText path='app.profile.settings.parent' />
            </Typography>
          </Label>
          <Switch
            id='parent-switch'
            className='data-[state=checked]:bg-taiga'
            defaultChecked={role === 'PARENT'}
            disabled={hasChildren}
            onClick={functions.toggleIsParent}
          />
        </div>
      )}
      <div className='mt-3 flex items-center gap-4 px-[6px] py-3'>
        <MoonIcon className='fill-foreground' />
        <Label htmlFor='theme-switch' className='flex-grow'>
          <Typography variant='body3' className='text-foreground'>
            <I18nText path='app.profile.settings.theme' />
          </Typography>
        </Label>
        <Switch
          id='theme-switch'
          className='data-[state=checked]:bg-taiga'
          defaultChecked={state.isDarkTheme}
          onClick={functions.toggleTheme}
        />
      </div>
    </section>
  );
};
