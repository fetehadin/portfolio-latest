type Props = {
  id: string;
  /** Two-digit index, e.g. "01". */
  num: string;
  title: string;
  /** Short line under the title. */
  meta?: React.ReactNode;
  /** Wide sections put the head on top, with this intro beside it, and give the body the full width. */
  intro?: React.ReactNode;
  children: React.ReactNode;
  /** Leave the section out of the printed CV. */
  screenOnly?: boolean;
};

/** A numbered section under a hatched band: number + title on the left, content on the right. */
export default function Section({ id, num, title, meta, intro, children, screenOnly = false }: Props) {
  const wide = intro !== undefined;

  return (
    <div className={screenOnly ? "no-print" : undefined}>
      <div className="hatch" aria-hidden="true" />
      <div className="container">
        <section id={id} aria-labelledby={`${id}-heading`} className={`section reveal ${wide ? "section-wide" : ""}`}>
          <div className="section-head">
            <div className="section-title">
              <p className="num" aria-hidden="true">
                {num}
              </p>
              <h2 id={`${id}-heading`} className="h2 mt-1 outline-none">
                {title}
              </h2>
              {meta && <p className="label mt-2">{meta}</p>}
            </div>
            {wide && <div className="section-intro">{intro}</div>}
          </div>
          <div className="section-body min-w-0">{children}</div>
        </section>
      </div>
    </div>
  );
}
