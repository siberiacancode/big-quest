import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getUserProfile } from '@/utils/api';
import { ROUTES } from '@/utils/constants';

import { ProfileEditForm } from './(components)/ProfileEditForm/ProfileEditForm';

const ProfileEditPage = async () => {
  const getUserProfileResponse = await getUserProfile({ config: { cache: 'no-store' } });

  return (
    <div className='px-4 pt-8'>
      <div className='flex text-nowrap'>
        <Link
          href={ROUTES.APP.ACTIVITIES}
          className={cn(buttonVariants({ variant: 'link' }), 'absolute')}
        >
          <ChevronLeftIcon size={32} className='rounded-md border' />
        </Link>
        <Typography variant='h6' className='flex-grow text-center font-semibold'>
          <I18nText path='app.profile.edit.title' />
        </Typography>
      </div>
      <div className='mt-4 flex-col items-center space-y-4'>
        <ProfileEditForm user={getUserProfileResponse} />
      </div>
    </div>
  );
};

export default ProfileEditPage;
