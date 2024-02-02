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
      password: ''
    }
  });

  const postAuthLoginEmail = usePostAuthLoginEmailMutation({
    options: { onSuccess: () => router.replace('/org/organizations') }
  });

  const onSubmit = loginForm.handleSubmit((values) => postAuthLoginEmail.mutate(values));

  return {
    state: {
      authLoading: postAuthLoginEmail.isPending
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
