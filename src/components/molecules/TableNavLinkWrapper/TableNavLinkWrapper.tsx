"use client";

import { Suspense, useState } from "react";

import TableNavLink from "@/components/atoms/TableNavLink/TableNavLink";
import { useRouter, useSearchParams } from "next/navigation";

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
  queryTitle?: string;
}

const TableNavLinkContent = ({
  links,
  activeLink,
  normalLink,
  queryTitle = "",
}: TableNavLinkWrapperProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialState = searchParams.get(queryTitle) || links[0].value || "";
  const [activeTab, setActiveTab] = useState(initialState);

  const handleTabClick = (link: LinkItem) => {
    if (link.value !== undefined && !link.link) {
      setActiveTab(link.value);
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryTitle, link.value);
      router.replace(`?${params.toString()}`);
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

const TableNavLinkWrapper = ({
  links,
  activeLink,
  normalLink,
  queryTitle = "",
}: TableNavLinkWrapperProps) => {
  return (
    <Suspense fallback={<div>loadConfig...</div>}>
      <TableNavLinkContent
        links={links}
        activeLink={activeLink}
        normalLink={normalLink}
        queryTitle={queryTitle}
      />
    </Suspense>
  );
};

export default TableNavLinkWrapper;
