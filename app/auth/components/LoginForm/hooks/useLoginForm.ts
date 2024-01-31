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

  const postAuthLoginEmail = usePostAuthLoginEmailMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postAuthLoginEmail.mutateAsync(values);

    router.replace('/org/organizations');
  });

  return {
    form: loginForm,
    functions: { onSubmit }
  };
};
