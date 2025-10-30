import { ROUTES } from "@/lib/helpers/routes";

export const userManagementLinks = [
  { id: 1, link: ROUTES?.USER_MANAGEMENT, title: "users" },
  { id: 2, link: ROUTES?.VERIFIED_USER, title: "verified users" },
  { id: 3, link: ROUTES?.PRIVATE_EXPERTS, title: "private experts" },
];

export const userInfoLinks = (id: string) => [
  {
    id: 1,
    link: ROUTES.USER_INFO(id),
    title: "User Info",
  },
  {
    id: 2,
    link: ROUTES.USER_INFO_SERVICE(id),
    title: "Services",
  },
  {
    id: 3,
    link: ROUTES.USER_INFO_JOBS(id),
    title: "Jobs",
  },
  {
    id: 4,
    link: ROUTES.USER_INFO_PROJECTS(id),
    title: "Projects",
  },
  {
    id: 5,
    link: ROUTES.USER_INFO_MATERIALS(id),
    title: "Materials",
  },
  {
    id: 6,
    link: ROUTES.USER_INFO_SUBSCRIPTIONS(id),
    title: "Subscriptions",
  },
];

export const userBreadcrumb = [
  { label: "User Management", href: ROUTES?.USER_MANAGEMENT },
  { label: "User Info" },
];
