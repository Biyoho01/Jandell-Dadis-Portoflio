export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(144,154,159,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full py-20">
        {/* Hero Content */}
        <div className="max-w-4xl">
          <p className="section-label mb-6">Portfolio · 2026</p>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-800 leading-none tracking-tight text-white mb-4">
            Hi, I'm{" "}
            <span className="text-[#909A9F]" style={{ fontWeight: 800 }}>
              Jandell.
            </span>
          </h1>

          <p className="font-display text-xl sm:text-2xl text-[#D9DDE0] font-medium mt-6 mb-4 tracking-tight">
            Computer Science Student &amp; Web Developer
          </p>

          <div className="accent-line w-24 my-6" />

          <p className="text-[#909A9F] text-base leading-relaxed max-w-md mb-10">
            I build modern, responsive web applications using React, TypeScript,
            and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary cursor-pointer">
              View My Projects
            </a>

            <a href="#contact" className="btn-outline cursor-pointer">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 accent-line" />
    </section>
  );
}
