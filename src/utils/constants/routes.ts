export const ROUTES = {
  AUTH: '/auth',
  ORG: {
    ROOT: '/org/',
    ORGANIZATIONS: {
      ROOT: '/org/organizations',
      PROFILE: (id: string) => `/org/organizations/${id}`,
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
  LANDING: {
    ROOT: '/landing'
  }
};
