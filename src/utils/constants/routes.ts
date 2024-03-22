export const ROUTES = {
  REGISTER: '/register',
  AUTH: '/auth',
  ORG: {
    AUTH: '/org/auth',
    ROOT: '/org/',
    ORGANIZATIONS: { ROOT: '/org/organizations' },
    ACTIVITIES: '/org/activities',
    LIDS: {
      ROOT: '/org/lids',
      PARTICIPANTS: '/org/lids/participants',
      ORGANIZATIONS: '/org/lids/organizations'
    }
  },
  LANDING: {
    ROOT: '/'
  }
};
