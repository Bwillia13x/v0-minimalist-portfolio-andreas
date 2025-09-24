Andreas & Co. Website Audit → Refresh Plan
Date: 2025-09-24
Auditor: Senior conversion-oriented UX/SEO review (site-specific, evidence-based)

Targets
- Live site: https://www.andreasformen.ca/
- Dev build: https://brass-routine.lovable.app/

Scope covered for BOTH URLs
1) Messaging & IA · 2) Booking friction · 3) Local SEO (GBP) · 4) On-page SEO
5) Speed & Core Web Vitals · 6) Accessibility (WCAG 2.2 AA) · 7) Trust & conversion
8) Analytics readiness

================================================================================
EXECUTIVE ONE-PAGER (Top 8 issues, impact, source, fix)
================================================================================

P0 — Missing/insufficient LocalBusiness structured data (JSON‑LD)
- Business impact (metric): Lower rich-result eligibility → fewer Search/Maps profile clicks → fewer bookings.
- Why it matters: Structured data enables richer appearances and clearer understanding in Search. [Google Search Central: Local Business + Search Gallery] citeturn0search2turn0search7
- Fix this week (quick win): Add complete JSON‑LD (name, NAP, hours, geo, priceRange, sameAs, service list). Validate in Rich Results Test. Deploy on all key pages.

P0 — Booking friction (no native “Book” from GBP; site CTA not sticky on live)
- Business impact (metric): Drop‑off from discovery → appointment; missed “Book” clicks on Maps/Search.
- Why it matters: Google supports “Bookings” via partner or custom booking link on GBP; Reserve with Google is region/provider dependent. [GBP Help: bookings + add links; Reserve with Google overview] citeturn1search0turn1search2turn1search7
- Fix this week: Add a first‑party booking URL to GBP (“Booking” link). In parallel, check provider eligibility for RwG in Canada and enroll if supported. [Actions Center supported‑countries (check)] citeturn1search1turn1search5

P0 — Inconsistent NAP & thin GBP alignment (services/hours not mirrored 1:1)
- Business impact (metric): Fewer local pack impressions & actions; trust loss if hours differ.
- Why it matters: Local ranking = relevance + distance + prominence; consistency improves relevance & user trust. [Google local ranking factors] citeturn0search0
- Fix this week: Standardize exact name, address, phone, hours across site footer, contact page, schema, and GBP. Mirror service names/descriptions.

P1 — Missing service pages with scannable pricing & FAQs (live); dev improves but incomplete
- Business impact (metric): Lower conversion & SEO coverage for key intents (e.g., “hot towel shave Calgary price”).
- Why it matters: People-first content + clear information architecture aids discovery & conversions. [Google Helpful Content] citeturn0search16
- Fix this week: Ship lightweight pages for Cut · Shave · Facial/SkinBar · Massage with above-the-fold CTA, price bands, and structured FAQs.

P1 — Core Web Vitals risks (hero image weight/fonts/scripts)
- Business impact (metric): Worse LCP/INP/CLS → lower Search performance & user satisfaction.
- Why it matters: Google recommends achieving “good” Core Web Vitals for success in Search. [Core Web Vitals & Page Experience] citeturn0search1turn0search6
- Fix this week: Compress hero ≤ 200–300 KB (AVIF/WebP), set width/height, preconnect/preload fonts, defer non-critical JS, lazy-load below-the-fold images.

P1 — Accessibility gaps (contrast, focus states, labels/alt, heading order)
- Business impact (metric): Broader reach + reduced drop-offs; legal risk reduction.
- Why it matters: WCAG 2.2 AA and WAI show accessibility improves reach and reduces risk; focus visibility required. [W3C Business Case; WCAG 2.2 Quick Ref; Focus Visible/Appearance] citeturn2search0turn2search1turn2search5turn2search7
- Fix this week: Ensure visible focus indicators, sufficient text contrast, labelled form fields, meaningful alt, logical H1–H3 order.

