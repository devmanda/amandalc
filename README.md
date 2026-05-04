# alc-personal-site

Personal site and portfolio for **Amanda Christianson**, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Stack

| Piece      | Role                                      |
| ---------- | ----------------------------------------- |
| Astro 5    | Static site framework                     |
| Tailwind 3 | Styling (`tailwind.config.cjs`)           |
| PostCSS    | CSS pipeline                              |

Custom headline/body fonts (**Aventine**, **Venus**) load via `@font-face` in `src/styles.css`; add `.woff2` files under `public/fonts/` or rely on locally installed fonts.

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Dev server (default `localhost:4321`) |
| `npm run build`   | Production build → `dist/`          |
| `npm run preview` | Preview the production build locally |

## Project layout

```text
src/
├── components/     # Welcome, SitePage, SiteChrome, SiteDirectoryNav, SiteColophon
├── layouts/        # Layout.astro (document shell, meta, global CSS link)
├── pages/          # Routes (index, about, contact, musings/, case-studies/)
└── styles.css      # Fonts, Tailwind layers, base styles

public/
├── favicon.png
└── fonts/          # Optional self-hosted font files
```

## Development

1. Clone the repo and run `npm install`.
2. Run `npm run dev` and open the URL shown in the terminal.

Static output is emitted to `dist/` after `npm run build`, suitable for any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).
