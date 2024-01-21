import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

import { OpenedSidebarSubLink } from './OpenedSidebarSubLink';

interface SidebarSubLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
}

export const OpenedSidebarNestedLink = ({ link, pathname }: SidebarSubLinkProps) => (
  <AccordionItem
    value={link.id}
    className={cn(
      'relative rounded-md border-none px-4',
      pathname.startsWith(link.href)
        ? 'bg-secondary hover:bg-secondary/80'
        : 'bg-background hover:bg-secondary/80'
    )}
  >
    <AccordionTrigger className='py-2 hover:no-underline'>
      <div className={cn('flex items-center justify-between ')}>
        <div className='flex gap-3'>
          {link.icon}
          {link.text}
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className='flex flex-col items-center gap-3'>
      {link.subLinks?.map((subLink) => (
        <OpenedSidebarSubLink key={subLink.id} link={subLink} pathname={pathname}>
          {subLink.text}
        </OpenedSidebarSubLink>
      ))}
    </AccordionContent>
  </AccordionItem>
);
