# My Portfolio — Next.js 14 · TypeScript · Tailwind CSS

A premium, production-ready personal portfolio with refined aesthetics,
smooth animations, and full SEO.

---

## Getting Started

```bash
npm install
npm run dev          # → http://localhost:3000
npm run build        # production build
npm run start        # serve production build locally
```

---

## Animation Explainer

All animations are **pure CSS** (no extra libraries needed).

### 1. `fadeSlideUp` — Hero text & section headings
```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
Applied via `.anim-fade-up` + delay classes (`.anim-fade-up-d1` through `-d5`).
Each element staggers 120 ms apart, creating a cascading entrance.

### 2. `revealLine` — Accent underline
```css
@keyframes revealLine {
  from { transform: scaleX(0); transform-origin: left; }
  to   { transform: scaleX(1); transform-origin: left; }
}
```
Used on the terracotta bar under headings. It "draws" left→right with a
0.4 s delay so it fires after the heading appears.

### 3. Scroll-triggered `.reveal` — Cards & experience rows
Uses an **IntersectionObserver** (in `hooks/useReveal.ts`):
- Elements start at `opacity: 0; transform: translateY(24px)`.
- When 15% of the element enters the viewport, `.visible` is added.
- CSS transition on `.reveal.visible` fades and slides them up.
- `observer.unobserve()` is called after first trigger (fires once).

### 4. `marquee` — Skills ticker
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```
The skills list is **duplicated** in JSX so the strip is always filled.
Moving `−50%` = one full copy → loops seamlessly.
`animation-play-state: paused` on hover lets users read the tags.

### 5. `float` — "Available" badge
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
```
A gentle 4-second sine-wave bob on the availability badge.

### 6. `pulseRing` — Avatar rings on About page
```css
@keyframes pulseRing {
  0%   { transform: scale(1);   opacity: 0.4; }
  100% { transform: scale(1.6); opacity: 0;   }
}
```
Two rings with a 0.7 s stagger radiate outward and fade — like a radar ping.

### 7. `shimmer` — Primary button hover
```css
@keyframes shimmer {
  from { background-position: -200% center; }
  to   { background-position:  200% center; }
}
```
A translucent gradient sweeps across the button only on hover.

### 8. Nav-link underline — CSS transition
Not a keyframe — just a width transition on a pseudo-element:
```css
.nav-link::after { width: 0; transition: width 0.3s ease; }
.nav-link:hover::after { width: 100%; }
```

---

## Deploying to Vercel (Recommended)

1. Push your project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Set the environment variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourname.dev
   ```
4. Click **Deploy**. Done — Vercel detects Next.js automatically.

### Other platforms

| Platform | Command |
|---|---|
| Netlify | `npm run build` → publish `.next` (use `@netlify/plugin-nextjs`) |
| Railway | Connect repo → auto-detects Next.js |
| Render | New Web Service → `npm run build && npm run start` |
| Self-hosted | `npm run build && npm run start` (Node 18+) |

---

## 🔍 SEO Checklist

- [x] `<title>` + `<meta description>` per page via Next.js Metadata API
- [x] Open Graph tags (title, description, image, URL)
- [x] Twitter Card tags
- [x] JSON-LD `Person` schema (in `layout.tsx`)
- [x] Canonical URL
- [x] robots `index, follow`
- [ ] Replace `YOUR_GOOGLE_SITE_VERIFICATION_TOKEN` in `layout.tsx`
- [ ] Add real `og-image.png` (1200×630) to `/public`
- [ ] Update all placeholder links (GitHub, LinkedIn, Twitter, email)
- [ ] Submit sitemap at `https://yourname.dev/sitemap.xml` to Google Search Console
  (Next.js auto-generates one when you add `app/sitemap.ts`)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + JSON-LD
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx          # Sticky, blur-on-scroll nav
│   ├── Footer.tsx
│   └── ProjectCard.tsx     # Animated project card
├── hooks/
│   └── useReveal.ts        # Scroll-triggered IntersectionObserver
└── styles/
    └── globals.css         # All animations + design tokens
```
