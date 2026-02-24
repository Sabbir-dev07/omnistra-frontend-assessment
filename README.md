# Omnistra Frontend Assessment

A pixel-perfect React clone of two UI sections from production websites, built with **Vite + React (JS) + Tailwind CSS v4 + Framer Motion**.

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool / dev server |
| Tailwind CSS | v4 | Utility-first styling |
| Framer Motion | latest | All animations & transitions |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        ← Chargeflow navbar clone
│   ├── Hero.jsx          ← Hero placeholder section
│   └── Integrations.jsx  ← Domu integrations clone
├── App.jsx
├── index.css             ← Tailwind + CSS theme tokens
└── main.jsx
```

## Sections Cloned

### 1. Navbar — [chargeflow.io](https://www.chargeflow.io/)
- **Announcement bar** at top
- **Logo**: Stylized "chargeflow" brand with lightning bolt SVG icon
- **Nav items**: Products, Customers, Pricing, Integrations, Resources, Company
- **Products dropdown**: 5 product items with descriptions and badges, Framer Motion animation
- **Scroll effect**: Navbar from transparent → white + shadow at scrollY > 10px
- **CTAs**: "Sign in" text link + "Schedule a demo" gradient pill button
- **Mobile**: Hamburger → full-height slide-in drawer

### 2. Integrations — [domu.ai](https://domu.ai/)
- **Heading**: "One platform, unlimited integrations" with indigo gradient text
- **Grid**: 18 integration partner cards — 6 cols (desktop) → 4/3/2 cols (responsive)
- **Hover**: scale(1.08) + glow shadow + brand-color radial gradient + lift
- **Scroll animation**: Staggered fade-in+slide-up with Framer Motion whileInView

## Design Assumptions

- **Fonts**: Inter (Google Fonts, 300–800 weights)
- **Chargeflow colors**: Purple #7c3aed, deep purple #4f46e5
- **Domu dark palette**: Background #0a0a0f, cards #111118, accent #6366f1
- **Integration logos**: Colored abbreviation tiles (placeholder for real SVG assets)

## Deploy

### Vercel
```bash
npm i -g vercel && vercel
```

### Netlify
```bash
npm run build
# Drop the dist/ folder on netlify.com/drop
```
