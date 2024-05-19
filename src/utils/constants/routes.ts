export const ROUTES = {
  REDIRECT: '/redirect',
  ORG: {
    AUTH: '/org/auth',
    ROOT: '/org/',
    ORGANIZATIONS: {
      ROOT: '/org/organizations',
      DASHBOARD: '/org/organizations/dashboard',
      PROFILE: (organizationId: string) => `/org/organizations/${organizationId}/profile`,
      ADDRESSES: (organizationId: string) => `/org/organizations/${organizationId}/addresses`,
      EMPLOYEES: (organizationId: string) => `/org/organizations/${organizationId}/employees`,
      ACTIVITIES: (organizationId: string) => `/org/organizations/${organizationId}/activities`,
      SCHEDULE: (organizationId: string) => `/org/organizations/${organizationId}/schedule`
    },
    ACTIVITIES: { DASHBOARD: '/org/activities/dashboard' },
    LIDS: {
      ROOT: '/org/lids',
      PARTICIPANTS: '/org/lids/participants',
      ORGANIZATIONS: '/org/lids/organizations'
    }
  },
  PARTNER: {
    PROFILE: '/partner/profile',
    ADDRESSES: '/partner/addresses',
    EMPLOYEES: '/partner/employees',
    ACTIVITIES: '/partner/activities',
    SCHEDULE: '/partner/schedule'
  },
  LANDING: {
    ROOT: '/',
    CITY: (cityId: string) => `/${cityId}`
  },
  APP: {
    ROOT: '/app',
    PROFILE: {
      ROOT: '/app/profile',
      EDIT: (userId: string) => `/app/profile/${userId}/edit`
    },
    AUTH: '/app/auth',
    SETTINGS: '/app/settings',
    ACTIVITIES: '/app/activities',
    RATING: '/app/rating',
    SUPPORT: '/app/support',
    TAIGA: '/app/taiga'
  }
};
