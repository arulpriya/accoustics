# Structural Acoustics — Static Website

Recreation of the Wix reference site as a plain HTML5 / CSS / JS site, ready for GitHub Pages.

## Files
```
index.html                 # Home
research-experience.html   # Research & Experience
engineering-services.html  # Engineering Services (+ gallery)
contacts.html              # Contacts (+ form)
css/style.css              # All styles
js/main.js                 # Nav, scroll reveal, form handling
```

## Run locally
Just open `index.html` in a browser, or:
```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `structural-acoustics`).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**.
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)** → Save.
4. Site goes live at `https://<your-username>.github.io/<repo>/` in ~1 min.

## Notes
- Gallery and logos use CSS placeholders (the Wix images are not downloadable). Replace `.ph` blocks / add `<img>` tags with your own images when ready.
- The contact form is client-side only (shows a confirmation). For real submissions, use [Formspree](https://formspree.io) or [Getform](https://getform.io) — set the form `action` to their endpoint.
