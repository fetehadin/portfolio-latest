export default function Education() {
  const education = [
    {
      school: "HiLCoE School of Computer Science and Technology",
      degree: "Bachelor of Science, Software Engineering",
      date: "2023 – Present",
      badges: [
        "System Design",
        "Data Structures",
        "Algorithms",
        "Software Architecture",
      ],
      description:
        "Pursuing a Bachelor's degree in Software Engineering with a focus on software architecture, system design, algorithms, databases, and full-stack application development. Applying theoretical concepts through hands-on projects to build scalable, maintainable, and user-centered software solutions.",
    },
    {
      school: "Addis Ababa University",
      degree: "Bachelor of Science, Civil & Environmental Engineering",
      date: "2021 – Present",
      badges: [
        "Structural Analysis",
        "Transportation",
        "Hydraulics",
        "Geotechnics",
      ],
      description:
        "Pursuing a Bachelor's degree in Civil & Environmental Engineering, developing expertise in structural engineering, transportation systems, geotechnical engineering, hydraulics, and sustainable infrastructure. Strengthened analytical thinking, engineering design, and quantitative problem-solving through rigorous coursework and practical projects.",
    },
    {
      school: "Hayrenzi Special Secondary School",
      degree: "High School Diploma",
      date: "2011 E.C. – 2014 E.C.",
      badges: [],
      description:
        "Graduated from one of Ethiopia's government boarding schools for high-achieving students, where a rigorous academic environment fostered discipline, leadership, independent learning, and a strong foundation in mathematics and science.",
    },
  ];

  const certificates = [
    {
      title: "ALX Backend Software Engineering",
      date: "August 2024 – January 2025",
      description:
        "Successfully completed ALX's intensive backend software engineering program, building production-ready applications and mastering industry-standard software engineering practices.",
    },
    {
      title: "ALX Career Essentials",
      date: "2024",
      description:
        "Completed career readiness training focused on professional communication, leadership, collaboration, networking, personal branding, and interview preparation.",
    },
    {
      title: "INSA Summer Tech Camp",
      date: "July 2025 – October 2025",
      description:
        "Completed the Information Network Security Administration (INSA) Summer Tech Camp, gaining hands-on experience in full-stack software development through an intensive industry-focused building challenge.",
    },
    {
      title: "Nexus Bootcamp – Data Structures & Algorithms",
      date: "June 2025 – September 2025",
      description:
        "Strengthened algorithmic thinking and problem-solving through intensive training in data structures, algorithms, complexity analysis, and coding interview patterns.",
    },
    {
      title: "Nexus Bootcamp – Frontend Development",
      date: "September 2025 – October 2025",
      description:
        "Built responsive web applications using modern frontend technologies while applying best practices for UI development and user experience.",
    },
    {
      title: "Udacity – Fundamentals of Programming",
      date: "January 2025",
      description:
        "Completed foundational training in programming concepts, problem-solving, and software development using Python and modern development practices.",
    },
    {
      title: "ALX Appreciation Letter",
      date: "2025",
      description:
        "Received an appreciation letter from ALX Africa in recognition of mentoring fellow learners and supporting frontend development activities within the community.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-background"
    >
      {/* Education Timeline */}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
        Education
      </h2>

      <div className="ml-16 md:ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-16 md:ml-20 border-l border-border mb-20">
        <div className="space-y-14">
          {education.map((edu, index) => (
            <article key={index} className="relative">
              <span className="absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-4 py-1.5 text-sm font-bold text-foreground">
                {edu.date}
              </span>

              <div className="pt-6 pl-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground cursor-target">
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
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/65 transition-colors duration-200 hover:border-primary/30 hover:text-primary cursor-target"
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

      {/* Certificates & Awards Timeline */}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
        Certificates & Awards
      </h2>

      <div className="ml-16 md:ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-16 md:ml-20 border-l border-border">
        <div className="space-y-14">
          {certificates.map((cert, index) => (
            <article key={index} className="relative">
              <span className="absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-4 py-1.5 text-sm font-bold text-foreground">
                {cert.date}
              </span>

              <div className="pt-6 pl-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground cursor-target">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-foreground/70">
                    {cert.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}