import type { ResolvedMetadata } from 'next';

export const getPathnameFromMetadataState = (state: ResolvedMetadata) => {
  const res = Object.getOwnPropertySymbols(state || {})
    .map((p) => state[p])
    // eslint-disable-next-line no-prototype-builtins
    .find((state) => state?.hasOwnProperty?.('urlPathname'));

  return res?.urlPathname.replace(/\?.+/, '');
};
