export default function Skills() {
  const row1 = [
    {
      name: "Python",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "Django",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
  ];

  const row2 = [
    {
      name: "Next.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Shadcn/ui",
      iconUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shadcnui.svg",
    },
    {
      name: "Bootstrap",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
    name: "Odoo",
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/odoo.svg",
  },
  ];

  const row3 = [
    {
      name: "PostgreSQL",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Supabase",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "Prisma",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      name: "Docker",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "Vercel",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },
    {
      name: "Omarchy",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/omarchy.svg",
    },
    {
      name: "AWS",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl overflow-hidden px-4 py-16">
      <div className="mb-12 flex flex-col items-start text-left">
        <div className="mb-4 flex items-center gap-4">
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Technical Skills
          </span>
        </div>

        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Tools & Technologies
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
          A curated set of technologies I use to build reliable, scalable, and
          modern digital products.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 pr-6">
            {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
              <TechCard
                key={`r1-${index}`}
                name={tech.name}
                iconUrl={tech.iconUrl}
              />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-6 pr-6">
            {[...row2, ...row2, ...row2, ...row2].map((tech, index) => (
              <TechCard
                key={`r2-${index}`}
                name={tech.name}
                iconUrl={tech.iconUrl}
              />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 pr-6">
            {[...row3, ...row3, ...row3, ...row3].map((tech, index) => (
              <TechCard
                key={`r3-${index}`}
                name={tech.name}
                iconUrl={tech.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  name,
  iconUrl,
}: {
  name: string;
  iconUrl: string;
}) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-3.5 whitespace-nowrap rounded-[2rem] border border-border/80 bg-card px-7 py-3.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className="h-7 w-7 object-contain"
      />
      <span className="text-[15px] font-bold tracking-tight text-foreground">
        {name}
      </span>
    </div>
  );
}