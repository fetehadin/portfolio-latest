import { MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Ethiopian Artificial Intelligence Institute",
      role: "Data Encoder",
      date: "Aug 2025 – Dec 2025",
      location: "Addis Ababa, Ethiopia",
      type: "On-site · Full-time",
      description:
        "Participated in a national AI project, where meticulous attention to detail and rigorous data validation were essential to building reliable datasets for machine learning models.",
      skills: [
        "Data Quality",
        "Machine Learning",
        "Artificial Intelligence",
        "Analytical Thinking",
      ],
    },
    {
      company: "INSA | Information Network Security Administration",
      role: "Team Lead & Full-Stack Developer",
      date: "Jul 2025 – Oct 2025",
      location: "Addis Ababa, Ethiopia",
      type: "On-site · Summer Tech Camp",
      description:
        "Led a multidisciplinary team during the 4-month INSA Summer Tech Camp building challenge to develop EduConnect, a full-stack educational platform. Designed the backend architecture while collaborating on frontend development to deliver a scalable solution.",
      skills: [
        "Python",
        "Django",
        "JavaScript",
        "PostgreSQL",
        "REST APIs",
        "Team Leadership",
      ],
    },
    {
      company: "ALX Africa",
      role: "Backend Developer Trainee",
      date: "Aug 2024 – Jan 2025",
      location: "Remote",
      type: "Remote · Intensive Program",
      description:
        "Completed ALX's intensive, project-based backend engineering program, gaining hands-on experience building production-ready applications while solving real-world software engineering challenges. Collaborated with peers, received mentorship from experienced engineers, and strengthened technical, problem-solving, and professional skills in an industry-focused environment.",
      skills: [
        "Python",
        "Django",
        "Node.js",
        "Express.js",
        "REST APIs",
        "SQL",
        "MongoDB",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8 cursor-target">
        Experience
      </h2>

      {/* Adjusted margins for mobile left spacing */}
      <div className="ml-4 sm:ml-12 md:ml-20 h-10 border-l border-dashed border-border" />

      <div className="relative ml-4 sm:ml-12 md:ml-20 border-l border-border">
        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <article key={index} className="relative z-10">
              {/* Adjusted translate-x and padding/text-size for mobile badge */}
              <span className="absolute left-0 top-0 z-10 -translate-x-2 sm:-translate-x-1/2 -translate-y-1/2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-foreground shadow-sm">
                {exp.date}
              </span>

              {/* Added padding adjustments to clear the badge on smaller screens */}
              <div className="pt-8 sm:pt-6 pl-6 sm:pl-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground cursor-target">
                  {exp.company}
                </h3>

                <p className="mt-1 text-base font-bold text-primary">
                  {exp.role}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-foreground/55">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-border" />

                  <span className="font-semibold text-primary">
                    {exp.type}
                  </span>
                </div>

                {/* Adjusted text size for mobile description */}
                <p className="mt-3 max-w-2xl text-[14px] sm:text-[15px] leading-7 text-foreground/70">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="cursor-target rounded-full border border-border bg-card/80 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/65 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}