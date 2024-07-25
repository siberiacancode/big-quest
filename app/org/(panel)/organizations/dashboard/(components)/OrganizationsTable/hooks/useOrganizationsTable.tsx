import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from 'usehooks-ts';

import { AddressCombobox } from '@/components/comboboxes';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, DataTableFacetedFilter, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

import { convertAddressesToComboboxItems } from '../helpers/convertLocalitiesToComboboxItems';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const nameFilter = searchParams.get('name');
  const [selectedLocation, seSelectedLocation] = React.useState<string>(
    () => searchParams.get('locality') ?? ''
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

  const onLocationsSelect = (value: string) => {
    startTransition(() => {
      setSearchParams([
        { key: 'locality', value },
        { key: 'current', value: '1' }
      ]);
    });

    seSelectedLocation(value);
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
      <AddressCombobox
        value={{ id: selectedLocation, value: selectedLocation, label: selectedLocation }}
        onSelect={(item) => onLocationsSelect(item?.value ?? '')}
        convertAddresses={convertAddressesToComboboxItems}
        className='w-[220px]'
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
      selectedLocation,
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
