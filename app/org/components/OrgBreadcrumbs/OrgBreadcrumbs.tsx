'use client';

import { useParams, usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';

interface NextBreadcrumbsProps {
  idBreadcrumbs?: Record<string, string>;
}

export const OrgBreadcrumbs = ({ idBreadcrumbs = {} }: NextBreadcrumbsProps) => {
  const params = useParams();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  console.log(pathname);
  console.log(idBreadcrumbs, params);

  return (
    <Breadcrumbs>
      {pathnames.map((path, index) => {
        const isId = /[0-9]/.test(path);
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const translateHref = href.replaceAll('/', '.');

        return (
          <BreadcrumbItem key={href} href={href}>
            {isId && 'id'}
            {!isId && <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
