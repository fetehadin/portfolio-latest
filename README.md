# fetehadin.com

The portfolio of Fetehadin Negash, full-stack engineer. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, `next-themes` and Geist, with Resend for the contact form.

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Before you push:

```bash
npm run lint
npm run build && npm run start   # production build at http://localhost:3000
```

### Environment variables

Only the contact form needs them. Put them in `.env.local` locally (or `.dev.vars` for `npm run preview`), and as Worker secrets for deploys (see Deploy):

| Variable | What it is |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | The inbox that receives contact-form messages |

Without them the site still builds and runs normally; the form just returns "not configured" instead of sending.

## Edit the content

All copy lives in **`content/site.ts`**. Components only render it, so you should rarely need to touch anything else.

| To change… | Edit in `content/site.ts` |
|---|---|
| Name, positioning line, availability, email, CV link | `profile` |
| Hero proof chips | `proof` |
| Jobs and programs | `experience` (most recent first; `to: null` means current) |
| Project cards *and* case-study pages | `projects` |
| Small GitHub projects | `moreProjects` |
| "How I work" steps and remote habits | `process`, `communication` |
| Skills | `skills`, `practice` |
| Education and certificates | `education`, `certificates` (images in `public/certificates/`) |
| Testimonials | `testimonials` (the section stays hidden while it's empty) |
| FAQ | `faqs` (questions with `a: null` are hidden) |

The same data also generates the printed CV, `/cv.md`, `/llms.txt`, the Open Graph image and the JSON-LD.

Search for `TODO(fetehadin)` to find the facts still to fill in.

Rules for the copy: every number must be true, spelling is American, and anything unknown gets a TODO rather than a guess.

## What's where

```
app/
  page.tsx               home page (server component)
  work/[slug]/page.tsx   case studies, one template for all three
  cv.md/, llms.txt/      plain-text versions generated from content/site.ts
  opengraph-image.tsx    1200×630 social card
  sitemap.ts, robots.ts
  api/contact/route.ts   Resend contact endpoint (validation + honeypot)
components/              small server components, plus client islands for the
                         theme toggle, clock, copy button, certificate dialog,
                         contact form and keyboard shortcuts
content/site.ts          all content, typed
lib/                     contact validation shared by form and API, CV text
docs/redesign-audit.md   reference teardown, design decisions and reviews
```

Keyboard shortcuts: `1`–`6` jump to sections, `t` toggles the theme, `c` copies the email, `p` prints the CV, and `?` shows help. Printing the home page (`p` or Ctrl+P) produces a 2-page A4 CV.

## Deploy

The site runs on Cloudflare Workers, built with [OpenNext](https://opennext.js.org/cloudflare) by Workers Builds on every push to `main` (Worker `portfolio-latest`, config in `wrangler.jsonc`). It serves https://fetehadin.com; www.fetehadin.com redirects there.

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- `RESEND_API_KEY` and `CONTACT_EMAIL` are set in the Cloudflare dashboard under the Worker's Settings → Variables and Secrets (or with `npx wrangler secret put`).
- `npm run preview` builds the Worker and runs it locally in workerd. `npm run deploy` builds and deploys by hand.

The old domain, fetehadin.pro.et, stays on Vercel only to permanently redirect every path to fetehadin.com.
