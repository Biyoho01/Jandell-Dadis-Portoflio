import { contact } from "../data/portfolio";

function IconEmail() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="2"
        y="5"
        width="18"
        height="13"
        rx="2"
        stroke="#909A9F"
        strokeWidth="1.3"
      />
      <path
        d="M2 8l9 6 9-6"
        stroke="#909A9F"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2C6.03 2 2 6.03 2 11c0 3.98 2.58 7.35 6.16 8.54.45.08.61-.19.61-.43v-1.5c-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.61.74.08-.58.31-.97.57-1.19-1.99-.23-4.09-1-4.09-4.43 0-.98.35-1.78.93-2.41-.09-.23-.4-1.14.09-2.37 0 0 .76-.24 2.5.93A8.68 8.68 0 0111 7.3c.77 0 1.55.1 2.28.3 1.73-1.17 2.5-.93 2.5-.93.49 1.23.18 2.14.09 2.37.58.63.93 1.43.93 2.41 0 3.44-2.1 4.2-4.1 4.42.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43C17.42 18.35 20 14.98 20 11c0-4.97-4.03-9-9-9z"
        fill="#909A9F"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="2"
        y="2"
        width="18"
        height="18"
        rx="3"
        stroke="#909A9F"
        strokeWidth="1.3"
      />
      <path
        d="M6 9v7M6 6.5v.5"
        stroke="#909A9F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 16v-4c0-1.1.9-2 2-2s2 .9 2 2v4"
        stroke="#909A9F"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10 9v7"
        stroke="#909A9F"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const contactItems = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: IconEmail,
    sublabel: "Send me a message",
  },
  {
    label: "GitHub",
    value: "@Biyoho01",
    href: contact.github,
    Icon: IconGithub,
    sublabel: "Browse my repositories",
  },
  {
    label: "LinkedIn",
    value: "Jandell Dadis",
    href: contact.linkedin,
    Icon: IconLinkedIn,
    sublabel: "Connect with me",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 border-b border-[rgba(144,154,159,0.15)]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">06 / Contact</p>
        <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mb-16 tracking-tight">
          Get In Touch
        </h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card-hover block px-6 py-6 rounded-sm group"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(144,154,159,0.2)",
              }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                <item.Icon />
              </div>
              <h3 className="font-display text-white font-600 text-base mb-1">
                {item.label}
              </h3>
              <p className="font-mono text-[#909A9F] text-xs mb-1">
                {item.value}
              </p>
              <p className="text-[#555] text-xs">{item.sublabel}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
