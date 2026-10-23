import { ArrowUpRight, Mail, GitBranch } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { quoteMessage, site, whatsappLink } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white/70 px-6 py-10 text-center md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,78,34,0.10),transparent_62%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-30"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p className="flex items-center justify-center gap-3 text-[17px] font-semibold uppercase tracking-[0.28em] text-muted sm:text-[18px] font-semibold">
                <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
                Contact
                <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
              </p>

              <h2
                id="contact-heading"
                className="mx-auto mt-6 max-w-3xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl md:text-6xl"
              >
                Have a project in mind?{" "}
                <span className="font-display font-normal italic tracking-[-0.02em] text-accent-soft">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[18px] font-semibold leading-relaxed text-muted">
                Tell me a little about your business and what you need. I will
                reply with a clear plan, timeline, and starting price.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappLink(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="lg"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Website project enquiry")}`}
                  variant="secondary"
                  size="lg"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send an email
                </ButtonLink>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 text-base text-muted sm:flex-row sm:gap-6">
                <span className="inline-flex items-center gap-2.5">
                  <span className="status-dot" aria-hidden="true" />
                  Available for new projects
                </span>
                <span
                  className="hidden h-3 w-px bg-line sm:block"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
                <span
                  className="hidden h-3 w-px bg-line sm:block"
                  aria-hidden="true"
                />
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                  <ArrowUpRight
                    className="h-3 w-3 opacity-60"
                    aria-hidden="true"
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span
                  className="hidden h-3 w-px bg-line sm:block"
                  aria-hidden="true"
                />
                <span>{site.location}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}







