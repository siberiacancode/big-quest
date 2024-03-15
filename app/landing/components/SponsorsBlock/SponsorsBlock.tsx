import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const SponsorsBlock = () => {
  return (
    <div>
      <Typography variant='h2'>
        <I18nText path='landing.sponsors.title' />
      </Typography>
    </div>
  );
};
