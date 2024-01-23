import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginMutation } from '@/utils/api';

import type { LoginSchema } from '../constants/loginSchema';
import { loginSchema } from '../constants/loginSchema';

export const useLoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { handleSubmit, control } = form;

  const postLogin = useLoginMutation();

  const onSubmit = handleSubmit((data) => postLogin.mutate(data));
  // console.log(postLogin?.data);

  return {
    form: { form, control },
    functions: { onSubmit }
  };
};
