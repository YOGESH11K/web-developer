import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        <p
          className={cn(
            "flex items-center gap-3 font-label text-[18px] font-semibold uppercase tracking-[0.26em] text-muted",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-7 bg-accent/70" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-xl text-[18px] font-semibold leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}






