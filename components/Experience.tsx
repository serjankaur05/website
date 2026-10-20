import { LEADERSHIP, OTHER_ROLES, ROLES } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="exp" aria-labelledby="exp-title">
      <div className="section-intro">
        <h2 id="exp-title" className="section-title">
          Where I&apos;ve been building
        </h2>
        <p className="section-lede">
          Newest first. A bank, two AI startups, a sustainability company and a medical supplier,
          which turns out to be good training for building AI that people actually rely on.
        </p>
      </div>

      <ol className="timeline">
        {ROLES.map((r) => (
          <li key={r.id} className={`tl-item ${r.now ? "is-now" : ""}`}>
            <p className="tl-when">
              <time>{r.start}</time> to <time>{r.end}</time>
              {r.now && <span className="tl-now">Now</span>}
            </p>
            <div className="tl-body">
              <h3 className="tl-org">{r.org}</h3>
              <p className="tl-title">
                {r.title}, {r.place}
              </p>
              <p className="tl-context">{r.context}</p>
              <ul className="tl-did">
                {r.did.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}

        <li className="tl-item tl-item--lead">
          <p className="tl-when">
            <time>{LEADERSHIP.start}</time> to <time>{LEADERSHIP.end}</time>
          </p>
          <div className="tl-body">
            <h3 className="tl-org">{LEADERSHIP.org}</h3>
            <p className="tl-title">{LEADERSHIP.title}, Western University</p>
            <ul className="tl-did">
              {LEADERSHIP.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </li>
      </ol>

      <div className="also">
        <h3 className="also-title">Also along the way</h3>
        <ul>
          {OTHER_ROLES.map((r) => (
            <li key={r.org}>
              <strong>{r.org}</strong> {r.title}, {r.when}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
