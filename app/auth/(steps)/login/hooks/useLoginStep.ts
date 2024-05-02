import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/utils/constants';

import { useWizard } from '../../../(contexts)';
import { type LoginSchema, loginSchema } from '../constants/loginSchema';

export const useLoginStep = () => {
  const router = useRouter();
  const { setStepId } = useWizard();

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: '',
      code: ''
    }
  });

  const onSubmit = loginForm.handleSubmit(() => {
    // TODO make request

    router.replace(ROUTES.APP.PROFILE.ROOT);
  });

  const onRegisterClick = () => setStepId('excursion');

  return {
    state: {
      isLoading: loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onRegisterClick, onSubmit }
  };
};
