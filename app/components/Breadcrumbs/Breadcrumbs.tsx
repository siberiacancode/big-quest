import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  breadcrumbs: { label: string; link: string }[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <nav aria-label='Breadcrumb'>
    <ul className='flex py-6'>
      {breadcrumbs.map((breadcrumb, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className='flex items-center'>
          <Link href={breadcrumb.link} className='text-bold text-base text-muted-foreground'>
            {breadcrumb.label}
          </Link>

          {index < breadcrumbs.length - 1 && (
            <span className='mx-2'>
              <ChevronRightIcon className='text-muted-foreground' />
            </span>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
