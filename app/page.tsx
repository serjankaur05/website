import Link from "next/link";

const PROFILE = {
  name: "Serjan Kaur",
  headline: "Software Engineer • Systems • Automation • ML",
  subheadline:
    "CS @ Western University (2023–2027). I ship production-grade tools and pipelines with measurable impact.",
  location: "Greater Toronto Area, Canada",
  email: "serjankaur@gmail.com",
  linkedin: "https://linkedin.com/in/serjan",
  github: "https://github.com/serjankaur05",
  resumeUrl: "/resume.pdf",
};

const HIGHLIGHTS = [
  "Built analytics + experimentation tooling; improved conversion by 15%.",
  "Designed automation pipelines that reduced admin/ops work by 40–50%.",
  "Shipped ML/NLP projects with strong metrics (82% accuracy, 91% precision).",
];

const EXPERIENCE = [
  {
    role: "Head Intern",
    org: "Achievable (EdTech Startup)",
    time: "Oct 2025 – Present",
    bullets: [
      "Built internal analytics dashboards using JavaScript, Python, and Firebase to track engagement and product metrics.",
      "Implemented A/B testing infrastructure with custom event logging, improving conversion by 15%.",
      "Developed reusable front-end components for student-facing pages using HTML/CSS/JavaScript.",
    ],
  },
  {
    role: "Project Consultant — FuturePath",
    org: "Riipen",
    time: "Sept 2024 – Present",
    bullets: [
      "Delivered 4+ technical consulting projects across API integrations, automation engineering, and CRM architecture.",
      "Developed webhook-triggered pipelines to sync data across tools, reducing admin workload by 50%.",
      "Built Python scripts and webhooks to integrate Notion, Airtable, and Zapier workflows.",
    ],
  },
  {
    role: "Technology Lead",
    org: "Pioneer Medcare (Healthcare Startup)",
    time: "Jan 2024 – Present",
    bullets: [
      "Engineered Shopify ecommerce platform (Liquid/JS/HTML/CSS) supporting 200+ medical SKUs.",
      "Built automation pipelines (Zapier, Apps Script, Python) syncing orders, inventory, and analytics, cutting ops time by 40%.",
      "Integrated marketplace tooling/APIs to automate listings and increase marketplace revenue by 3×.",
      "Built internal Python tools for catalog optimization and metadata generation.",
    ],
  },
  {
    role: "VP, Events",
    org: "Western Cyber Society",
    time: "Sept 2025 – Present",
    bullets: [
      "Led technical execution for FAANG Day and IBM Night; coordinated workshops on AI, cloud, and software engineering.",
      "Built lightweight automations for scheduling and registrations using Notion API workflows.",
    ],
  },
];

const PROJECTS = [
  {
    name: "ClimateCode.io",
    oneLiner: "GPT-powered CLI static analysis tool for Python performance + quality.",
    tech: ["Python", "AST", "OpenAI API"],
    metrics: ["Improved runtime by 17%", "Modular plugin architecture"],
    links: {
      repo: "", // add if public
      demo: "",
    },
    details: [
      "Parses Python via AST to identify performance smells and code issues.",
      "Plugin system to add checks without touching the core engine.",
      "Outputs concise, actionable suggestions (and can be extended to patch-style diffs).",
    ],
  },
  {
    name: "Geospatial AI for Disaster Mitigation",
    oneLiner: "CNN model to predict landslide risk zones + real-time inference dashboard.",
    tech: ["TensorFlow", "Flask", "QGIS"],
    metrics: ["Reduced response time by 20%"],
    links: { repo: "", demo: "" },
    details: [
      "Trained CNN on geospatial features to classify risk zones.",
      "Flask dashboard for real-time inference and visualization.",
      "Automated inference pipeline to speed up operational workflows.",
    ],
  },
  {
    name: "Smiley",
    oneLiner: "Cross-platform app predicting mood/productivity from ML signals.",
    tech: ["Flutter", "Firebase", "ML"],
    metrics: ["82% accuracy"],
    links: { repo: "", demo: "" },
    details: [
      "Flutter app with Firebase auth + real-time data storage.",
      "ML model predicts mood/productivity from user features.",
      "Instrumentation for analytics and iteration on model quality.",
    ],
  },
  {
    name: "Fake News Detector",
    oneLiner: "NLP pipeline for misinformation classification (TF-IDF + Logistic Regression).",
    tech: ["Python", "Scikit-learn", "NLP"],
    metrics: ["91% precision", "87% recall"],
    links: { repo: "", demo: "" },
    details: [
      "End-to-end pipeline: preprocessing → TF-IDF → Logistic Regression.",
      "Evaluated with precision/recall and performed basic error analysis.",
      "Presented the ML pipeline and design at Microsoft Toronto.",
    ],
  },
];