P1 — Thin review/social proof on site (not surfaced prominently)
- Business impact (metric): Lower consideration; fewer clicks to call/book.
- Why it matters: Reviews influence selection and drive consideration; recency/volume matter. [BrightLocal Local Consumer Review Survey 2025] citeturn0search4
- Fix this week: Add review carousel/snippets on home + service pages; link to GBP; add “Our Rituals / Barber credentials” section.

P1 — Analytics gaps (UTM/GA4 on all booking taps; tel: click events)
- Business impact (metric): No baseline for “Book” conversion; hard to optimize.
- Why it matters: Without event instrumentation you can’t attribute GBP/site to bookings; structured data + page experience optimizations need measurement. [Structured data & Page Experience docs] citeturn0search7turn0search6

================================================================================
DETAILED AUDIT & REFRESH BACKLOG (concise table — phrases only)
================================================================================

Area: Messaging & IA
- Issue (Live): Hero tagline generic; no price cues; book CTA non-sticky.
- Observed (Dev): Clearer hero, better CTA placement; needs sticky header on all pages.
- Why (source): People-first content; faster comprehension improves conversion. citeturn0search16
- Fix steps:
  1) New H1/subhead (see Copy section). 2) Add sticky “Book Now” in header. 3) Add price anchors per service. 4) Add trust badges (reviews/awards).
- Owner: Content+Design
- Effort: S
- Deps: None
- Acceptance: Above-the-fold CTA + pricing visible; scroll tests pass.
- Expected lift: +CTR to booking, +time on page.

Area: Booking friction
- Issue (Live): No direct booking link; deep click path.
- Observed (Dev): “Book” present but no live scheduler; phone/contact fallback.
- Why: GBP “Bookings” and custom links reduce steps; RwG improves flow where available. citeturn1search0turn1search2turn1search7
- Fix steps:
  1) Add booking URL to GBP (custom link). 2) Evaluate provider (Fresha/Booksy/etc.) for RwG in CA. 3) UTM on all booking buttons. 4) Launch booking page with inline embed when provider chosen.
- Owner: Ops+Dev
- Effort: S→M
- Deps: Provider choice
- Acceptance: “Book” button on GBP + site header/footer; UTM captured in GA4.
- Expected lift: +GBP actions, +booking starts.

Area: Local SEO / GBP
- Issue (Live): No JSON‑LD; NAP not consistently mirrored; services not mapped.
- Observed (Dev): Footer NAP present; still needs schema + internal links.
- Why: Relevance/distance/prominence + structured data → richer results. citeturn0search0turn0search2turn0search7
- Fix steps:
  1) Add LocalBusiness JSON‑LD (see code). 2) Align services list with GBP. 3) Link from home → service pages. 4) Ensure hours/phone identical site/GBP.
- Owner: SEO
- Effort: S
- Deps: Finalized NAP/services
- Acceptance: Rich Results Test passes; GBP fields match site 1:1.
- Expected lift: +local pack impressions/clicks.

Area: On‑page SEO
- Issue (Live): Single long services page; thin headings; missing alt on decorative media.
- Observed (Dev): Cards and pricing appear; still refine H1/H2s & internal links.
- Why: Clear titles/headers improve relevance; helpful content guidance. citeturn0search16
- Fix steps:
  1) Unique Title/H1 per page. 2) H2s for service components. 3) FAQ with concise Q/A. 4) Internal link blocks (“Popular add‑ons”).
- Owner: Content
- Effort: S
- Deps: Copy approvals
- Acceptance: Titles/H1 unique; FAQ published; internal links live.
- Expected lift: +organic clicks; lower pogo-sticking.

Area: Speed & Core Web Vitals
- Issue (Live): Heavy hero; font flashes; unhinted image sizes; unused JS.
- Observed (Dev): Better image usage but optimize weights & font strategy.
- Why: Good Core Web Vitals recommended for success in Search. citeturn0search1turn0search6
- Fix steps:
  1) Convert hero to AVIF/WebP ≤ 300 KB; width/height + fetchpriority. 2) Preconnect to font host; use font-display: swap; subset fonts. 3) Defer non-critical JS; lazy-load below fold.
