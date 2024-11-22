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
        variant === "default" && "bg-[#FEC6A1] text-black hover:bg-[#FEC6A1]/90",
        variant === "outline" && "border-2 border-[#FEC6A1] text-[#FEC6A1] hover:bg-[#FEC6A1] hover:text-black",
        className
      )}
      {...props}
    />
  );
}