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
        wrapperClassName='max-w-sm'
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
      <Button />,
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
