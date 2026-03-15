"use client";
import { useState } from "react";

const PROJECTS = [
  {
    id: "exam-scheduler",
    index: "01",
    title: "Exam Scheduler",
    tagline: "Constraint-based scheduling engine for 1,000 students across 100 courses",
    description:
      "Designed and built a production-grade exam scheduler using Google OR-Tools CP-SAT — a constraint programming solver. The engine respects hard constraints (no student double-booked) and soft fairness rules (max N exams per day), then produces an optimal schedule. Includes a Streamlit interface for schedule exploration and conflict reporting.",
    impact: [
      "Schedules ~1,000 students across ~100 courses with zero conflicts",
      "Encodes fairness constraints to prevent student overload",
      "CP-SAT solver finds optimal solutions in polynomial time",
    ],
    stack: ["Python", "OR-Tools", "CP-SAT", "Streamlit", "Constraint Programming"],
    category: "Systems / Backend",
    type: "optimization",
    githubUrl: "https://github.com/serjankaur05",
    demoUrl: "https://examscheduler.streamlit.app/",
    accent: "#c8f066",
  },
  {
    id: "shopify-analytics",
    index: "02",
    title: "Shopify Analytics Engine",
    tagline: "Merchant-facing analytics dashboard with RFM segmentation",
    description:
      "Built an end-to-end analytics pipeline that ingests raw Shopify transaction data and surfaces actionable insights. Goes beyond basic charts — implements RFM (Recency, Frequency, Monetary) customer segmentation to identify top customers, at-risk segments, and revenue concentration. Revenue trend decomposition, product velocity ranking, and cohort-style repeat customer analysis.",
    impact: [
      "RFM segmentation identifies high-value vs at-risk customer cohorts",
      "Product performance ranking with trend decomposition",
      "Repeat purchase rate and customer lifetime value proxies",
    ],
    stack: ["Python", "Pandas", "Plotly", "Streamlit", "RFM Analysis", "Data Modeling"],
    category: "Data / Analytics",
    type: "data",
    githubUrl: "https://github.com/serjankaur05",
    demoUrl: "https://shopify-analytics-engine.streamlit.app/",
    accent: "#6ba3ff",
  },
  {
    id: "ride-comparison",
    index: "03",
    title: "Universal Ride Price Comparison Engine",
    tagline: "Multi-provider ride scoring with configurable recommendation logic",
    description:
      "A transportation decision tool that normalizes data across ride providers and applies a configurable scoring model to recommend the cheapest, fastest, or best-value option. Built a provider abstraction layer so new services can be added without touching scoring logic. Scoring weights are user-configurable — a simple but real product decision.",
    impact: [
      "Provider abstraction decouples data ingestion from recommendation logic",
      "Configurable scoring model supports multiple optimization objectives",
      "Route normalization handles different provider data formats",
    ],
    stack: ["Python", "Streamlit", "Data Modeling", "Recommendation Logic", "API Design"],
    category: "Product / Full-Stack",
    type: "product",
    githubUrl: "https://github.com/serjankaur05",
    demoUrl: "https://ride-price-engine.streamlit.app/",
    accent: "#f0b429",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Systems / Backend": { bg: "rgba(200,240,102,0.08)", text: "#c8f066" },
  "Data / Analytics": { bg: "rgba(107,163,255,0.08)", text: "#6ba3ff" },
  "Product / Full-Stack": { bg: "rgba(240,180,41,0.08)", text: "#f0b429" },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>("exam-scheduler");

  return (
    <section
      id="projects"
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "10rem 2rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ marginBottom: "4rem" }}>
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>
          Selected Work
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Projects built to ship,{" "}
          <span style={{ color: "var(--text-secondary)" }}>not to demo.</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {PROJECTS.map((project) => {
          const isOpen = expanded === project.id;
          const catColor = CATEGORY_COLORS[project.category];

          return (
            <div
              key={project.id}
              style={{
                border: "1px solid",
                borderColor: isOpen ? "var(--border-hover)" : "var(--border)",
                borderRadius: "8px",
                background: isOpen ? "var(--bg-surface)" : "transparent",
                overflow: "hidden",
                transition: "all 0.25s ease",
                marginBottom: "8px",
              }}
            >
              {/* Header row — always visible */}
              <button
                onClick={() => setExpanded(isOpen ? null : project.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flex: 1 }}>
                  {/* Index */}
                  <span
                    className="mono"
                    style={{
                      fontSize: "12px",
                      color: "var(--text-tertiary)",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    {project.index}
                  </span>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "6px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                          margin: 0,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-mono)",
                          padding: "3px 8px",
                          borderRadius: "3px",
                          background: catColor.bg,
                          color: catColor.text,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        margin: 0,
                        fontWeight: 300,
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Expand indicator */}
                <span
                  style={{
                    color: "var(--text-tertiary)",
                    fontSize: "18px",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  +
                </span>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div
                  style={{
                    padding: "0 1.5rem 1.5rem 1.5rem",
                    paddingLeft: "calc(1.5rem + 12px + 1.5rem)", // align with title
                  }}
                >
                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border)",
                      marginBottom: "1.5rem",
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      margin: "0 0 1.5rem",
                      fontWeight: 300,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technical highlights */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p
                      className="section-label"
                      style={{ marginBottom: "0.75rem", fontSize: "10px" }}
                    >
                      Technical highlights
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {project.impact.map((point, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            marginBottom: "8px",
                            fontWeight: 300,
                          }}
                        >
                          <span style={{ color: project.accent, flexShrink: 0, marginTop: "1px" }}>
                            ›
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="mono"
                        style={{
                          fontSize: "11px",
                          color: "var(--text-tertiary)",
                          border: "1px solid var(--border)",
                          padding: "3px 8px",
                          borderRadius: "3px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        border: "1px solid var(--border)",
                        padding: "6px 14px",
                        borderRadius: "4px",
                        transition: "all 0.15s",
                        letterSpacing: "0.03em",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--border-hover)";
                        el.style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--text-secondary)";
                      }}
                    >
                      GitHub →
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "13px",
                          fontFamily: "var(--font-mono)",
                          color: project.accent,
                          textDecoration: "none",
                          border: `1px solid ${project.accent}40`,
                          padding: "6px 14px",
                          borderRadius: "4px",
                          background: `${project.accent}0d`,
                          transition: "all 0.15s",
                          letterSpacing: "0.03em",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = "0.8";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = "1";
                        }}
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
