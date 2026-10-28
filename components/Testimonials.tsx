import type { Testimonial } from "@/content/site";

/** Renders nothing until content/site.ts has real quotes. */
export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="label">What people say</h3>
      <ul className="mt-4 grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.name}>
            <figure className="h-full rounded-lg border border-rule bg-surface p-5">
              <blockquote className="text-[1.0625rem]">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-semibold">
                    {item.name}
                  </a>
                ) : (
                  <span className="font-semibold">{item.name}</span>
                )}
                <span className="text-muted"> · {item.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
