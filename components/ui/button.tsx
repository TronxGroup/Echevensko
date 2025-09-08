"use client";
import * as React from "react";
import { cn } from "./cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "lg";
};

export function Button({ asChild, className, variant="default", size, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md transition whitespace-nowrap";
  const variants = variant === "outline"
    ? "border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900"
    : "bg-neutral-900 text-white hover:bg-neutral-800";
  const sizes = size === "sm" ? "h-8 px-3 text-sm" : size === "lg" ? "h-11 px-5 text-base" : "h-10 px-4 text-sm";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, {
      className: cn(base, variants, sizes, className, (children as any).props?.className),
    });
  }
  return (
    <button className={cn(base, variants, sizes, className)} {...props}>
      {children}
    </button>
  );
}
