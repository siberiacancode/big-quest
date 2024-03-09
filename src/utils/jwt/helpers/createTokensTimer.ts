export const createTokensTimer = (minutes: number) =>
  new Date(Date.now() + minutes * 60000).getTime().toString();
