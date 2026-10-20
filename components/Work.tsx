import BurdenInstrument from "./BurdenInstrument";
import ModelCompare from "./ModelCompare";
import RideInstrument from "./RideInstrument";

function ProjectLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="proj-links">
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="section-intro">
        <h2 id="work-title" className="section-title">
          Work you can poke at
        </h2>
        <p className="section-lede">
          Each project below includes a small working piece of it, built from the project&apos;s
          real logic or published results. Drag things. Nothing breaks.
        </p>
      </div>

      {/* Housing burden */}
      <article className="proj proj--housing" aria-labelledby="p-housing">
        <div className="proj-text">
          <p className="proj-kind">Machine learning research, team of three</p>
          <h3 id="p-housing" className="proj-title">
            Where does rent eat the most income in Canada?
          </h3>
          <p>
            Housing burden is the share of disposable income a household spends on shelter. We
            built it as a target from proprietary Environics Analytics data covering 56,857
            dissemination areas, then asked which places carry the most and why.
          </p>
          <p>
            The decision I&apos;d point to first is the one that made the results worse on paper.
            We removed 56 features that were mathematically tied to shelter spending or income.
            Leaving them in would have let the model look accurate by reading the answer back to
            us. Every cleaning step was fitted on training data only, for the same reason.
          </p>
          <p>
            We compared a regularised linear model with XGBoost, used K-Means to find a small,
            high-burden segment of 973 areas, and used SHAP to see what drove predictions:
            household income, household size, owner-occupied share and dwelling running costs.
            One top feature, a discretionary spending category, reads as a sign of tight budgets,
            not a cause, and the report says so.
          </p>
          <ProjectLinks
            links={[
              { label: "Code on GitHub", href: "https://github.com/serjankaur05/canadian-housing-affordability-ml" },
            ]}
          />
          <p className="proj-stack">Python, Pandas, Scikit-Learn, XGBoost, K-Means, SHAP</p>
        </div>
        <div className="proj-instruments">
          <BurdenInstrument />
          <ModelCompare />
        </div>
      </article>

      {/* Exam scheduler */}
      <article className="proj proj--exams" aria-labelledby="p-exams">
        <div className="proj-text">
          <p className="proj-kind">Optimization, solo build</p>
          <h3 id="p-exams" className="proj-title">
            A clash-free exam timetable for about 1,000 students
          </h3>
          <p>
            The grid at the top of this page is a toy version. The real one schedules roughly 100
            courses for about 1,000 students using Google OR-Tools&apos; CP-SAT constraint solver,
            then hands the result to a Streamlit app where anyone can look up the full timetable,
            check one student&apos;s schedule, and review exam-load fairness.
          </p>
          <p>
            The hard part wasn&apos;t the solver code. It was turning &ldquo;fair&rdquo; into
            something a solver can enforce. A timetable can be perfectly valid and still give
            someone three exams in a day.
          </p>
          <ProjectLinks
            links={[
              { label: "Try the live app", href: "https://examscheduler.streamlit.app/" },
              { label: "Code on GitHub", href: "https://github.com/serjankaur05/exam-scheduler" },
            ]}
          />
          <p className="proj-stack">Python, OR-Tools CP-SAT, Streamlit, Pandas</p>
        </div>
        <dl className="model-sheet">
          <div>
            <dt>Decide</dt>
            <dd>Which time slot each course&apos;s exam goes in.</dd>
          </div>
          <div>
            <dt>Never allow</dt>
            <dd>A course without exactly one slot.</dd>
            <dd>A student with two exams at the same time.</dd>
            <dd>A student with more than two exams in one day.</dd>
          </div>
          <div>
            <dt>Then prefer</dt>
            <dd>The fewest slots, so the exam period is as short as possible.</dd>
          </div>
          <p className="note">
            On this data CP-SAT returned solutions it proved optimal. That&apos;s a result for
            this instance, not a guarantee for every scheduling problem, which can get very hard.
          </p>
        </dl>
      </article>

      {/* Ride engine */}
      <article className="proj proj--rides" aria-labelledby="p-rides">
        <div className="proj-text">
          <p className="proj-kind">Product prototype, solo build</p>
          <h3 id="p-rides" className="proj-title">Cheapest, fastest, or best value?</h3>
          <p>
            Ride-hailing APIs need production approval, so instead of pretending to call them, this
            app models each provider&apos;s fare from published rate structures: base fare,
            distance, time, service fee and a surge multiplier tied to traffic. A scoring layer then
            labels the cheapest, the fastest, and the best balance of the two.
          </p>
          <p>This comparison runs the app&apos;s own formula. Change the weighting and watch the winner flip.</p>
          <ProjectLinks
            links={[
              { label: "Try the live app", href: "https://ride-price-engine.streamlit.app/" },
              { label: "Code on GitHub", href: "https://github.com/serjankaur05/ride-price-engine" },
            ]}
          />
          <p className="proj-stack">Python, Streamlit, Plotly, Pandas</p>
        </div>
        <div className="proj-instruments">
          <RideInstrument />
        </div>
      </article>

      {/* Shopify */}
      <article className="proj proj--shop" aria-labelledby="p-shop">
        <div className="proj-text">
          <p className="proj-kind">Data product, solo build</p>
          <h3 id="p-shop" className="proj-title">From half a million rows to a dashboard a shop owner can read</h3>
          <p>
            A merchant analytics app built on the public Online Retail II dataset, a UK gift
            retailer&apos;s transactions from 2009 to 2011. It covers revenue trends, product
            performance and customer segments based on how recently, how often and how much people
            buy.
          </p>
          <ProjectLinks
            links={[
              { label: "Try the live app", href: "https://shopify-analytics-engine.streamlit.app/" },
              { label: "Code on GitHub", href: "https://github.com/serjankaur05/shopify-analytics-engine" },
            ]}
          />
          <p className="proj-stack">Python, Pandas, Plotly, Streamlit</p>
        </div>
        <ol className="pipeline" aria-label="How the data flows">
          <li>
            <strong>500,000+ line items</strong>
            <span>Raw transactions, cancellations included</span>
          </li>
          <li>
            <strong>Clean</strong>
            <span>Drop cancellations, bad prices and rows with no customer</span>
          </li>
          <li>
            <strong>Orders</strong>
            <span>Collapse line items into one row per invoice</span>
          </li>
          <li>
            <strong>Customers</strong>
            <span>Recency, frequency and spend for each buyer</span>
          </li>
          <li>
            <strong>Decisions</strong>
            <span>Revenue trends, best products, segments to win back</span>
          </li>
        </ol>
      </article>

      {/* Proposals */}
      <div className="proposals" aria-labelledby="p-proposals">
        <h3 id="p-proposals" className="proposals-title">
          Ideas that stayed on paper, on purpose
        </h3>
        <p className="proposals-lede">
          Innovation challenges where the job was to propose, prototype and argue, not ship.
        </p>
        <div className="proposals-list">
          <article>
            <h4>Furniture that assembles itself</h4>
            <p className="proj-kind">The Knowledge Society, team challenge for IKEA</p>
            <p>
              Flat-packed furniture is hard to assemble for disabled and older customers. Our team
              proposed parts made of water-reactive programmable materials, with AR instructions
              opened from a QR code on the box, and built a 3D-printed proof of concept. It was a concept for a challenge, not something IKEA built.
            </p>
          </article>
          <article>
            <h4>Digital twins for disaster resilience</h4>
            <p className="proj-kind">Team of four, proposal for CAE</p>
            <p>
              CAE already builds digital twins and synthetic environments for defence training. We
              proposed extending them to natural hazards: simulate earthquakes or floods against
              digital models of real buildings, and use image-based machine learning to estimate
              structural weakness. A proposed architecture and business case, not a working
              prediction system.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
