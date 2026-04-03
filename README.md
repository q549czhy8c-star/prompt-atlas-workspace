# Prompt Atlas for Workspace

A bilingual static web app inspired by the October 2024 `Gemini for Workspace` prompt guide.

## What it does

- Reorganizes the guide into persona-based categories
- Adds keyword search across use cases, tools, and prompt patterns
- Supports English and Traditional Chinese views
- Shows concise, adapted prompt templates instead of copying long PDF passages
- Works as a static site, so it can be deployed easily to GitHub Pages

## Files

- `index.html`: app shell
- `styles.css`: visual design and responsive layout
- `data.js`: bilingual category and prompt dataset
- `app.js`: filtering, search, translation toggle, and modal details

## Local preview

Run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Because the app is fully static, it can be published directly from the repository root with GitHub Pages.
