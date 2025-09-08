import * as React from "react";
import { cn } from "./cn";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none ring-0 focus:border-neutral-400", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";
