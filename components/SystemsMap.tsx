"use client";

import { useState } from "react";
import { ALSO_WRITES, LAYERS, TRACES } from "@/lib/content";

export default function SystemsMap() {
  const [active, setActive] = useState<string | null>(null);
  const trace = TRACES.find((t) => t.id === active);
  const lit = new Set(trace?.uses ?? []);

  return (
    <section id="stack" className="stack" aria-labelledby="stack-title">
      <div className="section-intro">
        <h2 id="stack-title" className="section-title">
          The stack, as a path rather than a pile
        </h2>
        <p className="section-lede">
          Most of what I build moves the same way: data comes in, a model learns from it or
          solves with it, a service makes it callable, and something people use sits on top. Pick
          a project or job to see which tools it ran through.
        </p>
      </div>

      <div className="stack-picker" role="group" aria-label="Show tools used by">
        {TRACES.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={active === t.id}
            className={active === t.id ? "is-on" : ""}
            onClick={() => setActive(active === t.id ? null : t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={`stack-map ${trace ? "is-tracing" : ""}`}>
        {LAYERS.map((layer) => {
          const hit = layer.items.some((i) => lit.has(i));
          return (
            <div key={layer.name} className={`layer ${hit ? "is-hit" : ""}`}>
              <h3 className="layer-name">{layer.name}</h3>
              <p className="layer-note">{layer.note}</p>
              <ul>
                {layer.items.map((i) => (
                  <li key={i} className={lit.has(i) ? "is-lit" : ""}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="note">
        Also comfortable in {ALSO_WRITES.join(", ")}. Coursework covers software engineering,
        databases, data structures and algorithms, and object-oriented programming.
      </p>
    </section>
  );
}
