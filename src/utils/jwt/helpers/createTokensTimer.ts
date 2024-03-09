export const createTokensTimer = (minutes: number) =>
  new Date(Date.now() + minutes * 1000).getTime().toString();
