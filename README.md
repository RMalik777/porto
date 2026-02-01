# Portfolio

A modern portfolio website built with TanStack Start and deployed on Cloudflare.

## Tech Stack

### Core Framework

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework with SSR support
- **[TanStack Router](https://tanstack.com/router)** - Type-safe file-based routing with SSR query integration
- **React 19** - Latest React with enhanced features
- **TypeScript** - Type-safe development

### Build & Development

- **Vite** - Lightning-fast build tool and dev server
- **pnpm** - Efficient package management

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework with the new engine
- **tailwindcss-animate** - Animation utilities for Tailwind
- **Base UI** - Headless UI components
- **next-themes** - Theme management with dark mode support

### Animation & Interactions

- **GSAP** - Professional-grade animations
- **Embla Carousel** - Smooth carousel component
- **Lucide React** - Modern icon library

### Utilities

- **@unpic/react** - Universal image component with optimization
- **simple-icons** - Brand icon collection
- **Fontsource Variable** - Self-hosted variable fonts (Inter, JetBrains Mono)

### Deployment

- **Cloudflare** - Edge deployment with Wrangler CLI
- **@cloudflare/vite-plugin** - Cloudflare integration for Vite

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open your browser to see the result. Edit routes in `src/routes/` - changes auto-update.

## Available Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm deploy     # Build and deploy to Cloudflare
pnpm lint       # Check formatting and linting
pnpm fix        # Auto-fix formatting and linting issues
```

## Project Structure

- `src/routes/` - File-based routing
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities and data
- `public/` - Static assets
