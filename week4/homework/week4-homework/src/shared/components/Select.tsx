import { useId } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const Select = ({ label, options, className, ...props }: SelectProps) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="ml-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-blue-500",
          className,
        )}
        {...props}
      >
        <option value="" disabled selected>
          파트를 선택해주세요
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
