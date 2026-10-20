"use client";

import { useState } from "react";

// Held-out test R² from the team's report.
const RESULTS = {
  all: { label: "All 56,857 areas", elastic: 0.405, xgb: 0.581 },
  cluster: { label: "High-burden cluster (973 areas)", elastic: -0.936, xgb: 0.927 },
} as const;

type Scope = keyof typeof RESULTS;

// The axis runs from -1 to 1 so a negative score is visible as a bar going backwards.
const toPct = (v: number) => ((v + 1) / 2) * 100;

function Bar({ name, value }: { name: string; value: number }) {
  const zero = toPct(0);
  const end = toPct(value);
  const left = Math.min(zero, end);
  const width = Math.abs(end - zero);
  return (
    <div className="mc-row">
      <span className="mc-name">{name}</span>
      <div className="mc-track">
        <span className="mc-zero" style={{ left: `${zero}%` }} />
        <span
          className={`mc-bar ${value < 0 ? "is-negative" : ""}`}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
      <span className="mc-value">{value.toFixed(2).replace("-", "−")}</span>
    </div>
  );
}

export default function ModelCompare() {
  const [scope, setScope] = useState<Scope>("all");
  const r = RESULTS[scope];
  return (
    <div className="mc">
      <div className="mc-switch" role="radiogroup" aria-label="Which areas to score">
        {(Object.keys(RESULTS) as Scope[]).map((k) => (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={scope === k}
            className={scope === k ? "is-on" : ""}
            onClick={() => setScope(k)}
          >
            {RESULTS[k].label}
          </button>
        ))}
      </div>
      <div className="mc-bars" aria-live="polite">
        <Bar name="Elastic Net" value={r.elastic} />
        <Bar name="XGBoost" value={r.xgb} />
      </div>
      <p className="mc-axis" aria-hidden="true">
        <span>−1</span>
        <span>0 = as good as guessing the average</span>
        <span>1</span>
      </p>
      <p className="note">
        {scope === "all"
          ? "Test-set R². XGBoost explained more variation and cut mean absolute error by more than half (0.016 to 0.0075)."
          : "On the small, high-burden cluster the linear model did worse than guessing the average. XGBoost held up, which is the clearest sign the problem is non-linear."}
      </p>
    </div>
  );
}
