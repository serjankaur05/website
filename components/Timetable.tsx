"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  COURSES,
  DAYS,
  PERIODS,
  SLOTS,
  evaluate,
  messyStart,
  solve,
  step,
} from "@/lib/timetable";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const STEP_MS = 520;
const PAUSE_AFTER_EDIT_MS = 900;

export default function Timetable() {
  const reduced = usePrefersReducedMotion();
  const [assign, setAssign] = useState<number[]>(messyStart);
  const [moves, setMoves] = useState(0);
  const [tick, setTick] = useState(0);
  const [lastMoved, setLastMoved] = useState<number | null>(null);
  const pausedUntil = useRef(0);
  const stepsSinceEdit = useRef(0);

  const { violations, bad } = evaluate(assign);
  const solved = violations === 0;

  // Repair loop: one move per tick until there are no clashes.
  useEffect(() => {
    if (solved) return;
    if (reduced) {
      const fixed = solve(assign);
      // Defer so we never set state synchronously inside the effect body.
      const id = window.setTimeout(() => {
        setAssign(fixed);
        setLastMoved(null);
      }, 0);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => {
      // Hold still briefly after a visitor moves an exam, so they can see the clash.
      if (Date.now() < pausedUntil.current) {
        setTick((t) => t + 1);
        return;
      }
      // Safety net: if the random walk wanders for too long, finish the job outright.
      const next = stepsSinceEdit.current > 40 ? solve(assign) : step(assign);
      stepsSinceEdit.current++;
      const changed = next.findIndex((s, i) => s !== assign[i]);
      setLastMoved(changed >= 0 ? changed : null);
      setAssign(next);
      setMoves((m) => m + 1);
    }, STEP_MS);
    return () => window.clearTimeout(id);
  }, [assign, solved, reduced, tick]);

  const place = useCallback((course: number, slot: number) => {
    pausedUntil.current = Date.now() + PAUSE_AFTER_EDIT_MS;
    stepsSinceEdit.current = 0;
    setMoves(0);
    setAssign((prev) => {
      const next = prev.slice();
      next[course] = slot;
      return next;
    });
    setLastMoved(course);
  }, []);

  const scramble = () => {
    pausedUntil.current = Date.now() + PAUSE_AFTER_EDIT_MS;
    stepsSinceEdit.current = 0;
    setAssign(messyStart());
    setMoves(0);
    setLastMoved(null);
  };

  return (
    <figure className="tt" aria-labelledby="tt-caption">
      <div className="tt-head">
        <p className={`tt-status ${solved ? "is-solved" : ""}`}>
          {solved ? (
            <>No clashes left{moves > 0 ? `, fixed in ${moves} moves` : ""}</>
          ) : (
            <>
              {violations} {violations === 1 ? "clash" : "clashes"} to repair
            </>
          )}
        </p>
        <button type="button" className="tt-reset" onClick={scramble}>
          Make a mess
        </button>
      </div>

      <div className="tt-grid" role="grid" aria-label="Exam timetable">
        <div className="tt-row tt-row--days" role="row">
          <span className="tt-corner" role="columnheader" aria-hidden="true" />
          {DAYS.map((d) => (
            <span key={d} className="tt-day" role="columnheader">
              {d}
            </span>
          ))}
        </div>
        <div className="tt-row tt-row--periods" aria-hidden="true">
          <span className="tt-corner" />
          {Array.from({ length: SLOTS }, (_, s) => (
            <span key={s} className="tt-period">
              {PERIODS[s % PERIODS.length]}
            </span>
          ))}
        </div>

        {COURSES.map((name, c) => (
          <div className="tt-row" role="row" key={name}>
            <span className="tt-course" role="rowheader">
              {name}
            </span>
            {Array.from({ length: SLOTS }, (_, s) => {
              const here = assign[c] === s;
              const clash = here && bad.has(c);
              const day = DAYS[Math.floor(s / PERIODS.length)];
              const period = PERIODS[s % PERIODS.length];
              return (
                <button
                  key={s}
                  type="button"
                  role="gridcell"
                  className={[
                    "tt-cell",
                    here ? "is-here" : "",
                    clash ? "is-clash" : "",
                    here && lastMoved === c ? "is-moved" : "",
                    Math.floor(s / PERIODS.length) % 2 === 1 ? "is-alt" : "",
                  ].join(" ")}
                  aria-label={
                    here
                      ? `${name}: ${day} ${period}${clash ? ", clashing" : ""}`
                      : `Move ${name} to ${day} ${period}`
                  }
                  aria-pressed={here}
                  onClick={() => place(c, s)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <figcaption id="tt-caption" className="tt-caption">
        A toy exam timetable: ten courses, twelve students, three days. Click any square to move
        an exam and cause a clash. The solver keeps moving exams until no student has two at once
        or more than two in a day.
      </figcaption>
      <p className="sr-only" aria-live="polite">
        {solved ? "Timetable has no clashes." : ""}
      </p>
    </figure>
  );
}
