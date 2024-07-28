'use client';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

const Error = () => (
  <Typography variant='h1' tag='h1'>
    <I18nText path='site.error' />
  </Typography>
);

export default Error;
