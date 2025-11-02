const UserCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="py-2 border-b border-gray-200 flex gap-2 text-gray-700">
      <p className="max-w-sm w-full text-sm font-medium">{title || ""}</p>
      <p className="flex-1 text-sm">{value || "N/A"}</p>
    </div>
  );
};

export default UserCard;
