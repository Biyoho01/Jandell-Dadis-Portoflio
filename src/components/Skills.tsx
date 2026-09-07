import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 border-b border-[rgba(144,154,159,0.15)]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">03 / Skills</p>
        <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mb-16 tracking-tight">
          Skills &amp; Technologies
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-5">
                <span className="timeline-dot" />
                <h3 className="font-display text-sm font-600 text-[#D9DDE0] tracking-widest uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-5">
                {group.items.map((item) => (
                  <span key={item} className="skill-badge cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
