import { useId, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

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
  type,
  ...props
}: InputProps) => {
  const id = useId();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType && isPasswordVisible ? "text" : type;

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="ml-1 text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative w-full">
        <input
          id={id}
          type={inputType}
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

        {isPasswordType && (
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
          >
            {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {isError && errorMessage && (
        <span className="mt-0.5 ml-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
