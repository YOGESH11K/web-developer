# Yogesh — Independent Web Developer

A premium, minimal portfolio for an independent web developer. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Configuration

### Site URL

Set `NEXT_PUBLIC_SITE_URL` to the production domain. It is used for canonical URLs, the sitemap, robots, and social sharing metadata. The default is the current production URL, `https://devloper-six.vercel.app`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Copy `.env.example` to `.env.local` for local development if needed. Without it, the site uses the current production URL as its fallback.

### Contact details

Contact information lives in `src/data/site.ts`:

- Email and phone are reused from the verified RoboSiddhi site configuration (`https://robosiddhi.com`).
- WhatsApp links are generated from `site.whatsapp` in international format (no `+` or spaces).
- GitHub is the verified profile `https://github.com/YOGESH11K`.
- Update these values if your preferred public contact details differ.

### Projects

Project content lives in `src/data/projects.ts`. Only projects verified from the GitHub account, their live sites, or public repositories are listed:

- **GoA Waters** — live at `goawaters.com`, source at `YOGESH11K/willness-goawaters`.
- **RoboSiddhi** — live at `robosiddhi.com`, source at `YOGESH11K/robosiddhi-website`.
- **Ashima Healer** — live at `ashimahealer.com`, source at `YOGESH11K/ashima-healer`.
- **Kumaun** — source at `YOGESH11K/kumaun`; the live deployment is currently offline, and the preview is from a local build of the repository.

Preview images are real screenshots stored in `public/projects/`.

### Pricing

Pricing plans live in `src/data/pricing.ts`. The displayed prices are starting offers, not fixed quotes. Update the note and plan details there if your scope changes.

### SEO and social sharing

- Page metadata is in `src/app/layout.tsx`.
- The favicon is `src/app/icon.svg`.
- The social sharing image is `public/og.png` (1200×630).
- `src/app/sitemap.ts` and `src/app/robots.ts` generate the sitemap and robots file.

## Structure

```text
src/
  app/            Layout, page, metadata, sitemap, robots, favicon
  components/     Hero, work, services, pricing, process, contact, footer, nav
  components/ui/  Reusable buttons, browser frame, reveal animation, icons
  data/           Site config, projects, services, pricing
  lib/            Class-name utility
public/
  projects/       Real project screenshots (WebP)
  og.png          Social sharing image
```

## Notes

- No client testimonials, awards, or invented achievements are included.
- No credentials, API keys, or environment secrets are stored in the repository.
- Motion respects `prefers-reduced-motion`.
- The site is fully responsive and uses semantic landmarks, a skip link, and keyboard-accessible navigation.
