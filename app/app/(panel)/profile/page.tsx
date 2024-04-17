import { SettingsIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

const AppProfilePage = () => (
  <div>
    <div className='flex items-center justify-between'>
      <Typography>
        <I18nText path='app.profile.title' />
      </Typography>
      <SettingsIcon />
    </div>
  </div>
);

export default AppProfilePage;
