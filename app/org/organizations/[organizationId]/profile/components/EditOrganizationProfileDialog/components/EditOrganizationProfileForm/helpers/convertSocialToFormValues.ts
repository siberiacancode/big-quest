export const convertSocialToFormValues = (social: string[]) =>
  social.map((link) => ({
    value: link
  }));
