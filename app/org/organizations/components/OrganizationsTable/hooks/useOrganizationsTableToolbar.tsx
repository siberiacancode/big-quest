import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { DataTableFacetedFilter, I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

interface UseOrganizationsTableToolbarParams {
  organizationFilter: string | null;
  onOrganizationFilterChange: (value: string) => void;
}

export const useOrganizationsTableToolbar = ({
  onOrganizationFilterChange,
  organizationFilter
}: UseOrganizationsTableToolbarParams) => {
  const intl = useI18n();
  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={intl.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={organizationFilter ?? ''}
        onChange={(event) => onOrganizationFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <DataTableFacetedFilter
        columnName='stage'
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
        columnName='location'
        items={[
          { value: 'г. Томск', label: 'г. Томск' },
          { value: 'г. Новосибирск', label: 'г. Новосибирск' },
          { value: 'г. Северск', label: 'г. Северск' },
          { value: 'Кемерово', label: 'Кемерово' },
          { value: 'Санкт-Петербург', label: 'Санкт-Петербург' }
        ]}
        title={intl.formatMessage({ id: 'table.column.organization.location' })}
      />,
      <RegisterOrganizationDialog
        trigger={
          <Button variant='secondary' size='sm' className='mx-2 md:ml-auto'>
            <PlusCircledIcon className='mr-2 size-4' />
            <I18nText path='button.add' />
          </Button>
        }
      />
    ],
    [onOrganizationFilterChange, organizationFilter]
  );

  return { toolbar };
};
