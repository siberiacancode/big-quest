'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

import { I18nText, Logo } from '@/components/common';
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';
import { useHeader } from '@/utils/hooks';

export const Header = () => {
  const [isOpen, onBurgerClick] = useHeader();

  return (
    <header className='fixed z-10 flex h-[100px] w-full items-center justify-between border-b border-taiga bg-white px-16 mdx:h-[80px] mdx:px-11 xsx:px-5'>
      <div className='flex-grow'>
        <Logo className='fill-taiga mdx:hidden' />
        <Logo full={false} className='fill-taiga md:hidden' />
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
          <Select value='г. Томск'>
            <SelectTrigger className='h-8 w-48'>
              <SelectValue placeholder='г. Томск' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='г. Томск'>Томск</SelectItem>
            </SelectContent>
          </Select>
          <Link href={ROUTES.AUTH} className='hover:underline'>
            <I18nText path='button.organizationsEntrance' />
          </Link>
        </div>
      </div>
    </header>
  );
};
