"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { SelectOptionType } from "@/lib/types";

interface SelectFieldProps {
  label: string;
  placeholder: string;
  value: string;
  options: SelectOptionType[];
  onChange: (value: string) => void;
  className?: string;
}

const SelectField = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  className = "w-[180px]",
}: SelectFieldProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
