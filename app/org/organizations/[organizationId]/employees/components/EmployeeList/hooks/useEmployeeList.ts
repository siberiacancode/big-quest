export const useEmployeeList = () => {
  const onSendConfirmation = () => {
    console.log('req');
  };

  return {
    functions: { onSendConfirmation }
  };
};
