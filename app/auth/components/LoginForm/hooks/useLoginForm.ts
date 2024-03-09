import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostAuthLoginEmailMutation } from '@/utils/api';
import { useGetUserMeMutation } from '@/utils/api/hooks';
import { ROUTES } from '@/utils/constants';
import { useSession, useUser } from '@/utils/contexts';
import { handleLogin } from '@/utils/jwt/handleLogin';

import type { LoginSchema } from '../constants/loginSchema';
import { loginSchema } from '../constants/loginSchema';

export const useLoginForm = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { setSession } = useSession();

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const postAuthLoginEmailMutation = usePostAuthLoginEmailMutation();
  const getUserMeQueryMutation = useGetUserMeMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postAuthLoginEmailMutation.mutateAsync(values);

    const getUserMeQueryMutationResponse = await getUserMeQueryMutation.mutateAsync();

    setUser(getUserMeQueryMutationResponse);
    setSession({ isAuthenticated: true });

    handleLogin(getUserMeQueryMutationResponse);
    router.replace(ROUTES.ORG.ORGANIZATIONS.ROOT);
  });

  return {
    state: {
      isLoading: postAuthLoginEmailMutation.isPending
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