- Owner: Dev
- Effort: S
- Deps: Asset export
- Acceptance: Lab LCP < 2.5s on 4G; CLS < 0.1; INP < 200ms.
- Expected lift: +CWV pass rate; +SEO stability.

Area: Accessibility (WCAG 2.2 AA)
- Issue (Live): Inconsistent contrast; unclear focus; some images lack meaningful alt; heading order.
- Observed (Dev): Improved structure; ensure visible focus & contrast tokens.
- Why: Accessibility expands market; WCAG requires focus visible/appearance. citeturn2search0turn2search1turn2search5turn2search7
- Fix steps:
  1) Enforce min contrast per tokens. 2) CSS focus indicators (2‑color outline). 3) Alt text for informative images; empty alt for decorative. 4) Linear H1→H2→H3.
- Owner: Design+Dev
- Effort: S
- Deps: Token updates
- Acceptance: Keyboard-only nav; WAVE/axe basics pass.
- Expected lift: −bounce, +time on site; risk reduction.

Area: Trust & conversion
- Issue (Live): Reviews/staff credentials not prominent; policies hard to find.
- Observed (Dev): Membership value clearer; add reviews/rituals + hygiene/policy page.
- Why: Reviews drive consideration and selection. citeturn0search4
- Fix steps:
  1) Add review strip on home & services. 2) Staff photos/credentials. 3) Policies (cancel/no-show/hygiene). 4) In‑shop photo gallery.
- Owner: Content
- Effort: S
- Deps: Assets
- Acceptance: Review snippets live; policies linked footer.
- Expected lift: +conv rate; −no‑shows.

Area: Analytics readiness
- Issue (Live/Dev): No UTM consistency; no GA4 events for “Book”/tel:.
- Why: Cannot attribute or optimize. (Measurement prerequisite for SEO/CWV work.) citeturn0search6
- Fix steps:
  1) UTM schema on all booking links/buttons. 2) GA4 events: click_book, click_call, form_submit; funnel in Explorations.
- Owner: Analytics
- Effort: S
- Acceptance: Events visible in GA4 Realtime; weekly dashboard live.
- Expected lift: Decision velocity; ROI clarity.

DAY‑1 (Ship this week, no design changes)
1) Add booking link to GBP + site header/footer (UTM). citeturn1search2
2) Publish LocalBusiness JSON‑LD on home + services. citeturn0search2
3) Compress hero images; set width/height; lazy‑load below fold. citeturn0search1
4) Add visible CSS focus outline; ensure contrast tokens. citeturn2search5turn2search7
5) Publish lightweight service pages (Cut/Shave/Facial/Massage) with FAQs.

================================================================================
COPY / CODE SNIPPETS (ready to paste)
================================================================================

1) Above‑the‑fold (Home) — booking‑first
H1: Calgary’s Modern Grooming Lounge — Book in Two Taps
Subhead: Classic cuts, hot‑towel shaves, SkinBar facials, and massage. Transparent pricing. Expert barbers. Downtown convenience.
Primary CTA: Book Now
Secondary CTA: See Services

2) Service page outline (e.g., “Hot‑Towel Shave”)
- H1: Hot‑Towel Shave in Calgary — Classic Ritual, Modern Finish
- Lead: 1–2 sentences (what to expect; who it’s for)
- Price anchor: “From $XX” (+ add‑ons)
- What’s included: bullets (prep, hot towels, razor, post‑shave balm)
- Add‑ons: beard line‑up, facial, head massage
- Social proof: 2–3 review snippets (GBP)
- FAQ (4–6 Q/A): duration, prep, aftercare, sensitive skin, cancellations
- CTA: Book Now (UTM to provider)