const SKILLS = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "HTML", "CSS", "Liquid"] },
  { label: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Flask", "TensorFlow"] },
  { label: "Infra & Tools", items: ["Firebase", "AWS (Lambda, S3)", "Docker", "Git", "CI/CD"] },
  { label: "Data", items: ["MySQL", "MongoDB", "Firestore"] },
  { label: "APIs & Automation", items: ["REST", "Webhooks", "Notion API", "Airtable API", "Zapier", "Apps Script", "Stripe API"] },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-5">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <div className="flex items-end gap-4">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-zinc-200" />
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{PROFILE.name}</span>
              <span className="hidden text-sm text-zinc-600 sm:inline">• {PROFILE.headline}</span>
            </div>

            <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
              <a href="#projects" className="hover:text-zinc-950">Projects</a>
              <a href="#experience" className="hover:text-zinc-950">Experience</a>
              <a href="#skills" className="hover:text-zinc-950">Skills</a>
              <a href="#contact" className="hover:text-zinc-950">Contact</a>
              <Link
                href={PROFILE.resumeUrl}
                className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm hover:border-zinc-300"
              >
                Resume
              </Link>
            </nav>

            <div className="md:hidden">
              <Link
                href={PROFILE.resumeUrl}
                className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm hover:border-zinc-300"
              >
                Resume
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container>
          {/* Hero */}
          <section className="py-14">
            <p className="text-sm text-zinc-600">{PROFILE.location}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{PROFILE.name}</h1>
            <p className="mt-2 text-lg text-zinc-800">{PROFILE.headline}</p>
            <p className="mt-4 max-w-3xl text-base text-zinc-700">{PROFILE.subheadline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
                View Projects
              </a>
              <Link href={PROFILE.resumeUrl} className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium hover:border-zinc-300">
                Download Resume
              </Link>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium hover:border-zinc-300">
                LinkedIn
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium hover:border-zinc-300">
                GitHub
              </a>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-sm text-zinc-700">{h}</p>
                </div>
              ))}
            </div>
          </section>

          <Section id="projects" title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <div key={p.name} className="rounded-xl border border-zinc-200 p-5 hover:border-zinc-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold">{p.name}</h3>
                      <p className="mt-1 text-sm text-zinc-700">{p.oneLiner}</p>
                    </div>

                    <div className="flex gap-2">
                      {p.links.repo ? (
                        <a className="text-sm text-zinc-700 hover:text-zinc-950" href={p.links.repo} target="_blank" rel="noreferrer">
                          Repo
                        </a>
                      ) : null}
                      {p.links.demo ? (
                        <a className="text-sm text-zinc-700 hover:text-zinc-950" href={p.links.demo} target="_blank" rel="noreferrer">
                          Demo
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    {p.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>

                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium text-zinc-900">Technical details</summary>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                      {p.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <div className="space-y-4">
              {EXPERIENCE.map((e) => (
                <div key={e.role + e.org} className="rounded-xl border border-zinc-200 p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{e.role}</h3>
                      <p className="text-sm text-zinc-700">{e.org}</p>
                    </div>
                    <p className="text-sm text-zinc-600">{e.time}</p>
                  </div>

                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              {SKILLS.map((s) => (
                <div key={s.label} className="rounded-xl border border-zinc-200 p-5">
                  <h3 className="text-sm font-semibold">{s.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Pill key={i}>{i}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-700">Best way to reach me:</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a className="underline underline-offset-4" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
                <span className="text-zinc-400">•</span>
                <a className="underline underline-offset-4" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span className="text-zinc-400">•</span>
                <a className="underline underline-offset-4" href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <p className="mt-4 text-xs text-zinc-500">Built with Next.js + Tailwind. Designed for fast recruiter scanning.</p>
            </div>
          </Section>

          <footer className="py-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} {PROFILE.name}</footer>
        </Container>
      </main>
    </div>
  );
}
