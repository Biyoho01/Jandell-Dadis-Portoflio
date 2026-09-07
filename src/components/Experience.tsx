import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 border-b border-[rgba(144,154,159,0.15)]"
      style={{ background: "#030303" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">04 / Experience</p>
        <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mb-16 tracking-tight">
          Experience
        </h2>

        <div className="relative max-w-2xl">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[3px] top-2 bottom-2"
            style={{ width: 1, background: "rgba(144,154,159,0.2)" }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <div key={i} className="flex gap-8">
                {/* Dot */}
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-lg font-600 text-white">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-[#909A9F]">
                      {item.period}
                    </span>
                  </div>
                  <p className="font-display text-sm font-500 text-[#909A9F] mb-3">
                    {item.company}
                  </p>
                  <p className="text-[#777] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
