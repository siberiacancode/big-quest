import React from 'react';

import { TelegramIcon, VkIcon, WhatsappIcon } from '@/components/icons/organization';
import { cn } from '@/lib/utils';

const OrganizationProfileCardInfo = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex', className)} {...props} />
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
  <>
    {link.includes('vk.com') && <VkIcon ref={ref} className='text-muted-foreground' {...props} />}
    {link.includes('t.me') && (
      <TelegramIcon ref={ref} className='text-muted-foreground' {...props} />
    )}
    {link.includes('wa.') && (
      <WhatsappIcon ref={ref} className='text-muted-foreground' {...props} />
    )}
  </>
));

export {
  OrganizationProfileCardInfo,
  OrganizationProfileCardInfoContent,
  OrganizationProfileCardInfoIcon,
  OrganizationProfileCardInfoTitle
};
