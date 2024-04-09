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
    ACTIVITIES: '/org/activities',
    LIDS: {
      ROOT: '/org/lids',
      PARTICIPANTS: '/org/lids/participants',
      ORGANIZATIONS: '/org/lids/organizations'
    }
  },
  PARTNER: {
    PROFILE: (id: string) => `/partner/${id}/profile`,
    ADDRESSES: (id: string) => `/partner/${id}/addresses`,
    EMPLOYEES: (id: string) => `/partner/${id}/employees`,
    ACTIVITIES: (id: string) => `/partner/${id}/activities`,
    SCHEDULE: (id: string) => `/partner/${id}/schedule`
  },
  LANDING: {
    ROOT: '/'
  }
};
