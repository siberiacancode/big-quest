'use client';

import { useParams, usePathname } from 'next/navigation';

import { I18nText } from '@/components/common';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';

interface OrgBreadcrumbsProps extends React.ComponentProps<typeof Breadcrumb> {
  ids?: Record<string, { value?: string; clickable?: boolean; href?: string; hidden?: boolean }>;
}

export const OrgBreadcrumbs = ({ ids = {}, ...props }: OrgBreadcrumbsProps) => {
  const params = useParams();
  const pathname = usePathname();

  const paramValues = Object.values(params);
  const pathnames = pathname.split('/').filter((path) => path);

  const preparedPathnames = pathnames.map((path, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    const idParam = Object.entries(params).find((param) => param[1] === path);

    const pathname = idParam ? idParam[0] : path;

    if (ids[pathname]?.hidden) return null;
    return { pathname, href, ...ids[pathname] };
  });

  const filteredPathnames = preparedPathnames.filter(Boolean) as {
    pathname: string;
    href: string;
  }[];

  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        {filteredPathnames.map(({ pathname, href }, index) => {
          const hrefWithoutIds = pathnames
            .slice(0, index + 1)
            .filter(
              (currentPath) =>
                !~paramValues.findIndex((currentParam) => currentParam === currentPath)
            );
          const translateHref = `.${hrefWithoutIds.join('.')}`;

          const id = ids[pathname];
          const clickable = (id?.clickable && id?.href) ?? true;

          const item = (
            <>
              {id?.value && id.value}
              {!id?.value && (
                <I18nText path={`navigation.link${translateHref}` as LocaleMessageId} />
              )}
            </>
          );

          return (
            <>
              <BreadcrumbItem key={href} className='list-none text-base'>
                {clickable && <BreadcrumbLink href={href}>{item}</BreadcrumbLink>}
                {!clickable && <BreadcrumbPage>{item}</BreadcrumbPage>}
              </BreadcrumbItem>
              {index !== filteredPathnames.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
