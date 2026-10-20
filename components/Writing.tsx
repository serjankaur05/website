import { ARTICLES, LINKS } from "@/lib/content";

// A small trace, unique to each title, like a line on a lab recording.
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function Trace({ seed }: { seed: string }) {
  let h = hash(seed);
  const rnd = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    h = Math.imul(h ^ (h >>> 13), 3266489909) >>> 0;
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const f1 = 1 + rnd() * 3;
  const f2 = 4 + rnd() * 6;
  const spike = 0.2 + rnd() * 0.6;
  const pts: string[] = [];
  for (let x = 0; x <= 120; x += 2) {
    const t = x / 120;
    const bump = Math.exp(-Math.pow((t - spike) * 9, 2)) * 14;
    const y =
      20 -
      Math.sin(t * Math.PI * 2 * f1) * 5 -
      Math.sin(t * Math.PI * 2 * f2) * 2 -
      bump * (rnd() > 0.5 ? 1 : -0.6);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return (
    <svg className="trace" viewBox="0 0 120 40" aria-hidden="true" focusable="false">
      <polyline points={pts.join(" ")} />
    </svg>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="writing" aria-labelledby="writing-title">
      <div className="section-intro">
        <h2 id="writing-title" className="section-title">
          Notes from the reading pile
        </h2>
        <p className="section-lede">
          Before I was building AI tools I was writing about them: brains, misinformation, bias, and
          what machine learning is actually good for.
        </p>
      </div>

      <ol className="journal">
        {ARTICLES.map((a) => (
          <li key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="entry">
              <Trace seed={a.title} />
              <span className="entry-title">{a.title}</span>
              <span className="entry-dek">{a.dek}</span>
              <span className="entry-meta">
                {a.where}, {a.when}
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p className="writing-more">
        <a href={LINKS.medium} target="_blank" rel="noopener noreferrer">
          Everything on Medium
        </a>
      </p>
    </section>
  );
}
