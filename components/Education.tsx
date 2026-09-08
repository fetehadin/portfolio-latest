export default function Education() {
  const education = [
    {
      school: "Adama Science and Technology University (ASTU)",
      degree: "Bachelor of Science, Software Engineering",
      date: "2023 – Present",
      badges: [
        "Software Engineering",
        "System Design",
        "Algorithms",
        "Databases",
      ],
      description:
        "Pursuing a degree in Software Engineering with a focus on software architecture, system design, algorithms, databases, and full-stack development. Built and contributed to software projects while developing a strong foundation in engineering principles, problem-solving, and system design.",
    },
    {
      school: "Harambee University",
      degree: "Business Administration",
      date: "2024 – Present",
      badges: [
        "Business Administration",
        "Management",
        "Marketing",
        "Entrepreneurship",
      ],
      description:
        "Studying Business Administration alongside software engineering, developing knowledge in management, marketing, entrepreneurship, leadership, and business strategy.",
    },
    {
      school: "ALX Ethiopia",
      degree: "Frontend Development",
      date: "2023 – 2024",
      badges: ["JavaScript", "React", "HTML", "CSS"],
      description:
        "Completed frontend development training through a project-based learning environment, strengthening practical skills in web development, responsive interfaces, JavaScript, React, and collaborative software development.",
    },
    {
      school: "Evangadi Tech",
      degree: "Full-Stack Development",
      date: "2025",
      badges: ["Full-Stack Development", "JavaScript", "React", "Node.js"],
      description:
        "Completed full-stack development training through the Evangadi Tech scholarship, gaining practical experience building web applications across the frontend and backend.",
    },
    {
      school: "Udemy",
      degree: "Fundamentals of Programming",
      date: "2025",
      badges: ["Python", "Programming Fundamentals", "Problem Solving"],
      description:
        "Completed foundational programming training focused on programming concepts, logical problem-solving, and software development fundamentals using Python.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-background"
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
        Education
      </h2>

      <div className="ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-20 border-l border-border">
        <div className="space-y-14">
          {education.map((edu, index) => (
            <article key={index} className="relative">
              <span className="absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-4 py-1.5 text-sm font-bold text-foreground">
                {edu.date}
              </span>

              <div className="pt-6 pl-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {edu.school}
                </h3>

                <p className="mt-1 text-base font-bold text-primary">
                  {edu.degree}
                </p>

                {edu.description && (
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-foreground/70">
                    {edu.description}
                  </p>
                )}

                {edu.badges.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/65 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}