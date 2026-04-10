# Shut It Down — Symbolic Awareness Campaign

A personal, non-commercial, symbolic awareness campaign about the explicit content subscription platform industry.

**No specific company is named. No money is collected. Ever.**

---

## What This Is

A fully static, open-source website built for symbolic public awareness. It includes:

- Industry statistics (illustrative estimates only)
- Educational content about the industry's documented harms
- Scripture-based faith reflection section
- Anonymous testimonials from public Reddit threads
- A 100% symbolic pledge tracker (no payment gateway, no money moves)
- Community comments
- Full legal disclaimer section

This project is free to deploy, free to adapt, and free to share under the MIT license.

---

## Legal Summary

| Item | Status |
|------|--------|
| Revenue generated | **Zero** |
| Money collected | **Never** |
| Specific companies named | **None** |
| Adult content | **None** |
| Business entity | **None — private individual** |
| Analytics / tracking | **None** (default build) |
| Data sold | **Never** |

All figures are illustrative industry-scale estimates. Not sourced from any single company's disclosures.

---

## Deploy in 60 Seconds

### Option 1: Netlify Drag-and-Drop (Easiest)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag the entire `shutitdown/` folder onto the Netlify dashboard
3. Done. Your site is live at a `*.netlify.app` URL instantly.

### Option 2: GitHub Pages

1. Create a new GitHub repository (can be private or public)
2. Upload all files maintaining the folder structure:
   ```
   shutitdown/
   ├── index.html
   ├── config.js
   ├── dataset/
   │   ├── stories.json
   │   ├── research.json
   │   ├── news_sources.json
   │   └── platforms.json
   ```
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site is live at `https://yourusername.github.io/shutitdown/`

### Option 3: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repo or upload directly
3. Build settings: leave blank (static site, no build command needed)
4. Deploy

---

## Configuration (Required Before Deploy)

`config.js` is **gitignored** — it holds your Firebase keys and must be created locally.

```bash
cp config.example.js config.js
```

Then fill in your Firebase values in `config.js`. The site will not work without this file.

All other settings (site title, goal amount, pledge range, etc.) are in `config.js` as well — edit as needed.

---

## Real-Time Data with Firebase (Optional)

By default, the site uses **localStorage only** — pledges, comments, and story submissions exist only in the visitor's own browser. They are not shared or visible to other users.

To make data live and shared across all visitors:

### Step 1 — Create a Firebase project
1. Go to [firebase.google.com](https://firebase.google.com) → **Get started** → create a free project
2. Inside the project, go to **Build → Realtime Database → Create Database**
3. Choose any region and start in **test mode** (allows public read/write — good to start)
4. Go to **Project Settings → Your apps → Add app → Web** → copy the `firebaseConfig` object shown

### Step 2 — Set database rules
In the Firebase console → Realtime Database → Rules, use:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
> For a more secure setup, restrict writes to authenticated users only (see Firebase Auth docs).

### Step 3 — Paste config into `config.js`
Replace `FIREBASE_CONFIG: null` with:
```javascript
FIREBASE_CONFIG: {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "000000000000",
  appId:             "1:000000000000:web:0000000000000000000000"
},
```

### Step 4 — Deploy
No other changes needed. The Firebase SDK is loaded automatically at runtime when `FIREBASE_CONFIG` is set.

### What gets stored in Firebase

| Path | Data | Description |
|------|------|-------------|
| `/pledgers` | `{ count, total }` | Live pledge counter — shared across all visitors |
| `/comments` | `{ [id]: { name, location, text, ts } }` | Reader comments — visible to everyone |
| `/user_stories` | `{ [id]: { category, text, ts } }` | Anonymous story submissions |

Firebase free tier (Spark plan) is sufficient for this use case — no credit card required.

---

## Dataset Files

| File | Contents |
|------|----------|
| `dataset/stories.json` | 63 anonymous testimonials from Reddit |
| `dataset/research.json` | 12 peer-reviewed academic sources |
| `dataset/news_sources.json` | 12 news articles from major outlets |
| `dataset/platforms.json` | Industry-wide overview data (no company names) |

To add stories, append entries to `stories.json` following the existing schema:

```json
{
  "id": 64,
  "category": "Mental Health Spiral",
  "platform_type": "subscription content platform",
  "platform_specific": "not disclosed",
  "quote": "Your quote here...",
  "source_platform": "Reddit",
  "source_subreddit": "r/example",
  "source_url": "https://www.reddit.com/r/example/",
  "date_collected": "2026-04",
  "verified": true
}
```

---

## Customization

- **Colors** — Edit CSS variables at the top of the `<style>` block in `index.html`
- **Fonts** — Google Fonts are loaded via CDN; swap the `@import` URL to change fonts
- **Verses** — Edit the faith section HTML directly to add/remove/change scripture
- **Stats** — All illustrative figures are controlled via `config.js`
- **Ticker bar** — Edit the `tickerPhrases` array in the `<script>` block

---

## Who Built This

A private individual. Not a business, not a nonprofit, not a political organization.

This project is open source. Anyone may fork it, adapt it, and deploy their own version for non-commercial awareness purposes under the terms of the MIT license.

---

## License

MIT — see `LICENSE` file.

---

## Disclaimer

This project is a work of public commentary and symbolic expression protected under free speech principles. It contains no adult content, names no specific company, and generates zero revenue. All statistics are illustrative industry-scale estimates.
