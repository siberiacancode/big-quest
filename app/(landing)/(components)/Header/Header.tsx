'use client';

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import {
  Button,
  buttonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { CITIES, ROUTES } from '@/utils/constants';
import { useHeader } from '@/utils/hooks';

interface HeaderProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const Header = ({ cityId }: HeaderProps) => {
  const [isOpen, onBurgerClick] = useHeader();

  return (
    <header className='container flex w-full items-center justify-between bg-white px-16 mdx:h-[80px] mdx:px-11 xsx:px-5'>
      <div className='flex-grow'>
        <Logo href={ROUTES.LANDING.CITY(cityId)} className='fill-taiga mdx:hidden' />
        <Logo href={ROUTES.LANDING.CITY(cityId)} full={false} className='fill-taiga md:hidden' />
      </div>
      <Button
        className='relative z-20 rounded md:hidden'
        size='icon'
        variant='secondary'
        onClick={() => onBurgerClick()}
      >
        {isOpen && <XIcon />}
        {!isOpen && <MenuIcon />}
      </Button>
      <div
        className={cn(
          'mdx:fixed mdx:-top-[200%] mdx:left-0 mdx:right-0 mdx:flex mdx:min-h-screen mdx:items-center mdx:justify-center mdx:bg-white mdx:opacity-0 mdx:transition-all',
          isOpen && 'mdx:-top-0 mdx:opacity-100'
        )}
      >
        <div className='flex items-center gap-6 py-10 mdx:flex-col mdx:justify-center md:justify-end'>
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
                  href={
                    city.id === 'novosibirsk' ? ROUTES.LANDING.ROOT : ROUTES.LANDING.CITY(city.id)
                  }
                >
                  <DropdownMenuItem
                    key={city.id}
                    className={cn({ 'text-taiga': city.id === cityId })}
                  >
                    {city.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={ROUTES.ORG.AUTH} className={buttonVariants({ variant: 'link' })}>
            <Typography variant='sub1'>
              <I18nText path='button.organizationsEntrance' />
            </Typography>
          </Link>
        </div>
      </div>
    </header>
  );
};
