import * as React from "react";
import { cn } from "@/lib/utils";

function Button({ className, size = "default", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50";
  const sizeStyles = {
    sm: "h-8 px-3",
    default: "h-9 px-4",
    lg: "h-10 px-6",
    icon: "h-9 w-9",
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, sizeStyles[size], className)}
      {...props}
    />
  );
}

export { Button };
