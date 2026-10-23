"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { navLinks, quoteMessage, site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.slice(1));
const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 170) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Yash — back to top"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-white/60 text-[17px] font-semibold font-semibold tracking-tight transition-colors group-hover:border-accent/40">
            Y
          </span>
          <span className="text-base font-medium tracking-tight">
            Yash<span className="text-accent">.</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 font-label text-[17px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="hidden h-9 px-4 text-base font-semibold sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </ButtonLink>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white/60 text-foreground transition-colors hover:bg-white/80 md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>

    <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col py-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.04 + index * 0.035,
                      ease,
                    }}
                    className="flex items-center justify-between border-b border-line py-5 text-2xl tracking-[-0.03em] text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-5 w-5 text-muted"
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href={whatsappLink(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Start a project
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Website project enquiry")}`}
                  variant="secondary"
                  size="lg"
                >
                  {site.email}
                </ButtonLink>
              </div>

              <div className="mt-10 flex items-center justify-between text-[18px] font-semibold uppercase tracking-[0.18em] text-muted">
                <span>{site.location}</span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}