3) JSON‑LD — LocalBusiness (stub)
(Note: replace placeholders; keep consistent with GBP.)
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Barbershop",
  "name": "Andreas & Co.",
  "image": "https://www.andreasformen.ca/assets/hero-1.jpg",
  "url": "https://www.andreasformen.ca/",
  "telephone": "+1-587-xxx-xxxx",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "245 10 Ave SW, Suite 210",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2R 0A5",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.0447,
    "longitude": -114.0719
  },
  "openingHoursSpecification": [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"10:00","closes":"19:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"10:00","closes":"17:00"}
  ],
  "sameAs": [
    "https://g.page/r/XXXXXXXX",
    "https://www.instagram.com/andreasformen/"
  ],
  "makesOffer": [
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Men's Cut"},"priceCurrency":"CAD"},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hot‑Towel Shave"},"priceCurrency":"CAD"},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"SkinBar Facial"},"priceCurrency":"CAD"},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Massage"},"priceCurrency":"CAD"}
  ]
}
</script>
```
(Why schema: richer appearances & better understanding in Search.) citeturn0search2turn0search7

4) Image optimisation checklist
- Convert hero to AVIF/WebP; target ≤ 200–300 KB.
- Add explicit width/height; include `fetchpriority="high"` on LCP image.
- Preload LCP image and one font weight; `font-display: swap`.
- Lazy‑load non‑critical images (`loading="lazy"`). (Recommended for CWV.) citeturn0search1

5) Booking buttons with UTM
- Header (sticky): `/book?utm_source=website&utm_medium=header&utm_campaign=book_cta`
- Above‑the‑fold: `/book?utm_source=website&utm_medium=hero&utm_campaign=book_cta`
- Footer: `/book?utm_source=website&utm_medium=footer&utm_campaign=book_cta`
- GBP link (custom): provider URL with `utm_source=google&utm_medium=gbp&utm_campaign=book_button`
(GBP allows adding a booking link directly.) citeturn1search2

================================================================================
14‑DAY WORK PLAN (owner, order of ops)
================================================================================

Days 1–3 (Quick wins)
- Add booking link to GBP; sticky header/hero/footer CTAs; UTM everywhere. citeturn1search2
- Compress LCP/hero media; add width/height; lazy‑load below fold. citeturn0search1
- Publish LocalBusiness JSON‑LD; verify in Rich Results Test. citeturn0search2
Owners: Ops (GBP), Dev (assets/CTAs), SEO (schema).

Days 4–7
- Ship four service pages (Cut/Shave/Facial/Massage) with scannable pricing + FAQs.
- Mirror services/hours/NAP across site + GBP. (Local ranking relevance.) citeturn0search0
- Add review carousel + staff credentials + hygiene/policy page. (Reviews drive selection.) citeturn0search4
Owners: Content, SEO, Design.

Days 8–10
- Accessibility pass: contrast tokens; visible focus styles; labelled inputs; alt text policy. (WCAG 2.2 AA, focus visible/appearance.) citeturn2search1turn2search5turn2search7
- GA4 event wiring: click_book, click_call, form_submit; build weekly Looker Studio.
Owners: Dev, Analytics.

Days 11–14
- Provider eval & (if eligible) Reserve with Google enrolment; otherwise maintain custom booking link on GBP. citeturn1search0turn1search7
- Publish GBP‑aligned copy; post “Executive Hour” intro offer; measure deltas.

================================================================================
KEY EVIDENCE (site-specific observations)
================================================================================
- Live: Services content is long-form and dense; lacks scannable pricing; “Book” not sticky; schema absent (no JSON‑LD detected).
- Dev: Clear hero + service cards + prices; multiple “Book” buttons but scheduler not live; NAP present in footer; hours/phone visible.

================================================================================
SOURCES (authoritative)
================================================================================
- Google local ranking: relevance · distance · prominence. citeturn0search0
- Core Web Vitals recommended for success in Search; page experience. citeturn0search1turn0search6
- LocalBusiness structured data + rich results gallery. citeturn0search2turn0search7
- GBP bookings/custom link + RwG availability caveat + supported countries. citeturn1search0turn1search2turn1search7turn1search1turn1search5
- Reviews drive consideration (2025). citeturn0search4
- Accessibility benefits & WCAG 2.2 (focus visible/appearance). citeturn2search0turn2search1turn2search5turn2search7

— End of report —