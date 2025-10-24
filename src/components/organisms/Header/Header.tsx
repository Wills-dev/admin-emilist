import { Bell, Menu } from "lucide-react";

import UserBadge from "@/components/molecules/UserBadge/UserBadge";
import UserBadgeLoader from "@/components/atoms/skeletonLoader/UserBadgeLoader";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { isLoading } = useCurrentUser();

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 bg-white border-b border-gray-200">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {isLoading ? <UserBadgeLoader /> : <UserBadge />}
        </div>
      </div>
    </header>
  );
};

export default Header;
