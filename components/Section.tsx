type Props = {
  id: string;
  /** Two-digit index, e.g. "01". */
  num: string;
  title: string;
  /** Short line under the title. */
  meta?: React.ReactNode;
  children: React.ReactNode;
  /** Leave the section out of the printed CV. */
  screenOnly?: boolean;
};

/** A numbered section: number + title on the left, content on the right (stacked on phones). */
export default function Section({ id, num, title, meta, children, screenOnly = false }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`section reveal ${screenOnly ? "no-print" : ""}`}>
      <div className="section-head">
        <p className="num" aria-hidden="true">
          {num}
        </p>
        <h2 id={`${id}-heading`} className="h2 mt-1 outline-none">
          {title}
        </h2>
        {meta && <p className="label mt-2">{meta}</p>}
      </div>
      <div className="section-body min-w-0">{children}</div>
    </section>
  );
}
