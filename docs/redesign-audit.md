# Redesign audit

Final redesign of fetehadin.pro.et. The aim is one site that works for two readers: a recruiter who gives it six seconds, and an engineer who gives it five minutes.

Method: each reference was loaded in headless Chromium at 1440×900 and 390×844, captured as hero and full-page screenshots, and measured with `getComputedStyle`. Page text, metadata and JSON-LD were read from the DOM.

---

## 1. Teardowns

### mikaelen.site: content strategy

- **Type:** DM Sans body text (16–17px, line-height ~1.65). Instrument Serif for the name and project titles. Geist Mono 11px uppercase labels with 0.14em tracking. The content column is about 608px.
- **Colour:** near-black background with an animated blue dither sky in the hero. One blue accent, used only on the status dot and section numbers.
- **Order:** name with pronunciation → role, location, coordinates and live clock → three-sentence intro → Email / CV / Case studies → 01 Work → 02 Projects → 03 Awards → 04 Stack → 05 Also → 06 Contact → 07 Blog.
- **What works:**
  - The intro has a thesis ("a model proposes, fixed rules decide, and a person approves").
  - Each work row carries a one-line summary, a duration ("1 yr 9 mo") and a shared timeline axis.
  - Project cards lead with an outcome and link to a case study. Awards serve as third-party proof.
  - `llms.txt` and Person JSON-LD.
  - Calm, low-hype copy.
- **What's broken:**
  - The awards marquee renders every award twice in the DOM, so screen readers and copy-paste see duplicates.
  - "07 Blog" is a "Coming soon" placeholder.
  - Content below the work timeline only appears on scroll. In a full-page capture, everything after section 01 is blank, which hurts print, link previews and slow devices.
  - "60+ products" can't be verified anywhere.

### miheretab.space: hiring and client layer

- **Type:** Outfit for headings (72px h1, 54px h2, tight −0.028em tracking). Plus Jakarta Sans for body text at 16px/28px.
- **Colour:** warm off-white (`#F4F3F0`) with a grid texture, near-black ink and an orange accent.
- **Order:** nav with a "Contact me" button → hero with name, one-line pitch and "See All Projects / Contact Now" → floating testimonial cards → project screenshots → "Available for work" profile card with "Download CV" → about facts (based in, working since, languages, engagements) → four-step process → "why me" (good vs bad columns) → testimonial → FAQ → pricing.
- **What works:**
  - Obvious CTAs, repeated at each decision point.
  - An availability badge next to the photo.
  - The process steps answer "what is it like to work with you?"
  - The "about facts" block (based in, languages, engagement type) answers HR questions fast.
- **What's broken:**
  - The hero truncates the name ("Miheretab Sam").
  - Typos and inconsistent casing: "get's", "maintainance", "web,mobile ,", "Miheretab sam".
  - The process section is rendered twice.
  - Eight of nine FAQ questions have no answer.
  - The "200%" testimonial can't be verified.
  - Low starting prices undersell the work.
  - Like mikaelen, most content is invisible until scrolled, so full-page captures are mostly blank.

### seefun.dev and /colophon: craft

- **Type:** Geist Mono body text at 11–12px, Geist for the name and headings (16px, 500–600). Everything sits on one ~880px "sheet" over a desk background.
- **Colour:** warm paper `rgb(228,226,216)`, ink `rgb(27,29,23)`, muted `rgb(107,111,102)`, hairline rules, and a single lime/green accent.
- **Order:** name with a numbered nav (1 about … 6 contact) → About → Experience (one full entry, then "Other") → Projects (name, tagline, stack line, "Open as a page") → Education → Skills → Tools → Interests → Contacts.
- **What works:**
  - Typographic restraint and hairline rules.
  - Numbered nav doubling as keyboard shortcuts.
  - Print-to-PDF, Markdown and JSON Resume versions of the CV, plus `llms.txt`.
  - The colophon explains how the site is made, which is a quiet signal of craft.
- **Weak for our goal:** everything is 11–12px mono, which reads as "for engineers". A recruiter sees a terminal, not a person: there's no photo, no availability signal and no CTA above the fold.

### fetehadin.pro.et (the live site) and the repo

- **What's right:**
  - The real story: civil engineering → software.
  - The green-blazer photo.
  - The project set: Smart Duplicate Detector, TajStore and EduConnect are all real and varied.
  - Experience entries have honest descriptions.
- **What's weak:**
  - The hero "Building Tomorrow's Digital Solutions Today." in Carter One says nothing about me.
  - The stats are inflated: "∞ lines of code", "10+ projects delivered", and "5+ internships & programs" when only four entries are listed.
  - The logo marquee duplicates every skill four times in the DOM.
  - "Get in touch" has no visible email.
  - The meta description is generic ("Software Engineer Portfolio").
  - "Awards & Certificates" lists no awards.
  - There's no JSON-LD, sitemap or robots file.
  - Body text is teal on white.
