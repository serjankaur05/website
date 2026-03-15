"use client";
import { useState } from "react";

const EXPERIENCE = [
  {
    id: "liva",
    company: "Liva AI",
    role: "Operations Intern",
    type: "AI Startup",
    location: "Remote",
    period: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Optimized internal workflows across product and engineering teams to reduce process friction and improve execution speed.",
      "Implemented lightweight automation and structured documentation systems to support scalable growth.",
      "Tracked operational metrics and surfaced bottlenecks to support data-driven decision-making across teams.",
      "Collaborated cross-functionally to streamline feature rollouts and improve coordination between technical and non-technical stakeholders.",
    ],
    tags: ["Automation", "Operations", "Process Design", "Metrics"],
  },
  {
    id: "pioneer",
    company: "Pioneer Medcare",
    role: "Technology Lead",
    type: "Healthcare Startup",
    location: "Toronto, ON",
    period: "Jan 2024 — Aug 2025",
    current: false,
    bullets: [
      "Engineered a Shopify ecommerce platform in Liquid, JavaScript, and HTML/CSS for 200+ medical SKUs.",
      "Built automation pipelines using Zapier, Apps Script, and Python to sync orders, inventory, and analytics — cutting operations time by 40%.",
      "Integrated Amazon Seller Central APIs to automate product listings, increasing marketplace revenue by 3×.",
      "Built internal tooling for catalog optimization and metadata generation using Python.",
    ],
    tags: ["Python", "Shopify / Liquid", "Zapier", "Amazon APIs", "Automation"],
  },
  {
    id: "achievable",
    company: "Achievable",
    role: "Head Intern",
    type: "EdTech Startup",
    location: "Remote",
    period: "Oct 2025 — Dec 2025",
    current: false,
    bullets: [
      "Built internal analytics dashboards using JavaScript, Python, and Firebase to track user engagement and product metrics.",
      "Implemented A/B testing infrastructure with custom event logging, improving conversion rates by 15%.",
      "Developed reusable front-end components for student-facing pages using HTML, CSS, and JavaScript.",
      "Created data-driven insights to support engineering, design, and product decision-making.",
    ],
    tags: ["JavaScript", "Python", "Firebase", "A/B Testing", "Analytics"],
  },
  {
    id: "futurepath",
    company: "FuturePath via Riipen",
    role: "Project Consultant",
    type: "Technical Consulting",
    location: "Remote",
    period: "Sept 2024 — Sept 2025",
    current: false,
    bullets: [
      "Delivered 4+ consulting projects focused on API integrations, automation engineering, and CRM architecture.",
      "Built workflow automations using Notion API, Airtable API, and Zapier, reducing admin workload by 50%.",
      "Wrote Python scripts and webhook-triggered pipelines to sync data across internal client systems.",
    ],
    tags: ["Python", "Notion API", "Airtable", "Zapier", "Webhooks", "CRM"],
  },
];

const VOLUNTEER = [
  {
    id: "wcs",
    org: "Western Cyber Society",
    role: "Vice President, Events",
    period: "Sept 2025 — Present",
    current: true,
    bullets: [
      "Led technical execution of FAANG Day and IBM Night — workshops on AI, cloud computing, and software engineering attended by hundreds of students.",
      "Built automation scripts for event scheduling, registrations, and logistics using the Notion API.",
      "Partnered with engineers from IBM and Deloitte to deliver hands-on technical sessions.",
    ],
    tags: ["Event Leadership", "Notion API", "Automation", "Community"],
  },
  {
    id: "schoolsimplified",
    org: "School Simplified",
    role: "Machine Learning Manager",
    period: "Oct 2022 — Oct 2023",
    current: false,
    bullets: [
      "Developed an NLP algorithm for educational content optimization and relevance scoring.",
      "Recruited and led a team of programmers to build a universal database for accessible learning.",
      "Implemented AI-driven solutions to analyze user engagement and content performance.",
    ],
    tags: ["NLP", "Python", "Team Leadership", "Education"],
  },
];

