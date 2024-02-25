export const convertFormValuesToSocial = (values?: { value?: string }[]) =>
  (values?.filter((value) => !!value.value) as { value: string }[]).map((value) => value.value) ??
  [];
