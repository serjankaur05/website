// A tiny exam-timetabling instance and a min-conflicts repair solver.
// The real project uses OR-Tools CP-SAT on ~1,000 students and ~100 courses;
// this is a hand-made toy so the idea runs in the browser in real time.

export const COURSES = [
  "Algorithms",
  "Databases",
  "Statistics",
  "Calculus",
  "Ethics",
  "Economics",
  "Biology",
  "Film",
  "Chemistry",
  "Networks",
];

export const DAYS = ["Mon", "Tue", "Wed"];
export const PERIODS = ["9am", "1pm", "6pm"];
export const SLOTS = DAYS.length * PERIODS.length;
export const DAILY_CAP = 2;

// Which courses each student is enrolled in (indexes into COURSES).
export const STUDENTS: number[][] = [
  [0, 1, 2, 9],
  [0, 3, 4],
  [1, 5, 6],
  [2, 3, 8],
  [4, 5, 7],
  [6, 8, 9],
  [0, 2, 5, 7],
  [1, 3, 9],
  [3, 6, 7],
  [2, 4, 8, 9],
  [0, 6, 8],
  [1, 4, 7],
];

export const dayOf = (slot: number) => Math.floor(slot / PERIODS.length);

export type Clash = { course: number; kind: "same-time" | "over-cap" };

/** Count constraint violations and mark which courses are involved. */
export function evaluate(assign: number[]) {
  const bad = new Set<number>();
  let violations = 0;
  for (const enrolled of STUDENTS) {
    // Two exams at the same time.
    for (let i = 0; i < enrolled.length; i++) {
      for (let j = i + 1; j < enrolled.length; j++) {
        if (assign[enrolled[i]] === assign[enrolled[j]]) {
          violations++;
          bad.add(enrolled[i]);
          bad.add(enrolled[j]);
        }
      }
    }
    // More than DAILY_CAP exams in one day.
    const perDay = new Map<number, number[]>();
    for (const c of enrolled) {
      const d = dayOf(assign[c]);
      perDay.set(d, [...(perDay.get(d) ?? []), c]);
    }
    for (const cs of perDay.values()) {
      if (cs.length > DAILY_CAP) {
        violations += cs.length - DAILY_CAP;
        cs.forEach((c) => bad.add(c));
      }
    }
  }
  return { violations, bad };
}

/** Violations a single course would cause if placed in `slot`. */
function costFor(assign: number[], course: number, slot: number) {
  const trial = assign.slice();
  trial[course] = slot;
  return evaluate(trial).violations;
}

/** One repair move: take a conflicted course and move it to its least-bad slot. */
export function step(assign: number[], rand: () => number = Math.random): number[] {
  const { bad } = evaluate(assign);
  if (bad.size === 0) return assign;
  const pool = [...bad];
  const course = pool[Math.floor(rand() * pool.length)];
  // A little noise stops the search getting stuck in a local minimum.
  if (rand() < 0.08) {
    const next = assign.slice();
    next[course] = Math.floor(rand() * SLOTS);
    return next;
  }
  let best: number[] = [];
  let bestCost = Infinity;
  for (let s = 0; s < SLOTS; s++) {
    const c = costFor(assign, course, s);
    if (c < bestCost) {
      bestCost = c;
      best = [s];
    } else if (c === bestCost) best.push(s);
  }
  const next = assign.slice();
  next[course] = best[Math.floor(rand() * best.length)];
  return next;
}

export function solve(assign: number[], maxSteps = 2000): number[] {
  let a = assign;
  for (let i = 0; i < maxSteps && evaluate(a).violations > 0; i++) a = step(a);
  return a;
}

/** A deliberately messy starting timetable: everything crammed into Monday. */
export function messyStart(): number[] {
  return COURSES.map((_, i) => i % 3);
}
