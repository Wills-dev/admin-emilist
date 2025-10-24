"use client";

import { useState } from "react";

import { dashboardLinks } from "@/lib/constants";
import Navlink from "@/components/atoms/NavLink/Navlink";

interface NavLinkWrapperProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const NavLinkWrapper = ({ setIsSidebarOpen }: NavLinkWrapperProps) => {
  const [activeLink, setActiveLink] = useState("/overview");

  return (
    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
      {dashboardLinks.map((item) => {
        const isActive = activeLink === item.link;

        return (
          <Navlink
            onClick={() => {
              setActiveLink(item.link);
              setIsSidebarOpen(false);
            }}
            name={item?.name}
            icon={item?.icon}
            link={item?.link}
            isActive={isActive}
            key={item.link}
          />
        );
      })}
    </nav>
  );
};

export default NavLinkWrapper;
