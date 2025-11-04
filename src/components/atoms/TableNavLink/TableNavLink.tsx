"use client";

import { useExactActivePath } from "@/lib/hooks/useActivePath";
import Link from "next/link";

interface TableNavItemProps {
  title: string;
  link?: string;
  isActive?: boolean;
  onClick?: () => void;
  normalLink?: string;
  activeLink?: string;
}

const TableNavItem = ({
  title,
  link,
  isActive: stateActive,
  onClick,
  normalLink = "py-2 rounded-full px-4 text-gray-700 dark:hover:text-black hover:bg-gray-100",
  activeLink = "px-4 py-2 rounded-full text-white bg-green-400 font-medium",
}: TableNavItemProps) => {
  const pathActive = useExactActivePath(link || "");
  const active = link ? pathActive : stateActive;

  const baseClass = `${
    active ? activeLink : normalLink
  } transition-all duration-300 text-sm whitespace-nowrap capitalize`;

  if (link) {
    return (
      <Link href={link} className={baseClass}>
        {title}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {title}
    </button>
  );
};

export default TableNavItem;
