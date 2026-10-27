type Props = {
  id: string;
  /** Two-digit index shown before the title, e.g. "01". */
  num?: string;
  title: string;
  /** Small line under the title, e.g. "4 roles · since 2024". */
  meta?: React.ReactNode;
  children: React.ReactNode;
  /** Full-width label rows after the content, aligned with the section label. */
  extra?: React.ReactNode;
};

/** A sheet section: numbered label column on the left, content on the right. */
export default function Section({ id, num, title, meta, children, extra }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section">
      <div className="section-label">
        <h2 id={`${id}-heading`} className="section-heading outline-none">
          {num && <span className="section-num">{num}</span>}
          {title}
          <a href={`#${id}`} className="anchor" aria-label={`Link to ${title}`}>
            #
          </a>
        </h2>
        {meta && <p className="label mt-1">{meta}</p>}
      </div>
      <div className="min-w-0">{children}</div>
      {extra}
    </section>
  );
}

/** An unnumbered label row inside a section ("Looking for", "Elsewhere"). */
export function SubRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="subrow col-span-full">
      <h3 className="subrow-label">{label}</h3>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
