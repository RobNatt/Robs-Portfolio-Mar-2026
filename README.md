# Robert Nattrass — Portfolio 2026

A modern, animated developer portfolio built with Next.js, featuring a dot-distortion shader background, typewriter effects, interactive world map, and contact form with Resend email integration.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)

## Features

- **Hero Section** — Typewriter animation, blur-fade text effects, and hero photo
- **Projects** — Portfolio project showcase
- **Logo Clouds** — Marquee-style logo display
- **Services** — Consultation metrics grid (performance audit, UX heatmap, SEO, tech roadmap, GSAP, React SaaS, Next.js refactors)
- **Pricing / Remote Globe** — Interactive world map with animated connection dots for remote client availability
- **Contact Form** — Email integration via Resend with toast notifications and failure alerts
- **Responsive Layout** — Mobile-first with sticky navbar and smooth scroll navigation
- **Dark Mode** — Theme toggle with `next-themes`

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Motion (Framer Motion), Radix UI, shadcn/ui
- **Styling:** Tailwind CSS 4, tw-animate
- **Icons:** Tabler Icons, Lucide React
- **Email:** Resend
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/RobNatt/Robs-Portfolio-Mar-2026.git
cd Robs-Portfolio-Mar-2026

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root for contact form email delivery:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Get your API key from [Resend](https://resend.com). Without it, the contact form will display a configuration message instead of sending emails.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── actions/      # Server actions (contact form)
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── ui/           # Reusable UI (typewriter, world-map)
│   ├── ContactForm.tsx
│   ├── ConsultationMetrics.tsx
│   ├── DotDistortionShader.tsx
│   ├── Footer.tsx
│   ├── HeaderNavBar.tsx
│   ├── HeroPhoto.tsx
│   ├── LogoClouds.tsx
│   ├── Projects.tsx
│   ├── RemoteGlobe.tsx
│   └── TextEffects.tsx
└── lib/
    └── utils.ts
```

## Deployment

Deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any platform that supports Next.js. Add `RESEND_API_KEY` to your environment variables in the hosting dashboard.

## License

© 2026 Robert Nattrass. All rights reserved.
