import React from 'react';

export const useDidUpdateEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const isMountRef = React.useRef(false);

  React.useEffect(() => {
    isMountRef.current = true;
  }, []);

  React.useEffect(() => {
    if (!isMountRef.current) return effect();

    isMountRef.current = false;
  }, [deps, effect]);
};
