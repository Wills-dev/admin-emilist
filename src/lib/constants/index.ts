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

export const dashboardLinks = [
  { link: "/overview", name: "overview", icon: LayoutDashboard },
  { link: "/user-management", name: "user management", icon: Users },
  { link: "/job-management", name: "job management", icon: Briefcase },
  { link: "/materials", name: "materials", icon: Package },
  { link: "/transactions", name: "transactions", icon: CreditCard },
  { link: "/subscription", name: "subscription", icon: Crown },
  {
    link: "/verification-request",
    name: "verification-request",
    icon: ShieldCheck,
  },
  { link: "/manage-admin", name: "manage admin", icon: UserCog },
];
