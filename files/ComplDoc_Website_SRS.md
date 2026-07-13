# Software Requirements Specification
## ComplDoc — Marketing Website

**Version:** 1.0
**Status:** Draft — pending design direction sign-off (see Section 10)
**Prepared for:** ComplDoc (Sarshar Jehangir, Founder/Director)

---

## 1. Purpose

This document specifies requirements for a public marketing website for ComplDoc, a boutique EU AI Act compliance documentation practice. It is written so that a developer, designer, or AI coding tool can build the site without needing further context from prior conversations.

A previous build of this site was rejected by the stakeholder as unsatisfactory. No specific reason was given at time of writing. Section 10 flags this as an open risk and recommends a design-approval checkpoint before full development proceeds.

## 2. Project Overview

ComplDoc drafts regulatory compliance documentation — primarily EU AI Act Annex IV technical documentation — for companies operating AI systems. It positions itself explicitly as **not** a law firm, **not** a certification body, and **not** a legal advisor. The website's job is to communicate this positioning, describe services and pricing, establish credibility, and generate consultation inquiries.

## 3. Scope

**In scope:**
- A 4-page static marketing site: Home, Services, About, Contact
- Responsive layout (desktop, tablet, mobile)
- A contact/inquiry form (front-end only, unless a backend is separately commissioned — see 6.4)
- Use of existing brand assets where applicable (see Section 9)

**Out of scope (unless requested separately):**
- CMS / admin backend
- Blog or article publishing system
- Client portal, login, or document delivery system
- Payment processing
- Multi-language support
- Backend email delivery for the contact form (a static form only; wiring it to an actual inbox is a separate task)

## 4. Stakeholders

| Role | Party |
|---|---|
| Business owner / final approver | Sarshar Jehangir, Founder, ComplDoc |
| Target audience (site visitors) | Startup/SME founders, compliance leads, and procurement contacts at HR-tech, medical AI, and GenAI companies in the EU/UK |

## 5. Site Map & Navigation

- **Home** (`/` or `index.html`)
- **Services** (`/services`)
- **About** (`/about`)
- **Contact** (`/contact`)

Navigation bar present on all pages, in this order: Home, Services, About, Contact, plus a persistent call-to-action button linking to Contact (e.g. "Start a project" or "Book a consultation").

Footer present on all pages with: brand mark, one-line legal disclaimer (ComplDoc is not a law firm / does not provide legal advice), sitemap links, and contact link.

## 6. Functional Requirements

### 6.1 Home Page
Must include, in some order:
- A hero section stating what ComplDoc does in one sentence, and that it is documentation-first, not legal advice
- A primary call-to-action (e.g. "Request a classification check") and a secondary link to Services
- An explanation of the EU AI Act's four risk tiers (Unacceptable / Minimal / Limited / High-risk), with High-risk flagged as ComplDoc's core focus
- A preview of the service packages (linking through to Services)
- The three target sectors: HR/recruitment AI, medical/health AI, GenAI platforms
- A closing call-to-action driving to Contact

### 6.2 Services Page
Must list all current service packages with pricing, sourced from the business's actual pricing structure:

| Package | Price | Notes |
|---|---|---|
| Consultation (classification call) | $75 | 60 minutes, written summary within 24 hrs |
| Classification & Gap Analysis (Basic/Standard/Premium) | $150 / $450 / $850 | 1 system / up to 3 systems / full portfolio |
| Core Technical Documentation Pack (Basic/Standard/Premium) | $650 / $1,200 / $2,200 | Sections 1–2 only / full Annex IV / full provider package |
| Enhanced Documentation Pack | Quoted per scope | Adds ISO/IEC 42001 & 23894 mapping, for notified body / procurement prep |
| Compliance Maintenance Plan | Monthly retainer | Ongoing post-deployment documentation updates |
| Add-on services | Priced per engagement | Transparency notices, PMM framework, risk workshops |

Each package must state: what's included, delivery timeframe (where applicable), and a call-to-action to Contact.

### 6.3 About Page
Must include:
- Founder background (documentation + technical background; explicitly **not** a lawyer)
- ComplDoc's operating principles: (1) no legal advice, (2) documentation drafted from primary regulatory text rather than secondary summaries, (3) no certification claims
- A description of the engagement process (e.g. classify → scope → draft → maintain)

### 6.4 Contact Page
Must include:
- Direct contact details (email at minimum; phone/LinkedIn optional — **confirm with stakeholder before publishing personal phone number**)
- An inquiry form collecting: name, email, company (optional), service of interest, brief system description
- Clear indication of expected response time
- **Note:** unless a backend (e.g. Formspree, serverless function, or email API) is separately implemented, the form must not silently fail — it should either connect to a working backend or clearly instruct the user to email directly, and this decision must be made explicit during development, not left ambiguous.

## 7. Non-Functional Requirements

- **Responsive:** must render correctly from ~360px (mobile) to 1920px (desktop) widths
- **Performance:** no render-blocking of first paint beyond web font loading; page weight reasonable for a static site (no unnecessary heavy assets)
- **Accessibility:** visible keyboard focus states on all interactive elements; sufficient color contrast (WCAG AA minimum); form fields with associated labels
- **Browser support:** current versions of Chrome, Safari, Firefox, Edge
- **No client-side data storage** of personal information beyond what's needed to submit the contact form
- **Reduced motion:** any animation must respect `prefers-reduced-motion`

## 8. Technical Requirements

- Delivered as static HTML/CSS (framework optional, but no build step should be required to view the site locally)
- Must be deployable to any static host (Netlify, Vercel, or GitHub Pages) without modification
- Custom domain (compldoc.com) should be attachable via standard DNS instructions from the chosen host

## 9. Existing Brand Assets to Reuse

The following are already established and should be treated as constraints, not starting-from-scratch decisions:
- Company name: **ComplDoc**
- Signature mark: **§** (section sign)
- Color palette: navy (#0F1A2E), purple accent (#6B4FBB)
- Typography previously used: Fraunces (display), Inter (body), IBM Plex Mono (citations/labels)
- Background tone: warm paper/off-white rather than stark white

**These are not necessarily locked** — see Section 10.

## 10. Open Questions / Risks (must be resolved before full build)

1. **The most recent full-site build was rejected outright** ("garbage") with no specific feedback given. Before redevelopment starts, the stakeholder should confirm, at minimum, one of:
   - Which specific element is wrong: visual style, copy/tone, layout, or the underlying concept
   - Whether the existing brand system (navy/purple, § mark, Fraunces/Inter) should be kept or is itself part of the problem
   - A reference site, image, or description of the desired look, if one exists
2. Whether personal contact details (phone number, personal email) should appear on the public Contact page, or whether a business-only email/form should be used instead
3. Whether the contact form needs live backend delivery in this phase, or whether a direct-email fallback is acceptable for launch
4. Final domain/hosting decision (Netlify vs. Vercel vs. GitHub Pages)

**Recommendation:** a low-fidelity wireframe or single homepage draft should be approved by the stakeholder before all four pages are built out, to avoid rebuilding a full site against unclear feedback a second time.

## 11. Acceptance Criteria

The site is considered complete when:
- All four pages exist, link to each other correctly, and share consistent navigation/footer
- All service pricing matches Section 6.2 exactly
- The site renders without layout breakage at mobile and desktop widths
- The contact form either submits successfully to a working destination or clearly directs the user to email/phone contact
- The stakeholder has explicitly approved the visual direction prior to final delivery
