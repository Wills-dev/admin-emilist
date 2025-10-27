import {
  Briefcase,
  CreditCard,
  Crown,
  LayoutDashboard,
  Package,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";
import { ROUTES } from "../helpers/routes";

export const dashboardLinks = [
  { link: ROUTES?.OVERVIEW, name: "overview", icon: LayoutDashboard },
  { link: ROUTES?.USER_MANAGEMENT, name: "user management", icon: Users },
  { link: ROUTES?.JOB_MANAGEMENT, name: "job management", icon: Briefcase },
  { link: ROUTES?.MATERIALS, name: "materials", icon: Package },
  { link: ROUTES?.TRANSACTIONS, name: "transactions", icon: CreditCard },
  { link: ROUTES?.SUBSCRIPTION, name: "subscription", icon: Crown },
  {
    link: ROUTES?.VERIFICATION_REQUEST,
    name: "verification-request",
    icon: ShieldCheck,
  },
  { link: ROUTES?.MANAGE_ADMIN, name: "manage admin", icon: UserCog },
];
