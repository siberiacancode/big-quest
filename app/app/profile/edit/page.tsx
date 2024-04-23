'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
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
      <div className='mt-6'>
        <div className='mb-2 flex flex-col items-center gap-3'>
          <div className='relative h-24 w-24'>
            <Image
              src='http://localhost:31299/api/1.0/static/employees/avatar.webp'
              fill
              alt='user'
              className='rounded-full'
            />
          </div>
          <Typography variant='body3' tag='p' className='flex-1'>
            <I18nText path='app.profile.edit.avatar.title' />
          </Typography>
        </div>
        <div className='mt-2 flex-col items-center space-y-4'>
          <ProfileEditForm user={getUserProfileResponse} />
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
