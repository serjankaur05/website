# serjankaur.com

Personal site for Serjan Kaur. One page, built with Next.js 16, React 19 and TypeScript.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

```
app/
  layout.tsx            Fonts (Bricolage Grotesque, Newsreader) and page metadata
  page.tsx              Section order
  globals.css           Design tokens and all styles
components/
  Hero.tsx              Navigation, headline, links
  Timetable.tsx         The self-repairing exam timetable in the hero
  Work.tsx              Project case studies
  BurdenInstrument.tsx  Housing burden ratio explorer (report figures only)
  ModelCompare.tsx      Elastic Net vs XGBoost test R²
  RideInstrument.tsx    Fare comparison using the ride-price-engine formula
  Experience.tsx        Timeline of roles
  SystemsMap.tsx        Skills arranged as data → models → services → people-facing
  Writing.tsx           Articles, each with a generated trace
  Contact.tsx           Footer and contact links
lib/
  content.ts            All copy for roles, articles and skills: edit facts here
  timetable.ts          Toy timetable instance and min-conflicts repair solver
  useReducedMotion.ts   Respects the visitor's reduced-motion setting
public/
  resume.pdf            Downloadable résumé
```

## Notes

- The hero timetable is a small toy instance solved in the browser. The real
  scheduler uses OR-Tools CP-SAT; see https://github.com/serjankaur05/exam-scheduler.
- Housing figures are aggregate results from the team report. No raw Environics
  Analytics data is included in this repository.
- Ride fares use the same formula and rates as
  https://github.com/serjankaur05/ride-price-engine. They are modelled estimates,
  not live provider quotes.
