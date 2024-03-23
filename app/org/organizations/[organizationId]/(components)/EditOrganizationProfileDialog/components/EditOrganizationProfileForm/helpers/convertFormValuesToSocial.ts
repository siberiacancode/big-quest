export const convertFormValuesToSocial = (values: { value?: string }[]) =>
  (values.filter(({ value }) => !!value) as { value: string }[]).map(({ value }) => value);
