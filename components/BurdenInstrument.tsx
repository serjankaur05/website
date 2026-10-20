"use client";

import { useId, useState } from "react";

// Area-level figures published in the team's report. No raw Environics data is used here.
const MEAN = 0.257;
const P95 = 0.338;
const STRESS = 0.3;
const SCALE_MAX = 0.5;

const pct = (v: number) => `${Math.min(100, (v / SCALE_MAX) * 100)}%`;
const money = (v: number) =>
  v.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export default function BurdenInstrument() {
  const shelterId = useId();
  const incomeId = useId();
  const [shelter, setShelter] = useState(1550);
  const [income, setIncome] = useState(6000);

  const ratio = shelter / income;
  const stressed = Number(ratio.toFixed(2)) >= STRESS;

  return (
    <div className="burden">
      <div className="burden-controls">
        <label htmlFor={shelterId}>
          <span>Monthly shelter cost</span>
          <output>{money(shelter)}</output>
        </label>
        <input
          id={shelterId}
          type="range"
          min={400}
          max={5000}
          step={50}
          value={shelter}
          onChange={(e) => setShelter(Number(e.target.value))}
        />
        <label htmlFor={incomeId}>
          <span>Monthly disposable income</span>
          <output>{money(income)}</output>
        </label>
        <input
          id={incomeId}
          type="range"
          min={2000}
          max={15000}
          step={100}
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
      </div>

      <div className="burden-readout" aria-live="polite">
        <p className={`burden-ratio ${stressed ? "is-stressed" : ""}`}>
          {ratio.toFixed(2)}
        </p>
        <p className="burden-verdict">
          {stressed
            ? "At or above 0.30, the usual line for housing stress."
            : "Below 0.30, the usual line for housing stress."}
        </p>
      </div>

      <div className="burden-scale" aria-hidden="true">
        <div className="burden-track">
          <span className="burden-zone" style={{ left: pct(STRESS) }} />
          <span className="burden-tick" style={{ left: pct(MEAN) }}>
            <i>typical area {MEAN}</i>
          </span>
          <span className="burden-tick burden-tick--low" style={{ left: pct(P95) }}>
            <i>top 5% {P95}+</i>
          </span>
          <span className="burden-you" style={{ left: pct(ratio) }} />
        </div>
        <div className="burden-axis">
          <span>0</span>
          <span>0.25</span>
          <span>0.50</span>
        </div>
      </div>
      <p className="note">
        Area averages from the report across 56,857 dissemination areas. The model works at the
        area level; it does not predict any individual household&apos;s finances.
      </p>
    </div>
  );
}
