"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { useRef } from "react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    section.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    section.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="spotlight relative overflow-hidden pb-12 pt-24 md:pb-16 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute left-1/2 top-[-22rem] h-[42rem] w-[75rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,78,34,0.10),transparent_65%)] blur-3xl" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div>
            <motion.p
              {...fade(0)}
              className="flex items-center gap-3 font-label text-[17px] font-semibold uppercase tracking-[0.3em] text-muted sm:text-[18px] font-semibold"
            >
              <span className="h-px w-7 bg-accent/80" aria-hidden="true" />
              Software Developer
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="mt-7 font-display text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-[1.01] tracking-[-0.02em]"
            >
              Websites that make
              <br className="hidden md:block" /> your business{" "}
              <span className="whitespace-nowrap font-display font-normal italic tracking-[-0.02em] text-accent-soft">
                stand out.
              </span>
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-7 max-w-lg text-[18px] font-semibold leading-relaxed text-muted md:text-base"
            >
              <span className="italic">{site.description}</span>
            </motion.p>

            <motion.div
              {...fade(0.24)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink href="#work" size="lg">
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                Let&apos;s Build Your Website
                <ArrowUpRight
                  className="h-4 w-4 text-muted transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
            </motion.div>

            <motion.div
              {...fade(0.32)}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-base text-muted"
            >
              <span className="inline-flex items-center gap-2.5">
                <span className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
              <span
                className="hidden h-3 w-px bg-line sm:block"
                aria-hidden="true"
              />
              <span>
                Websites from{" "}
                <span className="font-medium text-foreground/90">₹5,000</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            {...fade(0.26)}
            className="relative hidden lg:block"
            aria-label="Featured project: GoA Waters"
          >
            <div
              className="absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_55%_40%,rgba(255,106,61,0.13),transparent_68%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rotate-[1.1deg] pb-7 transition-transform duration-700 ease-out hover:rotate-0">
              <BrowserFrame
                src="/projects/goawaters.webp"
                alt="GoA Waters website homepage with a sunset over still water"
                url="goawaters.com"
                preload
              />

              <div className="absolute bottom-0 left-7 flex items-center gap-3 rounded-full border border-line bg-white/95 px-4 py-2.5 shadow-[0_18px_50px_rgba(42,37,32,0.18)] backdrop-blur">
                <span className="status-dot" aria-hidden="true" />
                <span className="text-base font-semibold text-foreground">
                  GoA Waters
                </span>
                <span className="h-3 w-px bg-line" aria-hidden="true" />
                <span className="text-[18px] font-semibold text-muted">Live website</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






