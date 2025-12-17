// app/page.tsx
import Link from "next/link";

type Item = {
  title: string;
  description: string;
  href: string;
  meta?: string;
  tags?: string[];
};

const PROJECTS: Item[] = [
  {
    title: "ClimateCode.io — GPT-powered Code Analysis CLI",
    description:
      "Built a GPT-powered CLI that analyzes Python code via AST parsing. Improved runtime by 17% and designed a modular plugin architecture for extendable quality checks.",
    href: "#", // TODO: replace with GitHub/demo link
    meta: "Python • OpenAI API • AST",
    tags: ["Python", "OpenAI API", "AST", "CLI"],
  },
  {
    title: "Geospatial AI for Disaster Mitigation",
    description:
      "Trained a CNN to predict landslide risk zones and built a Flask dashboard for real-time inference. Reduced emergency alert response time by 20% via an automated prediction pipeline.",
    href: "#", // TODO: replace with GitHub/demo link
    meta: "TensorFlow • Flask • QGIS",
    tags: ["TensorFlow", "Flask", "Computer Vision", "Geospatial"],
  },
  {
    title: "Smiley — Mood & Productivity Prediction App",
    description:
      "Built a cross-platform Flutter app that predicts mood/productivity with 82% accuracy. Integrated Firebase for auth, real-time storage, and analytics.",
    href: "#", // TODO: replace with GitHub/demo link
    meta: "Flutter • Firebase • ML",
    tags: ["Flutter", "Firebase", "ML", "Mobile"],
  },
  {
    title: "Fake News Detector",
    description:
      "Built a TF-IDF + Logistic Regression pipeline achieving 91% precision / 87% recall. Presented the project’s design and ML pipeline at Microsoft Toronto.",
    href: "#", // TODO: replace with GitHub/demo link
    meta: "NLP • Scikit-learn",
    tags: ["NLP", "Scikit-learn", "ML", "Classification"],
  },
];

const BLOGS: Item[] = [
  {
    title: "Uncovering the Surprise Response",
    description:
      "Using machine learning to analyze EEG data and explore how the brain reacts to unexpected stimuli.",
    href: "https://medium.com/@serjankaur/uncovering-the-surprise-response-using-machine-learning-to-analyze-eeg-data-a2e1afd6d450",
    meta: "EEG + ML",
    tags: ["ML", "EEG", "Research"],
  },
  {
    title: "Solving the Education Crisis Using Brain–Computer Interface",
    description:
      "A BCI-driven approach to learning and accessibility—where neuroscience meets practical education outcomes.",
    href: "https://medium.com/studentsxstudents/solving-the-education-crisis-using-brain-computer-interface-b793e2c8ca01",
    meta: "BCI",
    tags: ["BCI", "Education", "Systems"],
  },
  {
    title: "Using ML in Personality Analysis",
    description:
      "How ML can model behavioral traits—plus the tradeoffs, bias risks, and limits.",
    href: "https://medium.com/innonation-publication/using-ml-in-personality-analysis-65ce7d1d635b",
    meta: "ML + Behavior",
    tags: ["ML", "Ethics", "Data"],
  },
  {
    title: "ML Can Help Detect Fake News (and this isn’t fake news)",
    description:
      "How misinformation detection works, what features matter, and where models fail in the real world.",
    href: "https://medium.com/@serjankaur/breaking-news-ml-can-help-detect-fake-news-and-this-isnt-fake-news-e1629268bb20",
    meta: "NLP",
    tags: ["NLP", "ML", "Trust & Safety"],
  },
  {
    title: "A Crossover Between AI and Advertising",
    description:
      "Where AI helps in marketing—targeting, measurement, creative iteration, and personalization.",
    href: "https://medium.com/@serjankaur/a-crossover-between-ai-and-advertising-7b95568bf863",
    meta: "AI x Ads",
    tags: ["AI", "Marketing", "Product"],
  },
  {
    title: "A Quick Review of Deep Neural Networks",
    description:
      "A practical overview of deep neural networks—what they do well and what to watch out for.",
    href: "https://medium.com/@serjankaur/a-quick-review-of-deep-neural-network-73188709a00a",
    meta: "Deep Learning",
    tags: ["Deep Learning", "Foundations", "ML"],
  },
];

