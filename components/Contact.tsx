"use client";
const LINKS = [
  { label: "GitHub", url: "https://github.com/serjankaur05/", mono: true },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/serjan-kaur-/", mono: true },
  { label: "Medium", url: "https://medium.com/@serjankaur", mono: true },
  { label: "Resume (PDF)", url: "/resume(2).pdf", mono: false },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "0 2rem 8rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ height: "1px", background: "var(--border)", marginBottom: "4rem" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        <div style={{ maxWidth: "460px" }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            Get in touch
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: "var(--accent)" }}>something real.</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              margin: "0 0 2rem",
              fontWeight: 300,
            }}
          >
            Whether you&apos;re working on an interesting engineering problem, want to collaborate
            on a project, or just want to talk shop — I&apos;m always open to a conversation.
          </p>
          <a
            href="mailto:serjankaur@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontFamily: "var(--font-mono)",
              background: "var(--accent)",
              color: "#0a0a0a",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "4px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            serjankaur@gmail.com →
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-end",
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontSize: "13px",
                fontFamily: link.mono ? "var(--font-mono)" : "var(--font-sans)",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.15s",
                letterSpacing: link.mono ? "0.03em" : "0",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: "11px", color: "var(--text-tertiary)", letterSpacing: "0.06em" }}
        >
          SERJAN KAUR · CS @ WESTERN · {new Date().getFullYear()}
        </span>
        <span
          className="mono"
          style={{ fontSize: "11px", color: "var(--text-tertiary)", letterSpacing: "0.04em" }}
        >
          built with Next.js + Tailwind
        </span>
      </div>
    </section>
  );
}
