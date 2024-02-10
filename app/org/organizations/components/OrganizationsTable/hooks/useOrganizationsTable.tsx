import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from 'usehooks-ts';

import { DataTableFacetedFilter, I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const intl = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();

  const organizationFilter = searchParams.get('organization');
  const [selectedLocations, seSelectedLocations] = React.useState<string[]>(() =>
    searchParams.getAll('location')
  );
  const [selectedStages, setSelectedStages] = React.useState<string[]>(() =>
    searchParams.getAll('stage')
  );

  const onPaginationButtonClick = (page: number) => setSearchParam('current', String(page));

  const onOrganizationFilterChange = useDebounceCallback(
    (value: string) =>
      setSearchParams([
        { key: 'organization', value },
        { key: 'current', value: '1' }
      ]),
    FILTER_INPUT_DELAY
  );

  const onLocationsSelect = (values: string[]) => {
    setSearchParams([
      { key: 'location', value: values },
      { key: 'current', value: '1' }
    ]);

    seSelectedLocations(values);
  };

  const onStagesSelect = (values: string[]) => {
    setSearchParams([
      { key: 'stage', value: values },
      { key: 'current', value: '1' }
    ]);

    setSelectedStages(values);
  };

  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={intl.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={organizationFilter ?? ''}
        onChange={(event) => onOrganizationFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <DataTableFacetedFilter
        values={selectedStages}
        onSelect={onStagesSelect}
        items={[
          { value: 'REQUEST', label: intl.formatMessage({ id: 'organization.stage.request' }) },
          {
            value: 'NEGOTIATION',
            label: intl.formatMessage({ id: 'organization.stage.negotiation' })
          },
          {
            value: 'CONCLUSION',
            label: intl.formatMessage({ id: 'organization.stage.conclusion' })
          }
        ]}
        title={intl.formatMessage({ id: 'table.column.organization.stage' })}
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
        title={intl.formatMessage({ id: 'table.column.organization.location' })}
      />,
      <div className='flex flex-1 justify-items-end'>
        <RegisterOrganizationDialog
          trigger={
            <Button variant='secondary' size='sm' className='mx-2 md:ml-auto'>
              <PlusCircledIcon className='mr-2 size-4' />
              <I18nText path='button.add' />
            </Button>
          }
        />
      </div>
    ],
    [onOrganizationFilterChange, organizationFilter]
  );

  return {
    state: { toolbar },
    functions: { onPaginationButtonClick }
  };
};
