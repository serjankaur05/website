import { LINKS } from "@/lib/content";

export default function Contact() {
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
      <h2 id="contact-title" className="contact-title">
        Got something that should exist but doesn&apos;t yet?
      </h2>
      <p className="contact-lede">
        I&apos;m looking for co-op roles from January 2027 where I can build AI prototypes with the
        people who will use them. Email is the fastest way to reach me.
      </p>
      <p className="contact-email">
        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </p>
      <ul className="contact-links">
        <li>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={LINKS.medium} target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </li>
        <li>
          <a href={LINKS.resume}>Résumé (PDF)</a>
        </li>
      </ul>
      <p className="contact-small">
        Serjan Kaur, Toronto. Built with Next.js. The timetable at the top is solved live in your
        browser.
      </p>
      </div>
    </footer>
  );
}
