# tawsifrahmanshopnil.com

Personal portfolio of **Tawsif Rahman Shopnil** — full-stack software engineer (Flutter · React · Laravel · Node.js).

Live at **[tawsifrahmanshopnil.com](https://tawsifrahmanshopnil.com)**.

## Stack

- [SvelteKit 2](https://svelte.dev/docs/kit) + Svelte 5 (runes)
- [Tailwind CSS v4](https://tailwindcss.com)
- [motion-sv](https://motion-sv.vercel.app) for animations, with components adapted from [Svelte Animations](https://github.com/SikandarJODD/animations)
- Static build via `@sveltejs/adapter-static`, deployed to GitHub Pages by GitHub Actions on every push to `main`

## Development

```bash
npm install
npm run dev        # dev server
npm run check      # type-check
npm run build      # production build -> build/
npm run preview    # preview the production build
```

## Content

All resume/portfolio content lives in [`src/lib/data/resume.ts`](src/lib/data/resume.ts). The LaTeX source of the downloadable resume is in [`resume/resume.tex`](resume/resume.tex) (compile with pdfLaTeX, output goes to `static/TRSCV.pdf`).
