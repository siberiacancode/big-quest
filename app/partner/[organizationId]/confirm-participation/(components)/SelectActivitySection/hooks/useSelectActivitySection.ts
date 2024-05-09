import React from 'react';

interface UseSelectActivitySectionParams {
  userId: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSelectActivitySection = ({ userId }: UseSelectActivitySectionParams) => {
  const [selectedActivityId, setSelectedActivityId] = React.useState<string | undefined>();

  const onConfirmParticipationClick = () => {
    // TODO request with userId and selectedActivityId
    return userId;
  };

  return {
    state: { selectedActivityId },
    functions: { setSelectedActivityId, onConfirmParticipationClick }
  };
};
