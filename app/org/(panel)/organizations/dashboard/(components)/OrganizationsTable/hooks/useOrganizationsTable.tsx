import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from 'usehooks-ts';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, DataTableFacetedFilter, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const nameFilter = searchParams.get('name');
  const localityFilter = searchParams.get('locality');

  const [selectedStages, setSelectedStages] = React.useState<string[]>(() =>
    searchParams.getAll('stage')
  );

  const onPaginationClick = (page: number) =>
    startTransition(() => setSearchParam('current', String(page)));

  const onNameFilterChange = useDebounceCallback(
    (value: string) =>
      startTransition(() =>
        setSearchParams([
          { key: 'name', value },
          { key: 'current', value: '1' }
        ])
      ),
    FILTER_INPUT_DELAY
  );

  const onLocalityFilterChange = useDebounceCallback(
    (value: string) =>
      startTransition(() =>
        setSearchParams([
          { key: 'locality', value },
          { key: 'current', value: '1' }
        ])
      ),
    FILTER_INPUT_DELAY
  );

  const onStagesSelect = (values: string[]) => {
    startTransition(() =>
      setSearchParams([
        { key: 'stage', value: values },
        { key: 'current', value: '1' }
      ])
    );

    setSelectedStages(values);
  };

  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={nameFilter ?? ''}
        onChange={(event) => onNameFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <Input
        placeholder={i18n.formatMessage({ id: 'field.locality.placeholder' })}
        defaultValue={localityFilter ?? ''}
        onChange={(event) => onLocalityFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <DataTableFacetedFilter
        values={selectedStages}
        onSelect={onStagesSelect}
        items={[
          { value: 'REQUEST', label: i18n.formatMessage({ id: 'organization.stage.request' }) },
          {
            value: 'NEGOTIATION',
            label: i18n.formatMessage({ id: 'organization.stage.negotiation' })
          },
          {
            value: 'CONCLUSION',
            label: i18n.formatMessage({ id: 'organization.stage.conclusion' })
          }
        ]}
        title={i18n.formatMessage({ id: 'table.column.organization.stage' })}
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
    [onNameFilterChange, onLocalityFilterChange, nameFilter, selectedStages, onStagesSelect]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
