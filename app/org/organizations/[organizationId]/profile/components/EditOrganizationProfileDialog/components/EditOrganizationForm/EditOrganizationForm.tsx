import { Form } from 'react-hook-form';

import { useEditOrganizationForm } from './hooks/useEditOrganizationForm';

interface EditOrganizationFormProps {
  organization: OrganizationResponse;
}

export const EditOrganizationForm = ({ organization }: EditOrganizationFormProps) => {
  useEditOrganizationForm({ organization });

  return <Form>sdfdsf</Form>;
};
