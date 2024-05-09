import React from 'react';

interface UseSelectActivitySectionParams {
  userId: string;
}

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
