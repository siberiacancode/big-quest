import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { CITIES, ROUTES } from '@/utils/constants';

interface HeaderProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const Header = ({ cityId }: HeaderProps) => (
  <header className='container flex justify-between py-[52px] 2xlx:gap-8 2xlx:py-10 2xsx:py-6 2xl:gap-[80px]'>
    <div>
      <Logo href={ROUTES.LANDING.CITY(cityId)} className='fill-taiga' />
    </div>

    <nav className='flex flex-grow items-center xlx:ml-0 xlx:hidden'>
      <ul className='flex gap-12'>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'banner' }}>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              <I18nText path='landing.navigation.banner' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'news' }}>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              <I18nText path='landing.navigation.news' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'activities' }}>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              <I18nText path='landing.navigation.activities' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'feedback' }}>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              <I18nText path='landing.navigation.feedback' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'questions' }}>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              <I18nText path='landing.navigation.questions' />
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
    <div className='flex items-center justify-between xlx:gap-12 md:justify-end xl:gap-12'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='flex items-center gap-2'>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:font-semibold hover:text-taiga'
            >
              {CITIES[cityId.toUpperCase()].name}
            </Typography>
            <ChevronDownIcon className='h-4 w-4' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.values(CITIES).map((city) => (
            <Link
              key={city.id}
              href={city.id === 'novosibirsk' ? ROUTES.LANDING.ROOT : ROUTES.LANDING.CITY(city.id)}
            >
              <DropdownMenuItem key={city.id} className={cn({ 'text-taiga': city.id === cityId })}>
                {city.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='2xsx:hidden'>
        <Link href={ROUTES.ORG.AUTH}>
          <Typography
            variant='body2'
            className='text-muted-foreground hover:font-semibold hover:text-taiga'
          >
            <I18nText path='button.organizationsEntrance' />
          </Typography>
        </Link>
      </div>
    </div>
  </header>
);
