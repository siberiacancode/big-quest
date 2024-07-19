import React from 'react';
import { useDebounceCallback, useIntersectionObserver } from 'usehooks-ts';

import type { EmployeePosition } from '@/api-types';
import type { ComboboxProps } from '@/components/ui';
import { Combobox } from '@/components/ui';
import { useGetEmployeeInfiniteQuery } from '@/utils/api';

import { defaultConvertEmployees } from './helpers/defaultConvertEmployees';

interface EmployeesComboboxProps
  extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  organizationId: string;
  position?: EmployeePosition;
}

const EMPLOYEES_SEARCH_DELAY = 200;

export const EmployeesCombobox = ({
  organizationId,
  position,
  ...props
}: EmployeesComboboxProps) => {
  const [employeeSearch, setEmployeeSearch] = React.useState('');
  const debouncedSetEmployeeSearch = useDebounceCallback(setEmployeeSearch, EMPLOYEES_SEARCH_DELAY);

  const getEmployeeInfiniteQuery = useGetEmployeeInfiniteQuery({
    position,
    organizationId,
    search: employeeSearch
  });

  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    onChange: (isIntersecting) => {
      if (isIntersecting) getEmployeeInfiniteQuery.fetchNextPage();
    }
  });

  return (
    <>
      <Combobox
        {...props}
        items={
          getEmployeeInfiniteQuery.data
            ? defaultConvertEmployees(
                getEmployeeInfiniteQuery.data.pages.flatMap((page) => page.rows)
              )
            : []
        }
        onSearchChange={debouncedSetEmployeeSearch}
        loading={getEmployeeInfiniteQuery.isLoading}
      />
      <div ref={ref} />
    </>
  );
};
