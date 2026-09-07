import { projects } from "../data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <article
      className="card-hover rounded-sm overflow-hidden flex flex-col"
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(144,154,159,0.2)",
      }}
    >
      {/* Project Screenshot */}
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={project.screenshot}
          alt={`${project.name} screenshot`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Project Number */}
        <span
          className="absolute top-3 left-3 section-label"
          style={{
            opacity: 0.8,
            zIndex: 1,
            background: "rgba(0, 0, 0, 0.65)",
            padding: "4px 8px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Project Name */}
        <h3 className="font-display text-xl font-600 text-white mb-3 leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-[#909A9F] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm cursor-pointer"
            >
              View Project
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm cursor-pointer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 border-b border-[rgba(144,154,159,0.15)]"
      style={{ background: "#030303" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <p className="section-label mb-4">02 / Work</p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white tracking-tight">
            Featured Projects
          </h2>

          <p className="text-[#909A9F] text-sm">
            Some of the projects I've built.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
