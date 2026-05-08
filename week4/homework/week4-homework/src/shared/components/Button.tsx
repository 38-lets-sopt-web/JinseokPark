import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-3",
        "text-sm font-semibold transition-colors",
        "bg-blue-600 text-white hover:bg-blue-700",
        "disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50",

        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
