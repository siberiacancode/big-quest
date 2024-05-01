import { useUser } from '@/utils/contexts';
import { useHeader } from '@/utils/hooks';

export const useMobileHeader = () => {
  const { user } = useUser();
  const [isOpen, onBurgerClick] = useHeader();

  return {
    state: { isOpen, userRole: user.roles[0] },
    functions: { onBurgerClick }
  };
};
