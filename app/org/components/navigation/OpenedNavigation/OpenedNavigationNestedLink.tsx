import { I18nText } from '@/components/common';
import { AccordionContent, AccordionItem, AccordionTrigger, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import { OpenedNavigationSubLink } from './OpenedNavigationSubLink';

interface OpenedSidebarNestedLinkProps {
  link: NavigationLinkInfo;
  isActive: boolean;
  pathname: string;
}

export const OpenedNavigationNestedLink = ({
  link,
  isActive,
  pathname
}: OpenedSidebarNestedLinkProps) => (
  <AccordionItem
    value={link.href}
    className={cn(
      'relative rounded-md border-none px-3',
      isActive ? 'bg-secondary hover:bg-accent/80' : 'bg-background hover:bg-accent'
    )}
  >
    <AccordionTrigger className='py-3 hover:no-underline'>
      <div className={cn('flex items-center justify-between')}>
        <div className='flex gap-3'>
          {link.icon}
          <Typography variant='sub1' tag='p'>
            <I18nText path={link.text} />
          </Typography>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className='flex flex-col items-center gap-3'>
      {link.subLinks?.map((subLink, index) => (
        <OpenedNavigationSubLink key={index} link={subLink} isActive={pathname === subLink.href}>
          <Typography variant='sub1' tag='p'>
            <I18nText path={subLink.text} />
          </Typography>
        </OpenedNavigationSubLink>
      ))}
    </AccordionContent>
  </AccordionItem>
);
