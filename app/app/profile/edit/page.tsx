'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { getUserProfile } from './(components)/ProfileEditForm/constants/getUserProfile';
import { ProfileEditForm } from './(components)/ProfileEditForm/ProfileEditForm';

const ProfileEditPage = () => {
  const getUserProfileResponse = getUserProfile;

  return (
    <div className='px-5 py-9'>
      <div className='grid grid-cols-4 text-nowrap'>
        <Link href={ROUTES.APP.PROFILE}>
          <ChevronLeftIcon size={30} className='rounded-md border' />
        </Link>
        <Typography>
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
