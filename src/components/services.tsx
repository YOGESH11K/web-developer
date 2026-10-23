import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-line py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-heading">What I can build for you.</span>}
            description="Focused, well-built websites — no bloated scope, no unnecessary features."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.name} delay={index * 0.045} className="h-full">
                <a
                  href="#contact"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-stone text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 translate-y-0.5 text-transparent transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-muted"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-[18px] font-semibold font-medium tracking-[-0.01em]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[18px] font-semibold italic leading-relaxed text-muted">
                    {service.description}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}






