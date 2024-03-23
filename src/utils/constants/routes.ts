export const ROUTES = {
  AUTH: '/auth',
  ORG: {
    ROOT: '/org/',
    ORGANIZATIONS: {
      ROOT: '/org/organizations',
      PROFILE: (id: string) => `/org/organization/${id}`,
      ADDRESSES: (id: string) => `/org/organization/${id}/addresses`,
      EMPLOYEES: (id: string) => `/org/organization/${id}/employees`,
      ACTIVITIES: (id: string) => `/org/organization/${id}/activities`,
      SCHEDULE: (id: string) => `/org/organization/${id}/schedule`
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
