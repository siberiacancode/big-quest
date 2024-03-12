import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from 'usehooks-ts';

import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, DataTableFacetedFilter, Input } from '@/components/ui';
import { useI18n } from '@/utils/contexts';
import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useActivitiesTable = () => {
  const i18n = useI18n();
  const { searchParams, setSearchParams, setSearchParam } = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  const organizationFilter = searchParams.get('organization');

  const [selectedStages, setSelectedStages] = React.useState<string[]>(() =>
    searchParams.getAll('stage')
  );

  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(() =>
    searchParams.getAll('category')
  );

  const onPaginationClick = (page: number) =>
    startTransition(() => setSearchParam('current', String(page)));

  const onOrganizationFilterChange = useDebounceCallback(
    (value: string) =>
      startTransition(() =>
        setSearchParams([
          { key: 'organization', value },
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

  const onCategoriesSelect = (values: string[]) => {
    startTransition(() =>
      setSearchParams([
        { key: 'stage', value: values },
        { key: 'current', value: '1' }
      ])
    );

    setSelectedCategories(values);
  };
  const toolbar = React.useCallback(
    () => [
      <Input
        placeholder={i18n.formatMessage({ id: 'field.filter.placeholder' })}
        defaultValue={organizationFilter ?? ''}
        onChange={(event) => onOrganizationFilterChange(event.target.value)}
        className='max-w-[180px]'
      />,
      <DataTableFacetedFilter
        values={selectedCategories}
        onSelect={onCategoriesSelect}
        items={[
          { value: 'COOKING', label: i18n.formatMessage({ id: 'activity.category.cooking' }) },
          {
            value: 'SPORT',
            label: i18n.formatMessage({ id: 'activity.category.sport' })
          },
          {
            value: 'MEDIA',
            label: i18n.formatMessage({ id: 'activity.category.media' })
          },
          {
            value: 'CULTURE',
            label: i18n.formatMessage({ id: 'activity.category.culture' })
          }
        ]}
        title={i18n.formatMessage({ id: 'table.column.activities.category' })}
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
    [onOrganizationFilterChange, organizationFilter]
  );

  return {
    state: { toolbar, isLoading: isPending },
    functions: { onPaginationClick }
  };
};
