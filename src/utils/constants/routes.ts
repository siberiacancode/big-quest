export const ROUTES = {
  REGISTER: '/register',
  AUTH: '/auth',
  ORG: {
    AUTH: '/org/auth',
    ROOT: '/org/',
    ORGANIZATIONS: {
      ROOT: '/org/organizations',
      DASHBOARD: '/org/organizations/dashboard',
      PROFILE: (id: string) => `/org/organizations/${id}/profile`,
      ADDRESSES: (id: string) => `/org/organizations/${id}/addresses`,
      EMPLOYEES: (id: string) => `/org/organizations/${id}/employees`,
      ACTIVITIES: (id: string) => `/org/organizations/${id}/activities`,
      SCHEDULE: (id: string) => `/org/organizations/${id}/schedule`
    },
    ACTIVITIES: { DASHBOARD: '/org/activities/dashboard' },
    LIDS: {
      ROOT: '/org/lids',
      PARTICIPANTS: '/org/lids/participants',
      ORGANIZATIONS: '/org/lids/organizations'
    }
  },
  LANDING: {
    ROOT: '/',
    ACTIVITIES: (id: string) => `/activities/${id}`
  }
};
