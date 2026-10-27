import { experience } from "@/content/cv";

export default function ExperienceList() {
  const { current, other } = experience;

  return (
    <>
      <article>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6">
          <h3>
            <span className="font-sans font-semibold">{current.title}</span>, {current.org}
          </h3>
          <p className="text-muted">
            {current.start} – {current.end} · {current.location}
          </p>
        </div>
        {current.summary && <p className="prose-col mt-1">{current.summary}</p>}
      </article>

      <h3 className="label mt-5 mb-1.5">Other</h3>
      <ul>
        {other.map((role) => (
          <li
            key={`${role.org}-${role.start}`}
            className="flex flex-wrap items-baseline justify-between gap-x-6 py-0.5"
          >
            <span>
              {role.title}, <span className="text-muted">{role.org}</span>
            </span>
            <span className="text-muted">
              {role.start} – {role.end}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
