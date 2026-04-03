# Prompt Atlas for Workspace

Prompt Atlas is a static bilingual web app inspired by the October 2024 Gemini for Google Workspace prompt guide.

It includes three requested features:

- Category browsing across work roles
- Search across English and Chinese content
- Chinese translation and full language toggle

## Files

- `index.html`: app shell
- `styles.css`: visual design and responsive layout
- `data.js`: structured bilingual prompt library
- `app.js`: search, filter, translation toggle, and detail modal

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to GitHub Pages

Because this is a static site, it can be deployed directly from the repository root with GitHub Pages.
