import { GraduationCap } from "lucide-react";

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

  return (
    <section
      id="education"
      // REMOVED 'bg-background' from this line so it blends with the global molten background
      className="relative py-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8"
    >
      {/* Optional: Add a subtle fade behind just the content for readability if needed, 
          uncomment the div below if you want a soft glowing backdrop */}
      {/* <div className="absolute inset-0 bg-background/30 blur-3xl -z-10 rounded-[100%]" /> */}

      <div className="mb-8 flex items-center gap-4">
        <span className="h-[1px] w-12 bg-primary/40"></span>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Education
          </span>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8 cursor-target">
        Education
      </h2>

      <div className="ml-16 md:ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-16 md:ml-20 border-l border-border">
        <div className="space-y-14">
          {education.map((edu, index) => (
            <article key={index} className="relative z-10">
              <span className="absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-4 py-1.5 text-sm font-bold text-foreground shadow-sm">
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
                        className="cursor-target rounded-full border border-border bg-card/80 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/65 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
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