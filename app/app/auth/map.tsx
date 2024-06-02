import { ExcursionStep } from './(steps)/excursion/ExcursionStep';
import { LoginStep } from './(steps)/login/LoginStep';
import { RegisterStep } from './(steps)/register/RegisterStep';
import type { WizardMap } from './(contexts)';

export const authMap: WizardMap = {
  excursion: {
    id: 'excursion',
    nodes: ['register'],
    component: <ExcursionStep />
  },
  register: {
    id: 'register',
    nodes: [],
    component: <RegisterStep />
  },
  login: {
    id: 'login',
    nodes: ['excursion', 'register'],
    component: <LoginStep />
  }
};
