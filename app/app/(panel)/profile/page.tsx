import { SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/assets/images/avatar/participant.png';
import { I18nText, QrCode } from '@/components/common';
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
    <Card className='mx-auto mt-6 max-w-[343px] shadow-lg'>
      <CardContent className='px-5 py-8'>
        <div className='flex gap-4'>
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

        <div className='mx-auto mt-8 size-[230px] overflow-hidden rounded-lg xxs:size-[300px]'>
          <QrCode
            text='https://www.google.com/'
            options={{
              margin: 5,
              color: {
                light: '#219653',
                dark: '#FFFFFF'
              }
            }}
          />
        </div>
        <div className='mt-6 flex gap-4'>
          <Card className='basis-1/2'>
            <CardContent className='flex items-center justify-center gap-3 px-3 py-[18px]'>
              <BumpIcon />
              <Typography variant='h7'>-</Typography>
            </CardContent>
          </Card>
          <Card className='basis-1/2'>
            <CardContent className='flex items-center justify-center gap-3 px-3 py-[18px]'>
              <NutIcon />
              <Typography variant='h7'>-</Typography>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AppProfilePage;
