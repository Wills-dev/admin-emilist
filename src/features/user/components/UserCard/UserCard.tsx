import Link from "next/link";

const UserCard = ({
  title,
  value,
  href,
}: {
  title: string;
  value: string | number;
  href?: string;
}) => {
  const newValue = href ? (
    <Link
      href={href}
      className="flex-1 text-sm hover:text-green-500 transition-all duration-300"
    >
      {value || "N/A"}
    </Link>
  ) : (
    <p className="flex-1 text-sm">{value || "N/A"}</p>
  );
  return (
    <div className="py-2 border-b border-gray-200 flex gap-2 text-gray-700 capitalize">
      <p className="max-w-sm w-full text-sm font-medium">{title || ""}</p>
      {newValue}
    </div>
  );
};

export default UserCard;
