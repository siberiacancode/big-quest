import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostAuthLoginEmailMutation } from '@/utils/api';

import type { LoginSchema } from '../constants/loginSchema';
import { loginSchema } from '../constants/loginSchema';

export const useLoginForm = () => {
  const router = useRouter();
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const postAuthLoginEmail = usePostAuthLoginEmailMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postAuthLoginEmail.mutateAsync({ params: values });

    router.replace('/org/organizations');
  });

  return {
    state: {
      isLoading: postAuthLoginEmail.isPending
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
