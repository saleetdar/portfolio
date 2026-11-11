# Portfolio

Personal portfolio site for Mohammad Saleet Dar: full-stack and AI developer in Srinagar, India.

A single static page in plain HTML, CSS and a small script. No build step.

## Files

- `index.html` — page content, SEO tags and structured data
- `style.css` — all styles
- `script.js` — contact form (opens the visitor's email app) and scroll reveals
- `404.html` — not-found page
- `og-image.png`, `favicon.svg`, `apple-touch-icon.png` — social preview and icons
- `robots.txt`, `sitemap.xml` — search engine files

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Works on any static host. On Vercel, import the repo and keep the defaults (no framework, no build command, output directory `.`).

After the first deploy, replace `https://saleetdar.github.io/` with the live address in `index.html`, `robots.txt` and `sitemap.xml` so the canonical URL, social image and sitemap point to the real site.
