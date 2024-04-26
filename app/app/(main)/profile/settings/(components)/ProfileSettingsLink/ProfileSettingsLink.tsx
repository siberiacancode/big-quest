import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/assets/images/avatar/participant.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

interface ProfileSettingsLinkProps {
  id: string;
  userId: string;
  name: string;
  surname: string;
}

export const ProfileSettingsLink = ({ id, name, surname, userId }: ProfileSettingsLinkProps) => (
  <Link href={ROUTES.APP.PROFILE.EDIT(id)} className='mt-5 flex w-full items-center'>
    <Image src={avatar} alt='' width={48} height={48} />
    <div className='ml-4 mr-6 flex-grow'>
      <Typography variant='sub3'>
        {name} {surname}
      </Typography>
      <Typography variant='body3'>
        <I18nText path='app.profile.userId' />:{' '}
        <Typography variant='body3' tag='span' className='font-medium'>
          {userId}
        </Typography>
      </Typography>
    </div>
    <ChevronRightIcon />
  </Link>
);
