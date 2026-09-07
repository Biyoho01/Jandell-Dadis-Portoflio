import { GraduationCap, Monitor, Atom, Wrench } from "lucide-react";

const traits = [
  { label: "Computer Science Student", icon: GraduationCap },
  { label: "Web Developer", icon: Monitor },
  { label: "React Developer", icon: Atom },
  { label: "Problem Solver", icon: Wrench },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 border-b border-[rgba(144,154,159,0.15)]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">01 / About</p>

        <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mb-16 tracking-tight">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-[#D9DDE0] text-lg leading-relaxed mb-6">
              I'm a Computer Science student interested in web development and
              software engineering. I enjoy building practical applications,
              learning new technologies, and turning ideas into functional and
              user-friendly experiences.
            </p>

            <p className="text-[#909A9F] text-base leading-relaxed">
              Currently seeking internship opportunities where I can apply my
              skills, grow alongside experienced developers, and contribute to
              real-world projects that make a difference.
            </p>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t) => {
              const Icon = t.icon;

              return (
                <div
                  key={t.label}
                  className="card-hover px-5 py-4 rounded-sm"
                  style={{
                    background: "#0c0c0c",
                    border: "1px solid rgba(144,154,159,0.2)",
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#D9DDE0] mb-3"
                  />

                  <span className="font-display text-sm font-medium text-[#D9DDE0] leading-snug">
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
