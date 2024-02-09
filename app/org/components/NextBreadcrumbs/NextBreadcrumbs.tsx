'use client';

import { usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';

interface NextBreadcrumbsProps {
  idBreadcrumb?: string;
}

export const NextBreadcrumbs = ({ idBreadcrumb = 'id' }: NextBreadcrumbsProps) => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <Breadcrumbs>
      {pathnames.map((path, index) => {
        const isId = /[0-9]/.test(path);
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const translateHref = href.replaceAll('/', '.');

        return (
          <BreadcrumbItem href={href}>
            {isId && idBreadcrumb}
            {!isId && <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
