import { SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import avatar from '@/assets/images/avatar/participant.png';
import { I18nText, QRCode } from '@/components/common';
import { BumpIcon, NutIcon } from '@/components/icons';
import { Card, CardContent, Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

const AppProfilePage = () => (
  <div>
    <div className='flex items-center justify-between'>
      <Typography tag='h1' className='font-semibold'>
        <I18nText path='page.app.profile.title' />
      </Typography>
      <Link href={ROUTES.APP.SETTINGS}>
        <SettingsIcon />
      </Link>
    </div>
    <div className='mt-6'>
      <Card className='shadow-sm'>
        <CardContent className='px-5 py-8'>
          <div className='flex gap-4'>
            <Image src={avatar} alt='' width={80} height={80} />
            <div>
              <Typography variant='sub3'>ФИО</Typography>
              <Typography variant='body4' className='mt-2.5 text-muted-foreground'>
                <I18nText path='page.app.profile.passportId' /> -
              </Typography>
              <Typography variant='body4' className='mt-1.5 text-muted-foreground'>
                <I18nText path='page.app.profile.userId' />
                <Typography
                  variant='body4'
                  tag='span'
                  className='font-medium text-muted-foreground'
                >
                  @7654Qwerty
                </Typography>
              </Typography>
            </div>
          </div>

          <div className='mt-8 overflow-hidden rounded-xl'>
            <QRCode
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
  </div>
);

export default AppProfilePage;
