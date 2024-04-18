import { SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/assets/images/avatar/participant.png';
import { I18nText } from '@/components/common';
import { BumpIcon, NutIcon } from '@/components/icons';
import { Card, CardContent, Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

const AppProfilePage = () => (
  <div className='px-4 pt-[42px]'>
    <div className='flex items-center justify-between'>
      <Typography>
        <I18nText path='app.profile.title' />
      </Typography>
      <Link href={ROUTES.APP.SETTINGS}>
        <SettingsIcon />
      </Link>
    </div>
    <div className='mt-[30px] flex gap-4'>
      <Image src={avatar} alt='' width={80} height={80} />
      <div className=''>
        <Typography variant='sub3'>ФИО</Typography>
        <Typography variant='body4' className='mt-[10px] text-muted-foreground'>
          <I18nText path='app.profile.passportId' /> -
        </Typography>
        <Typography variant='body4' className='mt-[5px] text-muted-foreground'>
          <I18nText path='app.profile.userId' />{' '}
          <Typography variant='body4' tag='span' className='font-medium text-muted-foreground'>
            @7654Qwerty
          </Typography>
        </Typography>
      </div>
    </div>
    <div className='mt-6 flex gap-[15px]'>
      <Card className='basis-1/2'>
        <CardContent className='flex items-center gap-2 px-3 py-4'>
          <BumpIcon />
          <div className='flex flex-col'>
            <Typography variant='h7'>-</Typography>
            <Typography variant='body4' className='text-muted-foreground'>
              <I18nText path='app.profile.bumps' />
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className='basis-1/2'>
        <CardContent className='flex items-center gap-2 px-3 py-4'>
          <NutIcon />
          <div className='flex flex-col'>
            <Typography variant='h7'>-</Typography>
            <Typography variant='body4' className='text-muted-foreground'>
              <I18nText path='app.profile.nuts' />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
    <Card className='mt-14'>
      <CardContent className='p-4'>{/* QR */}</CardContent>
    </Card>
  </div>
);

export default AppProfilePage;
