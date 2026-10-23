import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Discuss your idea",
    description:
      "Tell me what you need, who it is for, and what success looks like.",
  },
  {
    number: "02",
    title: "Design and build",
    description:
      "I design, develop, and refine the website with you at every step.",
  },
  {
    number: "03",
    title: "Launch your website",
    description:
      "We ship it, connect your domain, and make sure everything works.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-line py-16 md:py-20"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title={<span id="process-heading">Three steps. No guesswork.</span>}
            description="A simple process that keeps you informed from the first conversation to launch day."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.07}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-[18px] font-semibold tracking-[0.2em] text-accent">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}






