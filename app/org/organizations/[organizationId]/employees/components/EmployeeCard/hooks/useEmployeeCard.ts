import React from 'react';

import type { EmployeeData } from '../../../(constants)/types';

export const useEmployeeCard = (employee: EmployeeData) => {
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  console.log('@', employee);
  const onDeleteClick = () => {
    console.log('req');
  };
  const onSendConfirmationClick = () => {
    console.log('req');
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  return {
    state: { editDialogOpen },
    functions: { onSendConfirmationClick, onDeleteClick, onEditClick, onEditCloseClick }
  };
};
