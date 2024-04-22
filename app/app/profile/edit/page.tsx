import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { Input, Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

const ProfileEditPage = () => (
  <div className='px-5 py-9'>
    <div className='flex items-center justify-center'>
      <Link href={ROUTES.APP.PROFILE}>
        <ChevronLeftIcon />
      </Link>
      <Typography>
        <I18nText path='app.profile.edit.title' />
      </Typography>
    </div>
    <div className='mt-6'>
      <div className='mb-2 flex flex-col items-center'>
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
        <div>
          <I18nText path='field.surname.label' />
          <Input />
        </div>
        <div>
          <I18nText path='field.name.label' />
          <Input />
        </div>
        <div>
          <I18nText path='field.surname.label' />
          <Input />
        </div>
        <div>
          <I18nText path='app.profile.edit.birthdate.title' />
          <Input />
        </div>
        <div>
          <I18nText path='app.profile.edit.userID.title' />
          <Input />
          <Typography variant='body3' tag='p' className='flex-1'>
            <I18nText path='app.profile.edit.userID.description' />
          </Typography>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileEditPage;
