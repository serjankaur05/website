// app/page.tsx
import Link from "next/link";

type Item = {
  title: string;
  description: string;
  href: string;
  meta?: string;
  tags?: string[];
};

const BLOGS: Item[] = [
  {
    title: "Uncovering the Surprise Response",
    description:
      "Using machine learning to analyze EEG data and explore how the brain reacts to unexpected stimuli.",
    href: "https://medium.com/@serjankaur/uncovering-the-surprise-response-using-machine-learning-to-analyze-eeg-data-a2e1afd6d450",
    meta: "Medium • EEG + ML",
    tags: ["ML", "EEG", "Research"],
  },
  {
    title: "Solving the Education Crisis Using Brain–Computer Interface",
    description:
      "A BCI-driven approach to learning and accessibility—where neuroscience meets practical education outcomes.",
    href: "https://medium.com/studentsxstudents/solving-the-education-crisis-using-brain-computer-interface-b793e2c8ca01",
    meta: "Medium • BCI",
    tags: ["BCI", "Education", "Systems"],
  },
  {
    title: "Using ML in Personality Analysis",
    description:
      "A look at how machine learning can model behavioral traits—plus the tradeoffs, bias risks, and limits.",
    href: "https://medium.com/innonation-publication/using-ml-in-personality-analysis-65ce7d1d635b",
    meta: "Medium • ML + Behavior",
    tags: ["ML", "Ethics", "Data"],
  },
  {
    title: "ML Can Help Detect Fake News (and this isn’t fake news)",
    description:
      "How ML approaches misinformation detection, what features matter, and where models fail in the real world.",
    href: "https://medium.com/@serjankaur/breaking-news-ml-can-help-detect-fake-news-and-this-isnt-fake-news-e1629268bb20",
    meta: "Medium • NLP",
    tags: ["NLP", "ML", "Trust & Safety"],
  },
  {
    title: "A Crossover Between AI and Advertising",
    description:
      "Where AI actually helps in marketing—from targeting and measurement to creative iteration and personalization.",
    href: "https://medium.com/@serjankaur/a-crossover-between-ai-and-advertising-7b95568bf863",
    meta: "Medium • AI x Ads",
    tags: ["AI", "Marketing", "Product"],
  },
  {
    title: "A Quick Review of Deep Neural Networks",
    description:
      "A simple, practical overview of deep neural networks—what they do well, and what to watch out for.",
    href: "https://medium.com/@serjankaur/a-quick-review-of-deep-neural-network-73188709a00a",
    meta: "Medium • Deep Learning",
    tags: ["Deep Learning", "Foundations", "ML"],
  },
];

const PROJECTS: Item[] = [
  {
    title: "GPT-Powered Code Analysis CLI",
    description:
      "CLI tool that analyzes Python code using AST parsing and generates actionable insights.",
    href: "#",
    meta: "Python • AST • LLM tooling",
    tags: ["Python", "AST", "LLM"],
  },
  {
    title: "Portfolio (Next.js + Tailwind)",
    description:
      "FAANG-style portfolio with clean UX, fast performance, and deploy-ready setup.",
    href: "#",
    meta: "Next.js • Tailwind • Vercel",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
];

const EXPERIENCE: Array<{
  role: string;
  org: string;
  timeframe: string;
  bullets: string[];
}> = [
  {
    role: "Computer Science Student",
    org: "Western University",
    timeframe: "2023 — Present",
    bullets: [
      "Building software projects end-to-end with a focus on clarity, reliability, and clean UX.",
      "Interested in developer tools, applied ML, and systems that reduce real-world workflow friction.",
    ],
  },
];

const SKILLS: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git",
  "APIs",
  "Data Structures",
  "ML fundamentals",
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
        {subtitle ? (
          <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
        ) : null}
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
          <h3 className="text-base font-semibold text-zinc-900">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
        </div>
        {item.meta ? (
          <span className="shrink-0 text-xs text-zinc-500">{item.meta}</span>
        ) : null}
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
          <p className="text-sm text-zinc-600">Third-year CS student</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            I build clean, reliable software — and I like turning complex ideas
            into simple products.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Interested in developer tools, applied ML, and systems that reduce
            real-world workflow friction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://serjankaur.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/serjan"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300"
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
        </header>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          subtitle="A few things I’ve built recently."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Card key={p.title} item={p} />
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Tip: Replace the “#” links above with your GitHub or demo URLs when
            ready.
          </p>
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
        <Section id="experience" title="Experience">
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
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-zinc-700">
              If you’d like to collaborate or chat about an opportunity, the
              fastest way to reach me is email.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:serjankaur@email.com"
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
            <p className="mt-3 text-xs text-zinc-500">
              (Replace the email + LinkedIn URL with your exact links.)
            </p>
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Serjan Kaur
        </footer>
      </div>
    </main>
  );
}
