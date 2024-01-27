import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginEmailMutation } from '@/utils/api';

import type { LoginEmailSchema } from '../constants/loginEmailSchema';
import { loginEmailSchema } from '../constants/loginEmailSchema';

export const useLoginForm = () => {
  const router = useRouter();
  const loginForm = useForm<LoginEmailSchema>({
    resolver: zodResolver(loginEmailSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const postLoginEmail = useLoginEmailMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postLoginEmail.mutateAsync(values);

    router.replace('/');
  });

  return {
    form: loginForm,
    functions: { onSubmit }
  };
};
