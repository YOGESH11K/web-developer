import { ArrowUpRight, GitBranch } from "lucide-react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section
      id="work"
      className="border-t border-line py-16 md:py-20"
      aria-labelledby="work-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <span id="work-heading">
                Real projects, built for real businesses.
              </span>
            }
            description="A selection of websites and web experiences I have designed and built — from wellness brands to education platforms."
            action={
              <ButtonLink
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                View GitHub
              </ButtonLink>
            }
          />
        </Reveal>

        <div className="mt-10 space-y-12 md:mt-12 md:space-y-16">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            const previewUrl = project.liveUrl
              ? new URL(project.liveUrl).hostname.replace("www.", "")
              : (project.urlLabel ?? "Preview");

            return (
              <Reveal key={project.slug} className="group">
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={cn(
                      "lg:col-span-7",
                      reversed ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <BrowserFrame
                      src={project.image}
                      alt={project.imageAlt}
                      url={previewUrl}
                    />
                  </div>

                  <div
                    className={cn(
                      "lg:col-span-5",
                      reversed ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <div className="flex items-center gap-3 text-[17px] font-semibold uppercase tracking-[0.24em] text-muted">
                      <span className="text-accent/90">{project.index}</span>
                      <span className="h-px w-5 bg-line" aria-hidden="true" />
                      <span>{project.category}</span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] md:text-[2.4rem]">
                      {project.name}
                    </h3>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-[17px] font-semibold uppercase tracking-[0.22em] text-muted">
                        Starting at
                      </span>
                      <span className="price text-xl font-medium text-accent">
                        {project.startingPrice}
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-[18px] font-semibold italic leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label="Technologies used"
                    >
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-stone/60 px-3 py-1 text-[18px] font-semibold text-muted transition-colors group-hover:border-accent/30"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-[18px] font-semibold text-foreground underline-offset-4 hover:underline"
                        >
                          View Live
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : null}

                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-[18px] font-semibold text-muted transition-colors hover:text-foreground"
                        >
                          <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                          View Project
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ArrowUpRight
                            className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      ) : null}
                    </div>

                    {project.note ? (
                      <p className="mt-4 text-[18px] font-semibold leading-relaxed text-muted/70">
                        {project.note}
                      </p>
                    ) : null}

                    <div className="mt-6 border-t border-line pt-5 text-base font-semibold text-muted">
                      Final price depends on scope, pages, and features.
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}