const EXPERIENCE: Array<{
  role: string;
  org: string;
  timeframe: string;
  location?: string;
  bullets: string[];
}> = [
  {
    role: "Head Intern",
    org: "Achievable — EdTech Startup",
    timeframe: "Oct 2025 — Present",
    location: "Remote",
    bullets: [
      "Built internal analytics dashboards using JavaScript, Python, and Firebase to track user engagement and product metrics.",
      "Implemented A/B testing infrastructure with custom event logging, improving conversion rates by 15%.",
      "Developed reusable front-end components for student-facing pages using HTML/CSS/JavaScript.",
    ],
  },
  {
    role: "Project Consultant — FuturePath",
    org: "Riipen",
    timeframe: "Sept 2024 — Present",
    location: "Remote",
    bullets: [
      "Delivered 4+ technical consulting projects focused on API integrations, automation engineering, and CRM architecture.",
      "Developed workflow automations using Notion API, Airtable API, and Zapier, reducing admin workload by 50%.",
      "Built Python scripts and webhook-triggered pipelines to sync data across internal systems.",
    ],
  },
  {
    role: "Technology Lead",
    org: "Pioneer Medcare — Healthcare Startup",
    timeframe: "Jan 2024 — Present",
    location: "Toronto, ON",
    bullets: [
      "Engineered Shopify ecommerce platform using Liquid, JavaScript, and HTML/CSS for 200+ medical SKUs.",
      "Built automation pipelines using Zapier, Apps Script, and Python to sync orders, inventory, and analytics, cutting operations time by 40%.",
      "Integrated Amazon Seller Central APIs, automating product listings and increasing marketplace revenue by 3x.",
      "Built internal tools for catalog optimization and metadata generation using Python.",
    ],
  },
  {
    role: "Vice President, Events",
    org: "Western Cyber Society",
    timeframe: "Sept 2025 — Present",
    location: "London, ON",
    bullets: [
      "Led technical execution of FAANG Day and IBM Night, organizing workshops on AI, cloud computing, and software engineering.",
      "Implemented automation scripts for event scheduling, registrations, and logistics using Notion API.",
      "Partnered with IBM and Deloitte engineers to deliver hands-on technical sessions.",
    ],
  },
];

const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "HTML", "CSS", "Liquid"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "TensorFlow", "Flask", "Express"],
  },
  {
    label: "Tools",
    items: ["Git", "Firebase", "Docker", "AWS (Lambda, S3)", "Stripe API", "Zapier", "Google Apps Script"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "Firestore"],
  },
  {
    label: "Other",
    items: ["REST APIs", "CI/CD", "Notion API", "Airtable API", "Figma", "OpenAI API"],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({ item }: { item: Item }) {
  const isExternal = item.href.startsWith("http");
  const Comp: any = isExternal ? "a" : Link;
  const props = isExternal
    ? { href: item.href, target: "_blank", rel: "noreferrer" }
    : { href: item.href };

  return (
    <Comp
      {...props}
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
        </div>
        {item.meta ? <span className="shrink-0 text-xs text-zinc-500">{item.meta}</span> : null}
      </div>

      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      ) : null}

      <div className="mt-4 text-sm font-medium text-zinc-900">
        <span className="group-hover:underline">Open →</span>
      </div>
    </Comp>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-semibold text-zinc-900">
            Serjan Kaur
          </Link>
          <nav className="hidden gap-5 text-sm text-zinc-700 md:flex">
            <a href="#projects" className="hover:text-zinc-900">
              Projects
            </a>
            <a href="#blogs" className="hover:text-zinc-900">
              Blogs
            </a>
            <a href="#experience" className="hover:text-zinc-900">
              Experience
            </a>
            <a href="#skills" className="hover:text-zinc-900">
              Skills
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <header className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm text-zinc-600">BSc Computer Science • Western University (2023–2027)</p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Ideas in. Software out.
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-600">
            I build automation-first software and developer tools—shipping products that reduce manual work, improve
            reliability, and move fast from prototype to production.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* TODO: replace LinkedIn URL if needed */}
            <a
              href="https://www.linkedin.com/in/serjan"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              LinkedIn
            </a>

            <a
              href="https://medium.com/@serjankaur"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300"
            >
              Medium
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300"
            >
              Resume
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Tip: Replace the “#” links on project cards with GitHub or demo URLs when ready.
          </p>
        </header>

        {/* Projects */}
        <Section id="projects" title="Projects" subtitle="Selected projects with measurable outcomes.">
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Card key={p.title} item={p} />
            ))}
          </div>
        </Section>

        {/* Blogs */}
        <Section
          id="blogs"
          title="Blogs"
          subtitle="Writing that reflects how I think — ML, systems, and real-world applications."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {BLOGS.map((b) => (
              <Card key={b.href} item={b} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" subtitle="Work across product, automation, and execution.">
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <div
                key={`${e.role}-${e.org}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-zinc-900">
                    <span className="font-semibold">{e.role}</span>{" "}
                    <span className="text-zinc-500">• {e.org}</span>
                    {e.location ? <span className="text-zinc-400"> • {e.location}</span> : null}
                  </div>
                  <div className="text-sm text-zinc-500">{e.timeframe}</div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="space-y-4">
            {SKILLS.map((group) => (
              <div key={group.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-zinc-900">{group.label}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Pill key={`${group.label}-${s}`}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-zinc-700">
              If you’re hiring or want to collaborate, email is the fastest way to reach me.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* TODO: replace with your preferred email */}
              <a
                href="mailto:serjankaur@gmail.com"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/serjan"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Serjan Kaur
        </footer>
      </div>
    </main>
  );
}