export default function Experience() {
  const [openWork, setOpenWork] = useState<string | null>("liva");
  const [openVol, setOpenVol] = useState<string | null>(null);

  const renderCard = (
    item: (typeof EXPERIENCE)[0] | (typeof VOLUNTEER)[0],
    isOpen: boolean,
    toggle: () => void,
    isWork: boolean
  ) => {
    const workItem = isWork ? (item as typeof EXPERIENCE[0]) : null;
    const volItem = !isWork ? (item as typeof VOLUNTEER[0]) : null;

    const title = workItem ? workItem.role : volItem!.role;
    const org = workItem ? workItem.company : volItem!.org;
    const sub = workItem ? workItem.type : "";
    const period = workItem ? workItem.period : volItem!.period;
    const current = workItem ? workItem.current : volItem!.current;
    const bullets = item.bullets;
    const tags = item.tags;

    return (
      <div
        key={item.id}
        style={{
          border: "1px solid",
          borderColor: isOpen ? "var(--border-hover)" : "var(--border)",
          borderRadius: "8px",
          background: isOpen ? "var(--bg-surface)" : "transparent",
          marginBottom: "8px",
          overflow: "hidden",
          transition: "all 0.2s ease",
        }}
      >
        <button
          onClick={toggle}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "1.25rem 1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "var(--text-primary)" }}>
                {title}
              </span>
              {current && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.08em",
                    color: "var(--accent)",
                    border: "1px solid rgba(200,240,102,0.3)",
                    padding: "2px 7px",
                    borderRadius: "3px",
                    background: "rgba(200,240,102,0.07)",
                  }}
                >
                  CURRENT
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 300 }}>
                {org}
              </span>
              {sub && (
                <>
                  <span style={{ color: "var(--text-tertiary)", fontSize: "12px" }}>·</span>
                  <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{sub}</span>
                </>
              )}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            <span
              className="mono"
              style={{ fontSize: "11px", color: "var(--text-tertiary)", letterSpacing: "0.02em" }}
            >
              {period}
            </span>
            <span
              style={{
                color: "var(--text-tertiary)",
                fontSize: "16px",
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                lineHeight: 1,
              }}
            >
              +
            </span>
          </div>
        </button>

        {isOpen && (
          <div style={{ padding: "0 1.5rem 1.5rem" }}>
            <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />
            <ul style={{ margin: "0 0 1.25rem", padding: 0, listStyle: "none" }}>
              {bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  <span style={{ color: "var(--text-tertiary)", flexShrink: 0, marginTop: "1px" }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {tags.map((t) => (
                <span
                  key={t}
                  className="mono"
                  style={{
                    fontSize: "11px",
                    color: "var(--text-tertiary)",
                    border: "1px solid var(--border)",
                    padding: "3px 8px",
                    borderRadius: "3px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="experience"
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "0 2rem 8rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ height: "1px", background: "var(--border)", marginBottom: "4rem" }} />

      <div style={{ marginBottom: "4rem" }}>
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>
          Experience
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Work across product,{" "}
          <span style={{ color: "var(--text-secondary)" }}>automation, and execution.</span>
        </h2>
      </div>

      {/* Work */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p
          className="mono"
          style={{ fontSize: "11px", color: "var(--text-tertiary)", letterSpacing: "0.08em", marginBottom: "1.25rem" }}
        >
          WORK
        </p>
        {EXPERIENCE.map((item) =>
          renderCard(item, openWork === item.id, () => setOpenWork(openWork === item.id ? null : item.id), true)
        )}
      </div>

      {/* Volunteer */}
      <div>
        <p
          className="mono"
          style={{ fontSize: "11px", color: "var(--text-tertiary)", letterSpacing: "0.08em", marginBottom: "1.25rem" }}
        >
          COMMUNITY & LEADERSHIP
        </p>
        {VOLUNTEER.map((item) =>
          renderCard(item, openVol === item.id, () => setOpenVol(openVol === item.id ? null : item.id), false)
        )}
      </div>
    </section>
  );
}
