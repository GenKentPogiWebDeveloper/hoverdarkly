import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105",
        variant === "default" && "bg-primary text-white hover:bg-primary-dark",
        variant === "outline" && "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        "dark:bg-primary-dark dark:hover:bg-primary",
        className
      )}
      {...props}
    />
  );
}