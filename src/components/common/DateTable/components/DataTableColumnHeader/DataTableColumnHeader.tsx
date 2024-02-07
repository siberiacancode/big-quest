import React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common/I18nText/I18nText';
import { Button } from '@/components/ui';
import { useSearchParams } from '@/utils/hooks';

interface DataTableColumnHeaderProps {
  columnName: string;
  headerLabel: LocaleMessageId;
  sortable?: boolean;
}

export const DataTableColumnHeader = ({
  columnName,
  headerLabel,
  sortable
}: DataTableColumnHeaderProps) => {
  const { searchParams, setSearchParam } = useSearchParams();
  const sorting = searchParams.get('sort');

  return (
    <div className='text-left'>
      {sortable && (
        <Button
          variant='ghost'
          onClick={() => {
            if (!sorting) setSearchParam('sort', columnName);
            else if (sorting === columnName) setSearchParam('sort', `-${sorting}`);
            else setSearchParam('sort', columnName);
          }}
        >
          <I18nText path={headerLabel} />
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      )}
      {!sortable && (
        <div>
          <I18nText path={headerLabel} />
        </div>
      )}
    </div>
  );
};
