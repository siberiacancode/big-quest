import type { WizardMap } from './(contexts)/wizard/WizardContext';
import { ExcursionStep } from './(steps)/excursion/ExcursionStep';
import { LoginStep } from './(steps)/login/LoginStep';

export const authMap: WizardMap = {
  excursion: {
    id: 'excursion',
    nodes: ['register'],
    component: <ExcursionStep />
  },
  register: {
    id: 'register',
    nodes: [],
    component: null
  },
  login: {
    id: 'login',
    nodes: [],
    component: <LoginStep />
  }
};