- **The previous redesign** (branch `redesign/paper-sheet`) fixed most of the craft issues. But it adopted seefun's mono-sheet density, so it inherited the "engineers only" problem this round is meant to solve.

---

## 2. Steal list

| # | Pattern | From | Why it helps |
|---|---|---|---|
| 1 | Plain-English positioning line with a thesis (civil → software, "designed for load") | mikaelen | **HR:** who is this and what does he do, in one sentence. |
| 2 | "Available for remote & freelance work" status pill with a live dot | miheretab | **HR:** availability is answered before they look for it. |
| 3 | Location, time zone and live local clock in the hero | mikaelen | **HR and remote managers:** the time-zone worry is answered up front. |
| 4 | Primary and secondary CTAs above the fold: Get in touch / Download CV / See my work | miheretab | **HR:** a contact path and the CV without scrolling. |
| 5 | Proof chips, using only facts | mikaelen (awards) | **HR:** instant credibility markers a non-engineer understands. |
| 6 | Numbered sections (01 Selected work …) with numbered nav and keyboard keys | mikaelen, seefun | **Both:** a scannable outline; engineers notice the shortcuts. |
| 7 | Work timeline: summary line, duration badge, then outcome bullets | mikaelen | **HR:** scan the roles. **Engineers:** expand for detail. |
| 8 | Project cards that lead with the outcome and link to a full case study | mikaelen | **Layered depth:** plain on top, trade-offs one click away. |
| 9 | Four-step "How I work" process plus communication habits | miheretab | **Hiring managers:** collaboration across time zones. |
| 10 | Answered FAQ (four questions maximum) | miheretab (done properly) | **HR:** full-time? time zones? stack? answered without an email. |
| 11 | Hairline rules, warm paper, one accent, Geist and Geist Mono for labels only | seefun | **Both:** looks considered and professional, not templated. |
| 12 | Print stylesheet producing a 1–2 page A4 CV, plus `/cv.md` | seefun | **HR:** a clean CV from the page itself. |
| 13 | `/llms.txt` and Person JSON-LD with `sameAs` | mikaelen | **Both:** AI assistants and search engines get the facts right. |
| 14 | Colophon page | seefun | **Engineers:** a quiet signal of craft, and the right place for credits. |
| 15 | Case-study template: TL;DR → constraints → architecture → trade-offs → result → next | mikaelen (extended) | **Engineers:** decisions, not a feature list. |

## 3. Reject list

- **Scroll-gated content** (mikaelen, miheretab). Everything stays visible without JavaScript; the fade-in is cosmetic only and off under reduced motion.
- **Duplicated DOM for marquees**, and the logo marquee itself.
- **Animated hero backgrounds**, sound toggles, floating cards and custom cursors. They cost performance and add nothing for either reader.
- **Unverifiable stats and testimonials** ("60+ products", "200% conversions", "∞ lines of code"). The testimonials slot only renders when it holds real quotes.
- **Pricing**, and the "good vs bad" comparison columns.
- **Unanswered FAQs**, "Coming soon" sections and empty "Awards" headings.
- **All-mono body text** at 11–12px (seefun). Mono is kept for labels, dates and code.
- **Truncated names**, mixed spelling and inconsistent casing. The copy uses American spelling throughout.

---

## 4. Positioning line: three options

1. **Chosen:** "I build backend-heavy web and mobile products, and the automation around them. I trained as a civil engineer, so I design software like infrastructure: planned for load, built to last."
   - It says what I build, then why I'm different, in two plain sentences, with no jargon a recruiter would trip on.
2. "Full-stack engineer with a civil engineer's habits: I plan for load, failure and upkeep before I write the first line of code."
   - Strong voice, but "full-stack engineer with habits" is vaguer about *what* I build.
3. "Most software fails the way buildings do: under load nobody planned for. I trained as a civil engineer, and I build APIs, apps and automation that don't."
   - The most memorable, but the opening claim is a little combative for an HR reader.

---

## 5. Reviews

Both reviews were done against a production build (`next start`), using screenshots at 390, 768, 1280 and 1440px in both themes. Scores are 1–5.

### A. HR / technical-recruiter review

| Question | First pass | After fixes |
|---|---|---|
| Name, role, location/time zone and availability within 6 seconds? | _see below_ | |
| CV download and contact path above the fold? | | |
| Claims concrete and believable; no top-layer jargon? | | |
| No typos, broken links, empty sections or placeholders? | | |
| Trustworthy and professional enough for a US/EU company? | | |

### B. Senior engineer / hiring-manager review

| Question | First pass | After fixes |
|---|---|---|
| Case studies show real decisions and trade-offs? | | |
| Source code and live demos reachable in one click? | | |
| The site itself is well built (Lighthouse, semantics, console, structure, commits)? | | |
| Strongest signal / weakest signal | | |
