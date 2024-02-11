import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { VkIcon } from '@/assets/icons/organization';
import { cn } from '@/lib/utils';

const OrganizationProfileCardInfo = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center ', className)} {...props} />
  )
);
OrganizationProfileCardInfo.displayName = 'OrganizationProfileCardInfo';

const OrganizationProfileCardInfoTitle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<'p'>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('mr-[10px] font-bold', className)} {...props} />
));
OrganizationProfileCardInfoTitle.displayName = 'OrganizationProfileCardInfoTitle';

const OrganizationProfileCardInfoContent = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<'p'>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-muted-foreground', className)} {...props} />
));

interface OrganizationProfileCardSocialIconsProps extends React.ComponentPropsWithRef<'svg'> {
  link: string;
}

const OrganizationProfileCardInfoIcon = React.forwardRef<
  SVGSVGElement,
  OrganizationProfileCardSocialIconsProps
>(({ link, ...props }, ref) => (
  <Link href={link}>
    {link.includes('vk.com') && (
      <VkIcon ref={ref} className='text-muted-foreground hover:text-foreground' {...props} />
    )}

    {!link.includes('vk.com') && (
      <span className=' flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground p-[1px] hover:bg-foreground'>
        <Link2Icon className='h-[10px] w-[10px] text-background' />
      </span>
    )}
  </Link>
));

export {
  OrganizationProfileCardInfo,
  OrganizationProfileCardInfoContent,
  OrganizationProfileCardInfoIcon,
  OrganizationProfileCardInfoTitle
};
