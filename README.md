# ITZone — Gaming PC Store

**UI/UX Midterm Project** · Web Design · Semester 2 · 2026

A responsive front-end prototype for a Cambodian gaming PC e-commerce store. Users can browse pre-built gaming PCs, configure a custom PC, shop gaming laptops and peripherals, manage a cart, and proceed through checkout — all across a connected multi-page interface.

---

## Team

| Student ID | Full Name | Role | Responsibilities |
|------------|-----------|------|-----------------|
| e20230093 | Phoung Sovannara | Project Lead / Front-end Developer | Project structure, shared components (navbar/footer), cart system, custom PC builder, auth pages, checkout/payment, base CSS, responsive design across all pages |
| e20230076 | Tiv Chhengsim | Front-end Developer / UI Designer | Gaming laptop page, product detail page, navbar redesign, card styles, responsive layout (tablet/phone), profile page design, gear page fixes |
| e20230138 | Teav Encheng | Front-end Developer | Cart & payment pages, payment logic, initial page versions and iteration |
| e20230197 | Thon Leanghor | Front-end Developer | Sign in / sign up pages, custom PC builder logic, gaming laptop section layout |
| e20230171 | Reng Ingseng | Front-end Developer | Profile page design and layout |
| e20230820 | Vutha Daraleap | Front-end Developer | Gear page — images, CSS, and JavaScript |

---

## Problem Statement

Cambodian gamers and PC enthusiasts have no dedicated local online store that lets them browse, filter, and purchase gaming hardware — or configure a custom PC build — in one place. ITZone solves this by providing a clean, fast, dark-themed storefront tailored to the local gaming community.

---

## Objectives

- Design and implement an end-to-end e-commerce flow for gaming hardware
- Apply core UI/UX principles: visual hierarchy, affordance, feedback, and consistency
- Build a fully responsive site that works on desktop and mobile
- Demonstrate practical front-end skills using semantic HTML, CSS, and vanilla JavaScript

---

## Key Features

- **Homepage** — hero section, promotional banners, product highlights, brand showcase
- **Pre-built PCs** — filterable catalog (price, processor, GPU, memory) with featured deals
- **Custom PC Builder** — step-by-step wizard to select CPU, GPU, motherboard, and 6 more components; validates selection before advancing
- **PC Components** — free-browse parts catalog with sidebar navigation
- **Gaming Laptops** — filterable catalog (brand, GPU, memory, price)
- **Gear** — peripherals catalog (headphones, mice, keyboards, webcams, microphones)
- **Cart** — supports both regular products and custom PC builds; quantity controls
- **Checkout** — shipping form, credit card and KHQR payment toggle
- **Auth flow** — sign in, sign up, forgot password, OTP verify pages

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (Flexbox, Grid, CSS Variables, Media Queries) |
| Scripting | Vanilla JavaScript (ES2020) |
| State | `localStorage` for cart persistence |
| Fonts | Google Fonts — Orbitron, Rajdhani, Exo 2 |
| Build tool | None — no framework, no bundler |

---

## How to Run the Prototype

### Option 1 — VS Code Live Server 

1. Clone or download the repository
2. Open the `ITZone` folder in **Visual Studio Code**
3. Install the **Live Server** extension (if not already installed)
4. Right-click `src/pages/Main.html` → **"Open with Live Server"**
5. The site opens at `http://127.0.0.1:5500/src/pages/Main.html`

### Option 2 — Any local HTTP server

```bash
# Python 3
cd ITZone
python -m http.server 8080
# Then open: http://localhost:8080/src/pages/Main.html
```

> **Note:** The site must be served over HTTP (not opened as a `file://` path) for JavaScript modules and relative asset paths to work correctly.

---

## Project Structure

```
ITZone/
└── src/
    ├── pages/          # All HTML pages (Main.html is the entry point)
    ├── css/            # Page-specific stylesheets
    ├── js/             # Page-specific JavaScript files
    ├── components/     # Shared navbar and footer (self-injecting)
    └── assets/
        └── images/     # All imagery organized by category
            ├── prebuildpc/
            ├── gaming-laptop-images/
            └── customPC_Images/
```

---

## Pages Overview

| Page | File | Description |
|------|------|-------------|
| Homepage | `Main.html` | Hero, promotions, featured products |
| Pre-built PCs | `prebuilt.html` | Filterable PC catalog |
| Custom PC Builder | `custompc.html` | Step-by-step component wizard |
| PC Components | `pc-components.html` | Free-browse parts catalog |
| Gaming Laptops | `gaming-laptop.html` | Filterable laptop catalog |
| Gear | `gear.html` | Peripherals by category |
| Cart | `cart.html` | Review cart and custom builds |
| Checkout | `payment.html` | Shipping + payment form |
| Profile | `profile.html` | User dashboard |
| Sign In / Up | `signin.html`, `signup.html` | Authentication UI |

---

## Links

| Resource | Link |
|----------|------|
| Figma Prototype | *https://www.figma.com/design/GyHdvkHxl6OSrhEEPVLRBc/IT_Zone_webProject?node-id=0-1&t=e4xqBw24C6nD4lor-1* |
| GitHub Repository | *https://github.com/Vann06-2005/Web-Design-Project* |
| Deployed Website | *https://it-zone-computer.netlify.app/* |
| Presentation Video | *Will release soon* |

---

## Design Decisions

- **Dark cyberpunk aesthetic** — near-black `#080B10` background with glowing cyan `#00F0FF` accents to match the gaming target audience
- **CSS design tokens** — all colors and fonts defined as CSS variables in `:root` for consistency
- **Self-injecting components** — navbar and footer are JavaScript IIFEs that inject themselves, making it easy to maintain across all pages
- **localStorage cart** — no backend required; cart state persists across page navigation
- **Desktop-first responsive** — full desktop layout preserved, with hamburger nav and stacked layouts applied via `@media (max-width: ...)` breakpoints

---
