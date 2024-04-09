import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import {
  buttonVariants,
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
  <header className='container flex justify-between py-6'>
    <div className='hidden flex-grow md:block'>
      <Logo href={ROUTES.LANDING.CITY(cityId)} className='fill-taiga mdx:hidden' />
    </div>

    <div className='flex w-full justify-between gap-5 md:justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='flex items-center gap-2'>
            <Typography variant='sub1'>{CITIES[cityId.toUpperCase()].name}</Typography>
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
      <div>
        <Link href={ROUTES.ORG.AUTH} className={cn(buttonVariants({ variant: 'link' }), 'px-0')}>
          <Typography variant='sub1'>
            <I18nText path='button.organizationsEntrance' />
          </Typography>
        </Link>
      </div>
    </div>
  </header>
);
