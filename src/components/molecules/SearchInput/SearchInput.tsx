import { Search, X } from "lucide-react";
import { FormEvent } from "react";

interface SearchInputProps {
  value: string | number;
  handleChange: (value: string) => void;
  handleClear: () => void;
  onSubmit: (e: FormEvent) => Promise<void>;
}

const SearchInput = ({
  value,
  handleChange,
  handleClear,
}: SearchInputProps) => {
  return (
    <form className="max-w-sm w-full relative px-2 h-8 rounded-full focus-within:border-green-500 border-1 border-gray-300 flex items-center gap-2  transition-all duration-300">
      <button type="submit">
        <Search className="w-6 h-6" />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className={`outline-none flex-1`}
      />
      {value && (
        <button type="button" onClick={handleClear}>
          <X className="w-6 h-6" />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
