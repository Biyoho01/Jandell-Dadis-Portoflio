export default function Footer() {
  return (
    <footer
      style={{ background: "#111111" }}
      className="px-6 py-8 border-t border-[rgba(144,154,159,0.15)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-sm font-medium text-[#555]">
          Built by Jandell Dadis · 2026
        </span>
        <span className="font-mono text-xs text-[#333]">
          Built with React &amp; TypeScript
        </span>
      </div>
    </footer>
  );
}
