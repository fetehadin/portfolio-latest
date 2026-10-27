type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/** A sheet section: hairline above, heading with a faint # anchor. */
export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section">
      <h2 id={`${id}-heading`} className="section-heading outline-none">
        {title}
        <a href={`#${id}`} className="anchor" aria-label={`Link to ${title}`}>
          #
        </a>
      </h2>
      {children}
    </section>
  );
}
