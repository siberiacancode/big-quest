'use client';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

const Error = () => (
  <div>
    <Typography tag='h1' variant='h1'>
      <I18nText path='app.error' />
    </Typography>
  </div>
);

export default Error;
