"use client";

import { useId, useState } from "react";

// Rates and formula copied from ride-price-engine/utils/pricing.py.
// Modelled from public rate information; not live quotes.
const PROVIDERS = [
  { name: "UberX", base: 1.2, mile: 1.1, min: 0.22, floor: 5, fee: 2.75, premium: false },
  { name: "Lyft", base: 1.0, mile: 1.05, min: 0.2, floor: 4.5, fee: 2.5, premium: false },
  { name: "Taxi", base: 3.0, mile: 2.5, min: 0.4, floor: 8, fee: 0.5, premium: false },
  { name: "UberBlack", base: 8.0, mile: 3.75, min: 0.65, floor: 20, fee: 4.5, premium: true },
  { name: "Lyft Lux", base: 7.5, mile: 3.5, min: 0.6, floor: 18, fee: 4.0, premium: true },
];

const TRAFFIC = {
  low: { label: "Light", speed: 35, surge: 1.0, wait: 0.8 },
  moderate: { label: "Moderate", speed: 22, surge: 1.2, wait: 1.0 },
  high: { label: "Heavy", speed: 14, surge: 1.5, wait: 1.1 },
  gridlock: { label: "Gridlock", speed: 8, surge: 2.1, wait: 1.2 },
} as const;
type Traffic = keyof typeof TRAFFIC;

const MIDDAY_WAIT = 4; // minutes, 9am–4pm in the app's model

function estimate(miles: number, traffic: Traffic) {
  const t = TRAFFIC[traffic];
  const ride = (miles / t.speed) * 60;
  return PROVIDERS.map((p) => {
    const subtotal = p.base + miles * p.mile + ride * p.min + p.fee;
    const fare = Math.max(subtotal * t.surge, p.floor);
    const wait = (MIDDAY_WAIT + (p.premium ? 3 : 0)) * t.wait;
    return { name: p.name, fare, minutes: ride + wait };
  });
}

export default function RideInstrument() {
  const distId = useId();
  const weightId = useId();
  const [miles, setMiles] = useState(6);
  const [traffic, setTraffic] = useState<Traffic>("moderate");
  const [priceWeight, setPriceWeight] = useState(60);

  const rows = estimate(miles, traffic);
  const fares = rows.map((r) => r.fare);
  const times = rows.map((r) => r.minutes);
  const norm = (v: number, lo: number, hi: number) => (hi === lo ? 1 : 1 - (v - lo) / (hi - lo));
  const w = priceWeight / 100;
  const scored = rows
    .map((r) => {
      const ps = norm(r.fare, Math.min(...fares), Math.max(...fares));
      const ts = norm(r.minutes, Math.min(...times), Math.max(...times));
      return { ...r, score: w * ps + (1 - w) * ts };
    })
    .sort((a, b) => b.score - a.score);
  const maxFare = Math.max(...fares);

  return (
    <div className="ride">
      <div className="ride-controls">
        <label htmlFor={distId}>
          <span>Trip distance</span>
          <output>{miles} mi</output>
        </label>
        <input
          id={distId}
          type="range"
          min={0.5}
          max={25}
          step={0.5}
          value={miles}
          onChange={(e) => setMiles(Number(e.target.value))}
        />

        <fieldset className="ride-traffic">
          <legend>Traffic</legend>
          {(Object.keys(TRAFFIC) as Traffic[]).map((k) => (
            <label key={k} className={traffic === k ? "is-on" : ""}>
              <input
                type="radio"
                name="traffic"
                value={k}
                checked={traffic === k}
                onChange={() => setTraffic(k)}
              />
              {TRAFFIC[k].label}
            </label>
          ))}
        </fieldset>

        <label htmlFor={weightId}>
          <span>What matters more</span>
          <output>
            {priceWeight}% price, {100 - priceWeight}% time
          </output>
        </label>
        <input
          id={weightId}
          type="range"
          min={0}
          max={100}
          step={5}
          value={priceWeight}
          onChange={(e) => setPriceWeight(Number(e.target.value))}
        />
      </div>

      <ol className="ride-results" aria-live="polite">
        {scored.map((r, i) => (
          <li key={r.name} className={i === 0 ? "is-best" : ""}>
            <span className="ride-name">{r.name}</span>
            <span className="ride-bar" style={{ width: `${(r.fare / maxFare) * 100}%` }} />
            <span className="ride-fare">${r.fare.toFixed(2)}</span>
            <span className="ride-time">{Math.round(r.minutes)} min</span>
          </li>
        ))}
      </ol>
      <p className="note">
        Same pricing formula and rates as the app, which ranks best value at a fixed 60/40 split.
        Fares are modelled from public rate information, not live quotes from any provider.
      </p>
    </div>
  );
}
