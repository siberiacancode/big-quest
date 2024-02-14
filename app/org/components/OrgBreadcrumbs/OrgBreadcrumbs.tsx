'use client';

import { usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';

interface NextBreadcrumbsProps {
  idBreadcrumbs?: string;
}

const isId = (path) => /[0-9]/.test(path) || path.includes('-');

export const OrgBreadcrumbs = ({ idBreadcrumbs = 'id' }: NextBreadcrumbsProps) => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => !!path);
  pathnames.forEach((path, index) => {
    if (isId(path)) {
      pathnames.splice(index + 1, 1);
    }
  });

  return (
    <Breadcrumbs>
      {pathnames.map((path, index) => {
        const pathId = isId(path);
        const href = `/${pathnames
          .filter((path) => !isId(path))
          .slice(0, index + 1)
          .join('/')}`;
        const translateHref = href.replaceAll('/', '.');
        return (
          <BreadcrumbItem key={`${href}${pathId}`} href={href}>
            {pathId && idBreadcrumbs}
            {!pathId && <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
