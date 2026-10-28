import type { ArchNode } from "@/content/site";

function Arrow() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6h17M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** Boxes and arrows, left to right on wide screens and top to bottom on phones. */
export default function ArchitectureDiagram({ nodes, title }: { nodes: ArchNode[]; title: string }) {
  return (
    <figure>
      <ol className="arch" aria-label={title}>
        {nodes.map((node, i) => (
          <li key={node.label} className="contents">
            {i > 0 && (
              <span className="arch-arrow">
                <Arrow />
              </span>
            )}
            <div className="arch-node">
              <p className="font-semibold leading-snug">{node.label}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted">{node.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
