"use client";

import Link from "next/link";

interface TableNavLinkProps {
  link: string;
  title: string;
  normalLink?: string;
  activeLink?: string;
}

import { useExactActivePath } from "@/lib/hooks/useActivePath";

const TableNavLink = ({
  link,
  title,
  normalLink = "py-2 rounded-full px-4 text-gray-700 dark:hover:text-black hover:bg-gray-100",
  activeLink = "px-4 py-2 rounded-full text-white bg-primary-color  bg-green-400 font-medium",
}: TableNavLinkProps) => {
  const isActive = useExactActivePath(link);

  return (
    <Link
      href={link}
      key={title}
      className={`${
        isActive ? activeLink : normalLink
      } transition-all duration-300 text-sm whitespace-nowrap`}
    >
      <span className="capitalize">{title}</span>
    </Link>
  );
};

export default TableNavLink;
