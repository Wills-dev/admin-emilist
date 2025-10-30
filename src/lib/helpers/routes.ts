export const ROUTES = {
  OVERVIEW: "/overview",
  LOGIN: "/",
  FORGOT_PASSWORD: "/forgot-password",

  USER_MANAGEMENT: "/user-management",
  VERIFIED_USER: "/user-management/verified-users",
  PRIVATE_EXPERTS: "/user-management/private-experts",
  USER_INFO: (id: string) => `/user-management/info/${id}`,
  USER_INFO_SERVICE: (id: string) => `/user-management/info/${id}/services`,
  USER_INFO_JOBS: (id: string) => `/user-management/info/${id}/jobs`,
  USER_INFO_PROJECTS: (id: string) => `/user-management/info/${id}/projects`,
  USER_INFO_MATERIALS: (id: string) => `/user-management/info/${id}/materials`,
  USER_INFO_SUBSCRIPTIONS: (id: string) =>
    `/user-management/info/${id}/subscriptions`,

  JOB_MANAGEMENT: "/job-management",

  MATERIALS: "/materials",

  TRANSACTIONS: "/transactions",
  SUBSCRIPTION: "/subscription",
  VERIFICATION_REQUEST: "/verification-request",
  MANAGE_ADMIN: "/manage-admin",
  SETTINGS: "/settings",
  PROFILE: "/profile",
};
