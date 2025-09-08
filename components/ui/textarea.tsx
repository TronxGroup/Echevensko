import * as React from "react";
import { cn } from "./cn";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn("w-full rounded-md border border-neutral-300 bg-white p-3 text-sm outline-none ring-0 focus:border-neutral-400", className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
