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
  <header className='container z-20 flex max-w-[1160px] justify-between py-5'>
    <Logo href={ROUTES.LANDING.CITY(cityId)} className='fill-taiga' />

    <nav className='hidden items-center lg:flex'>
      <ul className='flex items-center gap-12'>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'banner' }}>
            <Typography variant='body2' className='text-muted-foreground hover:text-taiga'>
              <I18nText path='landing.navigation.banner' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'news' }}>
            <Typography variant='body2' className='text-muted-foreground hover:text-taiga'>
              <I18nText path='landing.navigation.news' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'activities' }}>
            <Typography variant='body2' className='text-muted-foreground hover:text-taiga'>
              <I18nText path='landing.navigation.activities' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'feedback' }}>
            <Typography variant='body2' className='text-muted-foreground hover:text-taiga'>
              <I18nText path='landing.navigation.feedback' />
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: ROUTES.LANDING.ROOT, hash: 'questions' }}>
            <Typography variant='body2' className='text-muted-foreground hover:text-taiga'>
              <I18nText path='landing.navigation.questions' />
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
    <div className='flex items-center justify-between gap-12 md:justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='flex items-center gap-2'>
            <Typography
              variant='body2'
              className='text-muted-foreground hover:text-taiga mdx:text-gray-two'
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
    </div>
  </header>
);
