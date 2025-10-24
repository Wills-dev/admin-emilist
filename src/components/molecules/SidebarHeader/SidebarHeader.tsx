import { X } from "lucide-react";

import Logo from "@/components/atoms/Logo/Logo";

interface SidebarHeaderProps {
  toggleSidebar: () => void;
}

const SidebarHeader = ({ toggleSidebar }: SidebarHeaderProps) => {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
      <Logo />
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-600 hover:text-gray-900"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SidebarHeader;
