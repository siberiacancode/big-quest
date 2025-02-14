import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { TelegramIcon, VkIcon, WhatsappIcon } from '../icons';

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

export const getSocial = (link: string): 'vk' | 'unknown' => {
  if (link.includes('vk.com')) return 'vk';
  return 'unknown';
};

const UnknownSocialIcon = () => (
  <span className='flex size-4 items-center justify-center rounded-full bg-muted-foreground p-[1px] hover:bg-foreground'>
    <Link2Icon className='h-[10px] w-[10px] text-background' />
  </span>
);

const SOCIAL_LINKS = {
  vk: VkIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsappIcon,
  unknown: UnknownSocialIcon
};

const OrganizationProfileCardInfoIcon = React.forwardRef<
  SVGSVGElement,
  OrganizationProfileCardSocialIconsProps
>(({ link, ...props }, ref) => {
  const SocialIcon = SOCIAL_LINKS[getSocial(link)];

  return (
    <Link href={link}>
      <SocialIcon
        ref={ref}
        className='size-4 text-muted-foreground hover:text-foreground'
        {...props}
      />
    </Link>
  );
});

export {
  OrganizationProfileCardInfo,
  OrganizationProfileCardInfoContent,
  OrganizationProfileCardInfoIcon,
  OrganizationProfileCardInfoTitle
};
