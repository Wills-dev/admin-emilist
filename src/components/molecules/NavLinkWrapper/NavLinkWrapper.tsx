"use client";

import { dashboardLinks } from "@/lib/constants";
import Navlink from "@/components/atoms/NavLink/Navlink";

interface NavLinkWrapperProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const NavLinkWrapper = ({ setIsSidebarOpen }: NavLinkWrapperProps) => {
  return (
    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
      {dashboardLinks.map((item) => {
        return (
          <Navlink
            onClick={() => {
              setIsSidebarOpen(false);
            }}
            name={item?.name}
            icon={item?.icon}
            link={item?.link}
            key={item.link}
          />
        );
      })}
    </nav>
  );
};

export default NavLinkWrapper;
