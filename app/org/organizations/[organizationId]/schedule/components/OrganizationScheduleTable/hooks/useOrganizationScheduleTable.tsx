import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from 'usehooks-ts';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationScheduleTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const activityFilter = searchParams.get('activity');

  const onPaginationClick = (page: number) =>
    startTransition(() => setSearchParam('current', String(page)));

  const onActivityFilterChange = useDebounceCallback(
    (value: string) =>
      startTransition(() =>
        setSearchParams([
          { key: 'activity', value },
          { key: 'current', value: '1' }
        ])
      ),
    FILTER_INPUT_DELAY
  );

  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={activityFilter ?? ''}
        onChange={(event) => onActivityFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,

      <div className='flex flex-1 justify-items-end'>
        <RegisterOrganizationDialog
          trigger={
            <Button disabled={isPending} variant='secondary' size='sm' className='mx-2 md:ml-auto'>
              <PlusCircledIcon className='mr-2 size-4' />
              <I18nText path='button.add' />
            </Button>
          }
        />
      </div>
    ],
    [onActivityFilterChange, activityFilter]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
