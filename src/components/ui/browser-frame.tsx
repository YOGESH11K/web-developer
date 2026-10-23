import Image from "next/image";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  preload?: boolean;
};

export function BrowserFrame({
  src,
  alt,
  url,
  className,
  preload = false,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "group/frame overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_80px_-20px_rgba(42,37,32,0.18)]",
        className,
      )}
    >
      <div className="relative flex items-center gap-2 border-b border-line bg-stone px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-charcoal/15" />
        <span className="h-2 w-2 rounded-full bg-charcoal/15" />
        <span className="h-2 w-2 rounded-full bg-charcoal/15" />
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-md border border-line bg-white/60 px-3 py-1 text-[17px] font-semibold text-muted">
          <Lock className="h-2.5 w-2.5" aria-hidden="true" />
          <span className="max-w-[180px] truncate">{url}</span>
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 90vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out will-change-transform group-hover/frame:scale-[1.025]"
        />
      </div>
    </div>
  );
}






