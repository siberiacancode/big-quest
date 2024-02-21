import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostOrganizationAddActivityMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import { type AddActivitySchema, addActivitySchema } from '../constants/addActivitySchema';

interface UseAddActivityFormParams {
  onAdded: () => void;
}

export const useAddActivityForm = ({ onAdded }: UseAddActivityFormParams) => {
  const i18n = useI18n();

  const addActivityForm = useForm<AddActivitySchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addActivitySchema),
    defaultValues: {
      name: '',
      description: '',
      ageRestriction: '',
      duration: '',
      price: '',
      allowRepeat: ''
    }
  });

  const postOrganizationAddActivity = usePostOrganizationAddActivityMutation();

  const onSubmit = addActivityForm.handleSubmit(() => {
    /* await postOrganizationAddActivity.mutateAsync({
      
    }); */

    toast(i18n.formatMessage({ id: 'dialog.addActivity.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: postOrganizationAddActivity.isPending
    },
    form: addActivityForm,
    functions: { onSubmit }
  };
};
