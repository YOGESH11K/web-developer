import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "md" | "lg";
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-charcoal shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_30px_rgba(42,37,32,0.25)]",
  secondary:
    "border border-line bg-white/70 text-foreground hover:border-accent/40 hover:bg-white",
  accent:
    "bg-accent text-cream hover:bg-[#8a3f1a] shadow-[0_10px_40px_rgba(168,78,34,0.22)]",
  ghost: "text-muted hover:text-foreground",
};

const sizes = {
  md: "h-11 px-5 text-[18px] font-semibold",
  lg: "h-12 px-6 text-base",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}






