import { contact } from "../data/portfolio";

export default function CTA() {
  return (
    <section className="py-32 px-6 border-b border-[rgba(144,154,159,0.15)] cta-glow relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="section-label mb-6 inline-block">05 / Let's Connect</p>

        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 text-white mb-8 tracking-tight leading-tight">
          Let's Build Something
          <br />
          <span className="text-[#909A9F]">Together.</span>
        </h2>

        <div className="accent-line w-16 mx-auto mb-8" />

        <p className="text-[#909A9F] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          I'm currently looking for internship opportunities where I can apply my
          skills, learn from experienced developers, and contribute to meaningful
          projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="btn-primary cursor-pointer"
          >
            Download Resume
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline cursor-pointer"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
