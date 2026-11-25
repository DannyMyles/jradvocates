# JR Advocates website

Next.js 15 (App Router) + Tailwind CSS v4 rebuild of jradvocates.com. All existing pages, content and URLs are kept.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in SMTP + Mailchimp (see below)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Where things live

| What | Where |
| --- | --- |
| Firm details (phone, address, hours, social links, values, awards, sectors) | `src/lib/site.ts` |
| Practice areas (15), with full page text | `src/content/practice-areas.ts` |
| Team profiles | `src/content/team.ts` |
| Insights articles | `src/content/insights.ts` |
| Home page copy and testimonials | `src/content/home.ts` |
| Open job roles (Join Us) | `openRoles` in `src/app/join-us/page.tsx` |
| Brand tokens (colours, fonts, radii) and shared classes (`.btn`, `.label`, `.h1`…) | `src/app/globals.css` (`@theme` + `@layer components`) |
| Images | `public/images/{brand,team,practice,insights,photos,icons}` |

Long-form text is stored as simple blocks (`p`, `h2`, `h3`, `ul`, `ol`, `link`) and rendered by
`src/components/blocks.tsx`. No raw HTML is injected. To add an article, add an entry to `insights`
(newest first) and drop its image in `public/images/insights/`.

## URLs

Same paths as the WordPress site: `/about-us`, `/practice-areas`, `/service/<slug>`, `/our-team`,
`/team/<slug>`, `/insights`, `/updates-announcements/<slug>`, `/opinions-and-analysis/<slug>`,
`/join-us`, `/contacts`. Old links with a trailing slash redirect automatically. `sitemap.xml` and
`robots.txt` are generated.

## Forms

- **Contact** (`/api/contact`) sends an email over SMTP (`SMTP_*`, `CONTACT_TO`, `CONTACT_FROM`). Without
  SMTP settings it returns a friendly "please email or call us" message instead of failing silently.
- **Newsletter** (`/api/newsletter`) adds the address to the Mailchimp audience
  (`MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`) as *pending*, so Mailchimp sends its confirmation email.
- Both have a honeypot field and a simple per-IP rate limit (`src/lib/rate-limit.ts`, in-memory per instance).

`?area=<practice-slug>` on `/contacts` pre-selects the "Area of need" field (used by practice-area pages).

## Deployment

Any Node 20+ host works (Vercel, or `npm run build && npm start` behind nginx/pm2). Set
`NEXT_PUBLIC_SITE_URL` to the live domain so metadata and the sitemap use the right URLs.
