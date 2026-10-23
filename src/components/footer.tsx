import { ArrowUp, GitBranch } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-white/60 text-[17px] font-semibold font-semibold">
            Y
          </span>
          <div>
            <p className="text-base font-medium tracking-tight">
              Yash<span className="text-accent">.</span>
            </p>
            <p className="text-[18px] font-semibold text-muted">
              Software developer
            </p>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-semibold text-muted"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-base font-semibold text-muted">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white/60 transition-colors hover:border-accent/40 hover:text-foreground"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-5 text-[17px] font-semibold uppercase tracking-[0.16em] text-muted/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yash. All rights reserved.</p>
      </div>
    </footer>
  );
}






