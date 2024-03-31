'use client';

import { useParams, usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui';

interface OrgBreadcrumbsProps {
  ids?: Record<string, { value?: string; clickable?: boolean; href?: string; hidden?: boolean }>;
}

export const OrgBreadcrumbs = ({ ids = {} }: OrgBreadcrumbsProps) => {
  const params = useParams();
  const pathname = usePathname();

  const paramValues = Object.values(params);
  const pathnames = pathname.split('/').filter((path) => path);

  const preparedPathnames = pathnames.map((path, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    const idParam = Object.entries(params).find((param) => param[1] === path);

    const pathname = idParam ? idParam[0] : path;

    if (ids[pathname]?.hidden) return null;
    return { pathname, href };
  });

  const filteredPathnames = preparedPathnames.filter(Boolean) as {
    pathname: string;
    href: string;
  }[];

  return (
    <Breadcrumbs className='flex-wrap'>
      {filteredPathnames.map(({ pathname, href }, index) => {
        const hrefWithoutIds = pathnames
          .slice(0, index + 1)
          .filter(
            (currentPath) => !~paramValues.findIndex((currentParam) => currentParam === currentPath)
          );
        const translateHref = `.${hrefWithoutIds.join('.')}`;

        const id = ids[pathname];
        const clickable = id?.clickable ?? true;

        return (
          <BreadcrumbItem
            key={href}
            {...(clickable && {
              href: id?.href ?? href
            })}
          >
            {id?.value && id.value}
            {!id?.value && <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
