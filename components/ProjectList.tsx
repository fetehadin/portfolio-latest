import Image from "next/image";
import { moreProjects, projects } from "@/content/cv";

export default function ProjectList() {
  return (
    <>
      <ul>
        {projects.map((project) => (
          <li key={project.slug} id={project.slug} className="border-t border-rule py-3 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h3>
                <span className="font-sans font-semibold">{project.name}</span>{" "}
                <span className="text-muted">— {project.tagline}</span>
              </h3>
              <p className="flex gap-x-3">
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} ${link.label} (opens in a new tab)`}
                    >
                      {link.label} ↗
                    </a>
                  ))
                ) : (
                  <span className="text-muted">{project.linkNote}</span>
                )}
              </p>
            </div>
            <p className="text-muted">{project.stack.join(" · ")}</p>

            <details className="case no-print mt-1">
              <summary>Read the case study</summary>
              <div className="prose-col mt-3 mb-1 border-l border-rule pl-4">
                <dl className="flex flex-wrap gap-x-6 gap-y-1">
                  {project.year && <Meta term="Year" value={project.year} />}
                  <Meta term="Role" value={project.role} />
                  <Meta term="Stack" value={project.stack.join(", ")} />
                </dl>
                <CaseBlock heading="Problem" text={project.problem} />
                <CaseBlock heading="What I built" text={project.built} />
                <CaseBlock heading="Result" text={project.result} />
                {project.screenshots && (
                  <div className="mt-4 flex gap-3 overflow-x-auto">
                    {project.screenshots.map((shot) => (
                      <Image
                        key={shot.src}
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="8rem"
                        className="h-auto w-32 shrink-0 rounded-[2px] border border-rule"
                      />
                    ))}
                  </div>
                )}
              </div>
            </details>
          </li>
        ))}
      </ul>

      <p className="mt-2 border-t border-rule pt-3">
        <span className="label mr-2">More</span>
        {moreProjects.map((link, i) => (
          <span key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {i < moreProjects.length - 1 ? ", " : " ↗"}
          </span>
        ))}
      </p>
    </>
  );
}

function Meta({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="label leading-[inherit]">{term}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function CaseBlock({ heading, text }: { heading: string; text: string }) {
  return (
    <>
      <h4 className="mt-3 font-sans font-semibold">{heading}</h4>
      <p>{text}</p>
    </>
  );
}
