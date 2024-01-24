import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
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
    value={link.id}
    className={cn(
      'relative rounded-md border-none px-3',
      isActive ? 'bg-secondary hover:bg-secondary/80' : 'bg-background hover:bg-secondary/80'
    )}
  >
    <AccordionTrigger className='py-3 hover:no-underline'>
      <div className={cn('flex items-center justify-between ')}>
        <div className='flex gap-3'>
          {link.icon}
          {link.text}
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className='flex flex-col items-center gap-3'>
      {link.subLinks?.map((subLink) => (
        <OpenedNavigationSubLink
          key={subLink.id}
          link={subLink}
          isActive={pathname === subLink.href}
        >
          {subLink.text}
        </OpenedNavigationSubLink>
      ))}
    </AccordionContent>
  </AccordionItem>
);
