"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <span
        className="mono"
        style={{ fontSize: "13px", color: "var(--text-secondary)", letterSpacing: "0.04em" }}
      >
        serjan.dev
      </span>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["projects", "experience", "writing", "skills", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            {item}
          </a>
        ))}
        <a
          href="https://github.com/serjankaur05/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            textDecoration: "none",
            border: "1px solid var(--accent-dim-border)",
            padding: "5px 14px",
            borderRadius: "4px",
            background: "var(--accent-dim)",
            transition: "all 0.2s",
            letterSpacing: "0.03em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(200,240,102,0.2)";
            el.style.borderColor = "rgba(200,240,102,0.5)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--accent-dim)";
            el.style.borderColor = "var(--accent-dim-border)";
          }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
