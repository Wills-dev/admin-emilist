export const ROUTES = {
  OVERVIEW: "/overview",
  LOGIN: "/",
  FORGOT_PASSWORD: "/forgot-password",

  USER_MANAGEMENT: "/user-management",
  VERIFIED_USER: "/user-management/verified-users",
  PRIVATE_EXPERTS: "/user-management/private-experts",
  USER_INFO: (id: string) => `/user-management/info/${id}`,

  JOB_MANAGEMENT: "/job-management",

  MATERIALS: "/materials",

  TRANSACTIONS: "/transactions",
  SUBSCRIPTION: "/subscription",
  VERIFICATION_REQUEST: "/verification-request",
  MANAGE_ADMIN: "/manage-admin",
  SETTINGS: "/settings",
  PROFILE: "/profile",
};
