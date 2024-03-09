const ONE_MINUTE = 60000;

export const createTokensTimer = (minutes: number) =>
  new Date(Date.now() + minutes * ONE_MINUTE).getTime().toString();
