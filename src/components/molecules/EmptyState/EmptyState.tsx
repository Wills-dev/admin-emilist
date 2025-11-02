import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "success" | "warning" | "error";
}

const EmptyState = ({
  variant = "default",
  title,
  description,
  icon: Icon,
}: EmptyStateProps) => {
  const variants = {
    default: "text-gray-400",
    primary: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
  };
  const iconColor = variants[variant] || variants.default;
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className={`${iconColor} mb-4`}>
        <Icon size={64} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

      <p className="text-gray-500 mb-6 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
