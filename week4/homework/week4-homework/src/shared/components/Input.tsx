import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  errorMessage?: string;
}

const Input = ({
  label,
  isError,
  errorMessage,
  className,
  ...props
}: InputProps) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="ml-1 text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        id={id}
        aria-invalid={isError}
        {...props}
        className={cn(
          "w-full rounded-lg border bg-white p-3 text-sm text-gray-900 outline-none",
          "placeholder:text-gray-400",

          isError
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",

          className,
        )}
      />

      {isError && errorMessage && (
        <span className="ml-1 mt-0.5 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
