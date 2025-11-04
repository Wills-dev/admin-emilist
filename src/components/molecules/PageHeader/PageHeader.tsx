interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div className={`mb-6 ${className || ""}`}>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h1>
      {description && <p className="text-gray-600 mt-1">{description}</p>}
    </div>
  );
};

export default PageHeader;
