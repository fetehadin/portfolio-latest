import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiApachemaven,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import type { Tech } from "@/content/site";

/** `color: null` brands are black or near-black, so they follow the ink color instead. */
export const TECH: Record<Tech, { label: string; Icon: IconType; color: string | null }> = {
  java: { label: "Java", Icon: FaJava, color: "#E76F00" },
  maven: { label: "Maven", Icon: SiApachemaven, color: "#C71A36" },
  node: { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  npm: { label: "npm", Icon: SiNpm, color: "#CB3837" },
  react: { label: "React Native", Icon: SiReact, color: "#58C4DC" },
  expo: { label: "Expo", Icon: SiExpo, color: null },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  tanstack: { label: "TanStack Query", Icon: SiReactquery, color: "#FF4154" },
  express: { label: "Express", Icon: SiExpress, color: null },
  prisma: { label: "Prisma", Icon: SiPrisma, color: null },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  python: { label: "Python", Icon: SiPython, color: "#3776AB" },
  django: { label: "Django", Icon: SiDjango, color: null },
  javascript: { label: "JavaScript", Icon: SiJavascript, color: "#E8C400" },
};

export function TechIcon({ tech, className = "size-4" }: { tech: Tech; className?: string }) {
  const { Icon, color } = TECH[tech];
  return <Icon className={className} style={color ? { color } : undefined} aria-hidden="true" focusable="false" />;
}

/** The floating logo strip that slides in when a project is hovered or focused. */
export function StackPill({ tech, className = "" }: { tech: Tech[]; className?: string }) {
  return (
    <ul className={`stack-pill ${className}`} aria-label="Built with">
      {tech.map((key) => (
        <li key={key} className="stack-pill-item" data-label={TECH[key].label}>
          <TechIcon tech={key} />
          <span className="sr-only">{TECH[key].label}</span>
        </li>
      ))}
    </ul>
  );
}
