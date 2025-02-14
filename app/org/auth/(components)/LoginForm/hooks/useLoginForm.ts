import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostAuthLoginEmailMutation } from '@/utils/api';
import { useGetUserMeMutation } from '@/utils/api/hooks';
import { ROLES_BY_ROUTE, ROUTES } from '@/utils/constants';
import { useSession, useUser } from '@/utils/contexts';

import type { LoginSchema } from '../constants/loginSchema';
import { loginSchema } from '../constants/loginSchema';
import { handleLogin } from '../helpers';

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
  const getUserMeMutation = useGetUserMeMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    await postAuthLoginEmailMutation.mutateAsync({ params: values });

    const getUserMeMutationResponse = await getUserMeMutation.mutateAsync();

    setUser(getUserMeMutationResponse);
    setSession({ isAuthenticated: true });

    await handleLogin(getUserMeMutationResponse);

    if (getUserMeMutationResponse.roles.filter((role) => ROLES_BY_ROUTE.ORG.includes(role))) {
      router.replace(ROUTES.ORG.ORGANIZATIONS.DASHBOARD);
    }
    if (getUserMeMutationResponse.roles.filter((role) => ROLES_BY_ROUTE.PARTNER.includes(role))) {
      router.replace(ROUTES.PARTNER.PROFILE);
    }
  });

  return {
    state: {
      isLoading: postAuthLoginEmailMutation.isPending || loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
