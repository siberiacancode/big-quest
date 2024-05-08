import React from 'react';

export const useSelectActivitySection = () => {
  const [selectedActivityId, setSelectedActivityId] = React.useState<string | undefined>();

  const onConfirmParticipationClick = () => {
    // TODO request
  };

  return {
    state: { selectedActivityId },
    functions: { setSelectedActivityId, onConfirmParticipationClick }
  };
};
