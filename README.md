# Design System

This project follows a minimal modern design system inspired by clean developer portfolios.

---

## Typography

- Font family: **IBM Plex Sans**
- Fallback: `system-ui, sans-serif`

### Font sizes

- Hero title: `48px / 56px line-height`
- Section title: `32px`
- Subheading: `24px`
- Body text: `16px`
- Small text: `14px`

### Font weights

- Bold: `700` (headings)
- Medium: `500` (emphasis)
- Regular: `400` (body text)

---

## Colors

### Base theme

- Background: `#0f0f0f` (dark)
- Surface: `#1a1a1a`
- Primary text: `#ffffff`
- Secondary text: `#a1a1a1`
- Accent: `#3b82f6` (blue)

---

## Spacing

- Section padding: `80px`
- Container max-width: `1100px`
- Grid gap: `24px`
- Small spacing: `8px`
- Medium spacing: `16px`
- Large spacing: `32px`

---

## Layout

- Max content width: `1100px`
- Centered layout
- Mobile-first responsive design
- Breakpoints:
  - Mobile: `0–640px`
  - Tablet: `640–1024px`
  - Desktop: `1024px+`

---

## Components

### Buttons

- Primary button: blue background + white text
- Hover: slightly darker + scale 1.02
- Border radius: `8px`
- Padding: `10px 16px`

### Cards

- Background: surface color
- Border radius: `12px`
- Padding: `16–24px`
- Subtle hover lift effect

---

## Animations

- Duration: `200–300ms`
- Easing: `ease-out`
- Hover scale: `1.02`
- Fade-in on scroll for sections

---

## Principles

- Minimalism over complexity
- Consistent spacing everywhere
- No random colors
- Typography-first design
- Mobile-first layout

# Portfolio Website

Personal portfolio website built with React + Vite.

## Stack

* React
* Vite
* JavaScript
* React Router DOM
* Tailwind CSS
* Framer Motion
* React Icons
* Vercel (deployment)

## Features

* Multi-page portfolio
* Responsive design (mobile / tablet / desktop)
* Projects showcase
* Project detail pages
* About page
* Contact page
* Resume download
* Social links (GitHub / LinkedIn / Telegram / Email)
* Smooth animations
* Clean modern UI
* Fast deployment with Vercel

## Pages

* Home
* About
* Projects
* Project Details
* Contact
* Resume
* 404 Page

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── assets/
 │    ├── images/
 │    └── videos/
 ├── data/
 ├── hooks/
 ├── styles/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```

## Deployment

The project is deployed using Vercel.

## Future Improvements

* Dark / Light mode
* Blog section
* Admin content management
* CMS integration
* Better SEO optimization
* Analytics integration
* Performance optimization

## Author

AM

Email: [more2write1code@gmail.com](mailto:more2write1code@gmail.com)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
