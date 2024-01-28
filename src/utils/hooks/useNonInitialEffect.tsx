import React from 'react';

export const useNonInitialEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const isMountRef = React.useRef(false);

  React.useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }

    const effectResult = effect();
    if (effectResult && typeof effectResult === 'function') {
      return effectResult;
    }
  }, [deps, effect]);
};
