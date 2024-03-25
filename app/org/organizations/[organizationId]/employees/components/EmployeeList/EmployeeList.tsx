'use client';

import type { EmployeeData } from '../../(constants)/types';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

import { useEmployeeList } from './hooks/useEmployeeList';

interface EmployeeListProps {
  employees: EmployeeData[];
}

export const EmployeeList = ({ employees }: EmployeeListProps) => {
  const { functions } = useEmployeeList();

  return (
    <div className='gap-4 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap xl:grid xl:grid-cols-4 lg:grid-cols-3'>
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          employee={employee}
          onSendConfirmation={functions.onSendConfirmation}
        />
      ))}
    </div>
  );
};
