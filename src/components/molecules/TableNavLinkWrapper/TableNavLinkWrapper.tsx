"use client";

import { useState } from "react";

import TableNavLink from "@/components/atoms/TableNavLink/TableNavLink";

type LinkItem = {
  id: number;
  link?: string;
  title: string;
  value?: string;
};

interface TableNavLinkWrapperProps {
  links: LinkItem[];
  activeLink?: string;
  normalLink?: string;
}

const TableNavLinkWrapper = ({
  links,
  activeLink,
  normalLink,
}: TableNavLinkWrapperProps) => {
  const initialState = links[0].value || "";
  const [activeTab, setActiveTab] = useState(initialState);

  const handleTabClick = (link: LinkItem) => {
    if (link.value !== undefined && !link.link) {
      setActiveTab(link.value);
    }
  };

  return (
    <div className="flex items-center gap-3 overflow-x-auto">
      {links?.map((link) => (
        <TableNavLink
          key={link?.id}
          link={link?.link}
          title={link?.title}
          normalLink={normalLink}
          activeLink={activeLink}
          isActive={link?.value === activeTab}
          onClick={() => handleTabClick(link)}
        />
      ))}
    </div>
  );
};

export default TableNavLinkWrapper;
