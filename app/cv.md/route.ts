import {
  certificates,
  education,
  experience,
  moreProjects,
  profile,
  projects,
  skills,
  socials,
  tools,
} from "@/content/cv";

export const dynamic = "force-static";

/** The CV as Markdown, generated from the same data as the page. */
export function GET() {
  const roles = [experience.current, ...experience.other];

  const lines = [
    `# ${profile.name}`,
    "",
    `${profile.role}  `,
    `${profile.location}  `,
    `${profile.email} · ${profile.site}`,
    "",
    socials.map((s) => `[${s.network} ${s.handle}](${s.href})`).join(" · "),
    "",
    "## About",
    "",
    ...profile.about.flatMap((paragraph) => [paragraph, ""]),
    profile.availability,
    "",
    "## Experience",
    "",
    ...roles.flatMap((r) => [
      `**${r.title}**, ${r.org} — ${r.start} – ${r.end} · ${r.location}  `,
      ...(r.summary ? [r.summary, ""] : [""]),
    ]),
    "## Projects",
    "",
    ...projects.flatMap((p) => [
      `### ${p.name} — ${p.tagline}`,
      "",
      [p.year, p.role, p.stack.join(", ")].filter(Boolean).join(" · "),
      "",
      p.links.length ? p.links.map((l) => `[${l.label}](${l.href})`).join(" · ") : `_${p.linkNote}_`,
      "",
      `**Problem.** ${p.problem}`,
      "",
      `**What I built.** ${p.built}`,
      "",
      `**Result.** ${p.result}`,
      "",
    ]),
    `More: ${moreProjects.map((l) => `[${l.label}](${l.href})`).join(", ")}`,
    "",
    "## Education",
    "",
    ...education.map((e) => `- **${e.name}**, ${e.degree} — ${e.start} – ${e.end}`),
    "",
    "## Skills",
    "",
    skills,
    "",
    "## Tools",
    "",
    tools,
    "",
    "## Certificates",
    "",
    ...certificates.map((c) => `- ${c.name} · ${c.issuer} · ${c.year}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
