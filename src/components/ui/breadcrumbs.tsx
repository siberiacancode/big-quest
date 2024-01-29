'use client';

import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const Breadcrumb = ({ className, ...props }: React.ComponentProps<'li'>) => (
  <li className={cn('flex items-center pb-4 lgx:p-3', className)} {...props} />
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbItem = ({ className, href, ...props }: React.ComponentProps<typeof Link>) => {
  const path = usePathname();
  const isCurrentPage = path === href;
  return isCurrentPage ? (
    <span className={cn('text-base font-medium text-muted-foreground', className)} {...props} />
  ) : (
    <Link
      className={cn('text-base font-medium text-muted-foreground', className)}
      href={href}
      {...props}
    />
  );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

const Breadcrumbs = ({ children, ...props }: React.ComponentProps<'li'>) => (
  <Breadcrumb {...props}>
    {React.Children.map(children, (child, index) => (
      <>
        {child}
        {index !== React.Children.count(children) - 1 && (
          <ChevronRightIcon className='mx-2 text-muted-foreground' />
        )}
      </>
    ))}
  </Breadcrumb>
);
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumb, BreadcrumbItem, Breadcrumbs };
