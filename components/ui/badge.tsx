import * as React from "react";
import { cn } from "./cn";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 text-xs", className)} {...props} />;
}
