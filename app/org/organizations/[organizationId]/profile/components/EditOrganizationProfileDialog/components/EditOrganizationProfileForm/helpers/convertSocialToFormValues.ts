export const convertSocialToFormValues = (social?: string[]) =>
  social
    ? social.map((link) => ({
        value: link
      }))
    : [{}];
