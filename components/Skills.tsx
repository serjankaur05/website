const SKILL_GROUPS = [
  {
    area: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    area: "Backend & Systems",
    skills: ["OR-Tools / CP-SAT", "Constraint Programming", "REST API Design", "Webhooks", "Node.js"],
  },
  {
    area: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Plotly", "RFM Analysis", "Firebase", "Data Modeling", "ETL Pipelines"],
  },
  {
    area: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Streamlit", "Shopify / Liquid"],
  },
  {
    area: "Automation & Tooling",
    skills: ["Zapier", "Notion API", "Airtable API", "Amazon Seller Central API", "Apps Script", "Git"],
  },
  {
    area: "ML & Research",
    skills: ["NLP", "EEG / BCI", "Scikit-learn", "Deep Learning", "Prompt Engineering"],
  },
];

const EDUCATION = {
  school: "University of Western Ontario",
  degree: "B.Sc. Computer Science",
  period: "2023 – 2027",
  highlights: ["Algorithms & Data Structures", "Operating Systems", "Database Systems", "Software Engineering"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem 8rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ height: "1px", background: "var(--border)", marginBottom: "4rem" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <p className="section-label" style={{ marginBottom: "2rem" }}>Technical skills</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {SKILL_GROUPS.map((group) => (
              <div key={group.area}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-tertiary)", marginBottom: "0.6rem", letterSpacing: "0.04em" }}>
                  {group.area}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {group.skills.map((skill) => (
                    <span key={skill} style={{ fontSize: "13px", color: "var(--text-secondary)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "3px", fontWeight: 300 }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="section-label" style={{ marginBottom: "2rem" }}>Education</p>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>
              {EDUCATION.period}
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "var(--text-primary)", margin: "0 0 4px" }}>{EDUCATION.degree}</p>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: "0 0 1.25rem" }}>{EDUCATION.school}</p>
            <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />
            <p className="section-label" style={{ marginBottom: "0.75rem", fontSize: "10px" }}>Relevant coursework</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {EDUCATION.highlights.map((c) => (
                <span key={c} style={{ fontSize: "12px", color: "var(--text-tertiary)", border: "1px solid var(--border)", padding: "3px 8px", borderRadius: "3px", fontFamily: "var(--font-mono)" }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ borderLeft: "2px solid var(--accent-dim-border)", paddingLeft: "1rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem", fontSize: "10px" }}>What I bring</p>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 0.875rem", fontWeight: 300 }}>
              I build systems end-to-end — constraint solvers, data pipelines, and production automation used by real businesses. I&apos;ve shipped across backend, data, and product at multiple startups and picked up the judgment to know what to build versus what to skip.
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
              I work well in high-autonomy environments, write about what I learn, and care about building things that hold up under real usage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
