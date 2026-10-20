import Timetable from "./Timetable";
import { LINKS } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="nav" aria-label="Main">
        <a href="#top" className="nav-name">
          Serjan Kaur
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#writing">Writing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={LINKS.resume} className="nav-resume">
              Résumé (PDF)
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero-body">
        <div className="hero-copy">
          <h1 className="hero-title">
            I build things to see what happens. Then I make them work.
          </h1>
          <p className="hero-lede">
            I&apos;m a computer science student at Western University, graduating in 2027, and I
            build with AI. Right now that means deploying LLM endpoints at CIBC. Before that it was
            agent workflows for a startup&apos;s founding team, NLP for sustainability data, and
            logistics software for a medical supplier.
          </p>
          <ul className="hero-links">
            <li>
              <a href="#work">See the work</a>
            </li>
            <li>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </li>
          </ul>
        </div>

        <div className="hero-instrument">
          <Timetable />
        </div>
      </div>
    </header>
  );
}
