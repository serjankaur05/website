# Serjan Kaur — Software Engineering Portfolio

Built with **Next.js 16**, **TypeScript**, **React 19**, and **Tailwind CSS v4**.

## Run locally
```bash
npm install
npm run dev
```

## Structure
```
app/
  page.tsx          # Root page
  layout.tsx        # Font imports, metadata
  globals.css       # Design system CSS variables
components/
  Nav.tsx           # Fixed navigation with scroll-aware styling
  Hero.tsx          # Full-screen hero with animated canvas background
  Projects.tsx      # Expandable project cards with technical detail
  Skills.tsx        # Skills grid + education
  Contact.tsx       # Contact + footer
```

## Sections
1. **Hero** — headline, description, technical tag cloud, CTA
2. **Projects** — expandable cards with impact bullets and stack tags
3. **Skills** — grouped by domain, education, "what I'm looking for"
4. **Contact** — internship availability, email, links

## Customization
- Update `mailto:` links in `Hero.tsx` and `Contact.tsx`
- Replace GitHub/LinkedIn URLs in `Contact.tsx`
- Add your resume PDF to `/public/resume.pdf`
- Update "OPEN TO INTERNSHIPS" date in `Hero.tsx`
