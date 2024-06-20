import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useDebounceCallback } from '@siberiacancode/reactuse';
import { Layers2Icon } from 'lucide-react';

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

  const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>(() =>
    searchParams.getAll('status')
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

  const onStatusSelect = (values: string[]) => {
    startTransition(() =>
      setSearchParams([
        { key: 'status', value: values },
        { key: 'current', value: '1' }
      ])
    );

    setSelectedStatuses(values);
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
        icon={<Layers2Icon className='mr-2 h-4 w-4' />}
        items={[
          {
            value: 'COOKING',
            label: i18n.formatMessage({ id: 'organization.activities.category.cooking' })
          },
          {
            value: 'CULTURE',
            label: i18n.formatMessage({ id: 'organization.activities.category.culture' })
          },
          {
            value: 'MEDIA',
            label: i18n.formatMessage({ id: 'organization.activities.category.media' })
          },
          {
            value: 'SPORT',
            label: i18n.formatMessage({ id: 'organization.activities.category.sport' })
          },
          {
            value: 'EDUCATION',
            label: i18n.formatMessage({ id: 'organization.activities.category.education' })
          },
          {
            value: 'ENTERTAINMENT',
            label: i18n.formatMessage({ id: 'organization.activities.category.entertainment' })
          },
          {
            value: 'CHALLENGE',
            label: i18n.formatMessage({ id: 'organization.activities.category.challenge' })
          }
        ]}
        title={i18n.formatMessage({ id: 'table.column.activities.category' })}
      />,
      <DataTableFacetedFilter
        values={selectedStatuses}
        onSelect={onStatusSelect}
        items={[
          {
            value: 'PUBLISHED',
            label: i18n.formatMessage({ id: 'organization.activities.status.published' })
          },
          {
            value: 'MODERATION',
            label: i18n.formatMessage({ id: 'organization.activities.status.moderation' })
          },
          {
            value: 'EDITING',
            label: i18n.formatMessage({ id: 'organization.activities.status.editing' })
          },
          {
            value: 'DRAFT',
            label: i18n.formatMessage({ id: 'organization.activities.status.draft' })
          },
          {
            value: 'CLOSED',
            label: i18n.formatMessage({ id: 'organization.activities.status.closed' })
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
