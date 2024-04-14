import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostAuthLoginEmailMutation } from '@/utils/api';
import { ROUTES } from '@/utils/constants';

import { type LoginSchema, loginSchema } from '../(constants)/loginSchema';

export const useAuthPage = () => {
  const router = useRouter();

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: '',
      code: ''
    }
  });

  const postAuthLoginEmailMutation = usePostAuthLoginEmailMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postAuthLoginEmailMutation.mutateAsync({ params: values });

    router.replace(ROUTES.APP.PROFILE);
  });

  return {
    state: {
      isLoading: postAuthLoginEmailMutation.isPending || loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
