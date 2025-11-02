import { ChevronDown } from "lucide-react";

interface TitleCtnProps {
  title: string | string[];
  idTyoe?: string;
  id?: string;
}

const TitleCtn = ({ title, idTyoe, id }: TitleCtnProps) => {
  const showId = idTyoe !== undefined && id !== undefined;

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return title.map((item, i) => (
        <span key={i}>
          {item}
          {i < title.length - 1 && ", "}
        </span>
      ));
    }
    return title;
  };

  return (
    <div className="w-full shadow-md rounded-xl px-8 py-4 flex items-center justify-between">
      <div className="space-y-1">
        {" "}
        <h5 className="text-lg font-medium text-gray-900 capitalize">
          {renderTitle()}
        </h5>
        {showId && (
          <div className="flex gap-2">
            <span className="text-sm font-semibold">{idTyoe}</span>
            <span className="text-sm text-gray-500">{id}</span>
          </div>
        )}
      </div>

      <span className="text-gray-700 text-xl">
        <ChevronDown className="w-4 h-4" />
      </span>
    </div>
  );
};

export default TitleCtn;
