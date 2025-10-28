"use client";

import Link from "next/link";

interface TableNavLinkProps {
  link: string;
  title: string;
}

import { useExactActivePath } from "@/lib/hooks/useActivePath";

const TableNavLink = ({ link, title }: TableNavLinkProps) => {
  const activeLink = ` px-4 py-2 whitespace-nowrap rounded-full text-white text-sm  bg-primary-color  bg-green-400 font-medium`;

  const normalLink =
    "  py-2 rounded-full px-4 text-gray-700 text-sm dark:hover:text-black hover:bg-gray-100  whitespace-nowrap ";

  const isActive = useExactActivePath(link);

  return (
    <Link
      href={link}
      key={title}
      className={`${isActive ? activeLink : normalLink}`}
    >
      <span className="capitalize">{title}</span>
    </Link>
  );
};

export default TableNavLink;
