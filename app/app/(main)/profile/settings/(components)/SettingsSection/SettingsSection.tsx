'use client';

import { SmilePlusIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { MoonIcon } from '@/components/icons';
import { Label, Switch, Typography } from '@/components/ui';

import { useSettingsSection } from './hooks/useSettingsSection';

interface SettingsSectionProps {
  isParent: boolean;
  hasChildren: boolean;
}

export const SettingsSection = ({ isParent, hasChildren }: SettingsSectionProps) => {
  const { state, functions } = useSettingsSection();

  return (
    <div>
      <Typography variant='body3' className='font-medium text-taiga'>
        <I18nText path='app.profile.settings.title' />
      </Typography>
      <form>
        <fieldset className='mt-3 flex items-center gap-4 px-[6px] py-3'>
          <SmilePlusIcon />
          <Label htmlFor='parent-switch' className='flex-grow'>
            <Typography variant='body3' className='text-foreground'>
              <I18nText path='app.profile.settings.parent' />
            </Typography>
          </Label>
          <Switch
            id='parent-switch'
            className='data-[state=checked]:bg-taiga'
            defaultChecked={isParent}
            disabled={hasChildren}
            onClick={functions.toggleIsParent}
          />
        </fieldset>
      </form>
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
    </div>
  );
};
