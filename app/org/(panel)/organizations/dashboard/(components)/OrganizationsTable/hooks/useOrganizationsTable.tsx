import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from '@siberiacancode/reactuse';

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
  const [selectedLocations, seSelectedLocations] = React.useState<string[]>(() =>
    searchParams.getAll('locality')
  );
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

  const onLocationsSelect = (values: string[]) => {
    startTransition(() => {
      setSearchParams([
        { key: 'locality', value: values },
        { key: 'current', value: '1' }
      ]);
    });

    seSelectedLocations(values);
  };

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
      <DataTableFacetedFilter
        values={selectedLocations}
        onSelect={onLocationsSelect}
        items={[
          { value: 'г. Томск', label: 'г. Томск' },
          { value: 'г. Новосибирск', label: 'г. Новосибирск' },
          { value: 'г. Северск', label: 'г. Северск' },
          { value: 'Кемерово', label: 'Кемерово' },
          { value: 'Санкт-Петербург', label: 'Санкт-Петербург' }
        ]}
        title={i18n.formatMessage({ id: 'table.column.organization.locality' })}
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
    [
      onNameFilterChange,
      nameFilter,
      selectedLocations,
      selectedStages,
      onLocationsSelect,
      onStagesSelect
    ]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
