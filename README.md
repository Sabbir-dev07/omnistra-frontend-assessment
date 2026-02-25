# Omnistra Frontend Assessment

This project is a high-fidelity frontend implementation task focused on replicating complex UI components with pixel-level accuracy, smooth interactions, and modern web standards.

## Project Overview

The objective was to recreate two specific high-end SaaS UI sections:
1.  **Navbar Section** (Reference: [Chargeflow.io](https://www.chargeflow.io/))
2.  **Integrations Section** (Reference: [Domu.ai](https://domu.ai/))

## Core Features

### 1. Navigation Bar (Chargeflow.io)
- **Mega Menu Registry:** A data-driven dropdown system supporting complex layouts for 'Product', 'Customers', and 'Resources'.
- **Glassmorphism & Scroll Effects:** Dynamic header that transitions from transparent to a blurred, solid background upon scrolling.
- **Micro-interactions:** Hover-aware animations using `framer-motion` for smooth height and opacity transitions.
- **Mobile Responsive:** A fully custom hamburger menu and slide-out mobile drawer.

### 2. Integrations Section (Domu.ai)
- **Feature Grid:** A 3-column interactive grid with subtle top-gradient highlights and hover-triggered color shifts.
- **Infinite Marquee:** A high-performance horizontal scrolling track for integration partners developed with optimized linear animations.
- **Scroll Reveal:** Components use `whileInView` observers for elegant entry animations.
- **Pixel Accuracy:** Precise spacing, typography (tracking and weights), and alignment matching the Domu.ai aesthetic.

## Tech Stack
- **Frontend Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion
- **Icons:** Phosphor Icons / Custom SVG Icons
- **Deployment:** Optimized for modern V8 engines (Chrome/Edge)

## Project Structure
```text
src/
├── components/
│   ├── Navbar/          # Main navigation components & registry
│   ├── ui/              # Reusable UI primitives (Button, SonarButton, etc.)
│   ├── Integrations.jsx # Domu.ai section implementation
│   └── ...              # Other page sections
├── hooks/               # Custom hooks (e.g., useScroll)
├── utils/               # Animation variants & helpers
└── main.jsx             # Entry point
```

## Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd omnistra-frontend-assessment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Implementation Goals Achieved
- [x] **Pixel-level UI accuracy:** Strict adherence to reference design spacing and alignment.
- [x] **Interaction Fidelity:** Smooth transition timings and hover state logic.
- [x] **Responsiveness:** Fluid layouts across desktop, tablet, and mobile breakpoints.
- [x] **Code Quality:** Modular architecture, clean component hierarchy, and reusable logic.
