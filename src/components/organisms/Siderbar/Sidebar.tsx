"use client";

import NavLinkWrapper from "@/components/molecules/NavLinkWrapper/NavLinkWrapper";
import SidebarHeader from "@/components/molecules/SidebarHeader/SidebarHeader";
import LogoutFooter from "@/components/molecules/LogoutFooter/LogoutFooter";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  setIsSidebarOpen,
}: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col justify-between h-full">
        <SidebarHeader toggleSidebar={toggleSidebar} />
        <NavLinkWrapper setIsSidebarOpen={setIsSidebarOpen} />
        <LogoutFooter />
      </div>
    </aside>
  );
};

export default Sidebar;
