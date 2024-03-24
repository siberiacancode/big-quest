import { useHeader } from '@/utils/hooks';

export const useMobileHeader = () => {
  const [isOpen, onBurgerClick] = useHeader();

  const userRole: UserRole = 'organizer';

  return {
    state: { isOpen, userRole },
    functions: { onBurgerClick }
  };
};
