import Link from "next/link";

import { useActivePath } from "@/lib/hooks/useActivePath";

interface NavlinkProps {
  onClick: () => void;
  link: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Navlink = ({ onClick, link, name, icon }: NavlinkProps) => {
  const Icon = icon;
  const isActive = useActivePath(link);

  return (
    <Link
      href={link}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? "bg-green-50 text-green-700"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon
        className={`w-5 h-5 ${isActive ? "text-green-600" : "text-gray-500"}`}
      />
      <span className="capitalize">{name}</span>
    </Link>
  );
};

export default Navlink;
