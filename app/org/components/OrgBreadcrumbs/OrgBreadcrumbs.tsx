'use client';

import { useParams, usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';

interface OrgBreadcrumbsProps {
  ids?: Record<string, string | undefined>;
}

export const OrgBreadcrumbs = ({ ids = {} }: OrgBreadcrumbsProps) => {
  const params = useParams();
  const pathname = usePathname();

  const paramValues = Object.values(params);
  const paramKeys = Object.keys(params);
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <Breadcrumbs>
      {pathnames.map((path, index) => {
        const idKeyIndex = paramValues.findIndex((param) => param === path);
        const isPathId = !!~idKeyIndex;

        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const hrefWithoutIds = pathnames
          .slice(0, index + 1)
          .filter(
            (currentPath) => !~paramValues.findIndex((currentParam) => currentParam === currentPath)
          );

        const translateHref = `.${hrefWithoutIds.join('.')}`;

        return (
          <BreadcrumbItem key={href} href={href}>
            {isPathId &&
              (ids[paramKeys[idKeyIndex]] ?? <I18nText path='navigation.link.default' />)}
            {!isPathId && <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
