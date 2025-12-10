# David Kim — Portfolio

A personal portfolio website featuring an interactive terminal-style interface, built with [Astro](https://astro.build/).

![Astro](https://img.shields.io/badge/Astro-5.16-ff5d01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Interactive Terminal UI** — Nostalgic command-line aesthetic with typewriter animations and clickable navigation links
- **Rainbow Cowsay** — Playful ASCII art greeting with dynamic gradient colors
- **Dark Theme** — Sleek Tokyo Night-inspired color palette
- **Responsive Design** — Optimized for both desktop and mobile viewing

## 🏗️ Architecture

```
src/
├── components/
│   ├── Terminal.astro        # Terminal window component (UI shell)
│   └── TerminalSimulator.ts  # Animation engine & interaction logic
├── layouts/
│   └── BaseLayout.astro      # Shared HTML structure & global styles
└── pages/
    ├── index.astro           # Home page (terminal interface)
    └── about.astro           # About me page (timeline & skills)
```

### Key Components

| Component | Purpose |
|-----------|---------|
| `TerminalSimulator.ts` | Handles typewriter effects, cursor blinking, and pseudo-link navigation |
| `Terminal.astro` | Provides the macOS-style terminal window frame and styling |
| `BaseLayout.astro` | Defines CSS custom properties (design tokens) and base typography |

## 🚀 Quick Start

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

The dev server runs at **http://localhost:4321**

## 🎨 Design System

The site uses CSS custom properties for theming:

```css
--terminal-bg: #1a1b26      /* Terminal background */
--terminal-green: #9ece6a   /* Primary terminal text */
--terminal-yellow: #e0af68  /* User prompt */
--terminal-pink: #bb9af7    /* Path & cursor */
--terminal-cyan: #7dcfff    /* Links */
--accent: #7aa2f7           /* Accent color */
```

## 📄 License

MIT
