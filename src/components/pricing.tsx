import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/data/pricing";
import { quoteMessage, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-line py-16 md:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title={<span id="pricing-heading">Simple pricing. Serious websites.</span>}
            description="Straightforward starting prices for a professional website. We agree the exact scope before any work begins."
            action={
              <ButtonLink
                href={whatsappLink(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Get a Website Quote
                <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
              </ButtonLink>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.06}
              className="h-full"
            >
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-0.5",
                  plan.featured
                    ? "border-accent/40 bg-[linear-gradient(180deg,rgba(168,78,34,0.08),rgba(240,235,226,0.6))] shadow-[0_0_60px_-30px_rgba(168,78,34,0.35)] hover:border-accent/60"
                    : "border-line bg-white/70 hover:border-accent/30 hover:bg-white",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[18px] font-semibold font-medium">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[18px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 min-h-10 text-[18px] font-semibold italic leading-relaxed text-muted">
                  {plan.summary}
                </p>

                <div className="mt-6">
                  <span className="text-[18px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Starting at
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="price text-4xl font-medium">
                      {plan.price}
                    </span>
                    <span className="text-base font-semibold text-muted">one-time</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-line" aria-hidden="true" />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[18px] font-semibold leading-snug text-muted"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          plan.featured ? "text-accent" : "text-muted/70",
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <ButtonLink
                    href={whatsappLink(
                      `Hi Yash, I'm interested in the ${plan.name} (${plan.price}). Could you share the next steps?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={plan.featured ? "accent" : "secondary"}
                    className="w-full"
                  >
                    Choose {plan.name.split(" ")[0]}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl border border-line bg-stone/60 px-5 py-4 text-[18px] font-semibold leading-relaxed text-muted md:px-6">
            <p>
              Final pricing depends on project requirements, features, and
              integrations.
            </p>
            <p className="mt-1.5">
              Domain, hosting, paid APIs, and third-party subscriptions are
              extra unless explicitly included in the agreed scope.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}







