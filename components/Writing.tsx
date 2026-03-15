const POSTS = [
  {
    title: "Uncovering the Surprise Response",
    subtitle: "Using machine learning to analyze EEG data and explore how the brain reacts to unexpected stimuli.",
    tags: ["EEG", "ML", "Research"],
    url: "https://medium.com/@serjankaur/uncovering-the-surprise-response-using-machine-learning-to-analyze-eeg-data-a2e1afd6d450",
    date: "Dec 2022",
    accent: "#c8f066",
  },
  {
    title: "Solving the Education Crisis Using Brain–Computer Interface",
    subtitle: "A BCI-driven approach to learning and accessibility — where neuroscience meets practical outcomes.",
    tags: ["BCI", "Education", "Systems"],
    url: "https://medium.com/studentsxstudents/solving-the-education-crisis-using-brain-computer-interface-b793e2c8ca01",
    date: "Oct 2022",
    accent: "#6ba3ff",
  },
  {
    title: "Using ML in Personality Analysis",
    subtitle: "How ML can model behavioral traits — plus the tradeoffs, bias risks, and limits of the approach.",
    tags: ["ML", "Ethics", "Data"],
    url: "https://medium.com/innonation-publication/using-ml-in-personality-analysis-65ce7d1d635b",
    date: "Jul 2022",
    accent: "#c8f066",
  },
  {
    title: "ML Can Help Detect Fake News (and This Isn't Fake News)",
    subtitle: "How misinformation detection works, what features matter, and where models fail in the real world.",
    tags: ["NLP", "ML", "Trust & Safety"],
    url: "https://medium.com/@serjankaur/breaking-news-ml-can-help-detect-fake-news-and-this-isnt-fake-news-e1629268bb20",
    date: "Feb 2022",
    accent: "#f0b429",
  },
  {
    title: "A Crossover Between AI and Advertising",
    subtitle: "Where AI helps in marketing — targeting, measurement, creative iteration, and personalization.",
    tags: ["AI", "Marketing", "Product"],
    url: "https://medium.com/@serjankaur/a-crossover-between-ai-and-advertising-7b95568bf863",
    date: "2022",
    accent: "#6ba3ff",
  },
  {
    title: "A Quick Review of Deep Neural Networks",
    subtitle: "A practical overview of deep neural networks — what they do well and where to watch out.",
    tags: ["Deep Learning", "Foundations", "ML"],
    url: "https://medium.com/@serjankaur",
    date: "2022",
    accent: "#c8f066",
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
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
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Writing
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
            How I think about{" "}
            <span style={{ color: "var(--text-secondary)" }}>ML and systems.</span>
          </h2>
        </div>
        <a
          href="https://medium.com/@serjankaur"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-tertiary)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")
          }
        >
          All posts on Medium ↗
        </a>
      </div>

      {/* Grid of post cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        {POSTS.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "1.5rem",
              background: "var(--bg)",
              textDecoration: "none",
              transition: "background 0.15s",
              position: "relative",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg-surface)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: post.accent,
                opacity: 0.4,
              }}
            />

            {/* Tags */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "1rem", flexWrap: "wrap" }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono"
                  style={{
                    fontSize: "10px",
                    color: "var(--text-tertiary)",
                    border: "1px solid var(--border)",
                    padding: "2px 6px",
                    borderRadius: "3px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                color: "var(--text-primary)",
                margin: "0 0 0.6rem",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              {post.title}
            </p>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                margin: "0 0 1.25rem",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {post.subtitle}
            </p>

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                className="mono"
                style={{ fontSize: "10px", color: "var(--text-tertiary)", letterSpacing: "0.04em" }}
              >
                {post.date}
              </span>
              <span
                style={{ fontSize: "12px", color: "var(--text-tertiary)", transition: "color 0.15s" }}
              >
                Read →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
