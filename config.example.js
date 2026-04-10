/**
 * shutitdown — Site Configuration Template
 *
 * HOW TO USE:
 *   1. Copy this file → config.js  (cp config.example.js config.js)
 *   2. Fill in your Firebase values in FIREBASE_CONFIG below
 *   3. config.js is gitignored — your keys stay private
 *
 * Without Firebase: set FIREBASE_CONFIG to null → site works in localStorage-only mode
 * With Firebase:    fill in all 7 values → pledges/comments/stories shared across all visitors
 */

const CONFIG = {
  // Label used throughout the site for the industry being discussed
  PLATFORM_LABEL: "explicit content platforms",

  // Illustrative industry-scale goal amount (symbolic only — no money collected)
  GOAL_AMOUNT: 5_000_000_000,

  // Per-capita illustrative estimate (US population ~335M)
  PER_CAPITA_ESTIMATE: 14.93,

  // Site title shown in <title> and hero
  SITE_TITLE: "Shut It Down",

  // Tagline shown under hero headline
  SITE_TAGLINE: "A symbolic awareness campaign against the explicit content subscription industry.",

  // Estimated user base (industry-wide, illustrative)
  ESTIMATED_USERS: "370M+",

  // Industry revenue estimate label
  INDUSTRY_REVENUE_LABEL: "~$5 Billion",

  // Pledge slider min/max (hard cap — no money collected, symbolic only)
  PLEDGE_MIN: 15,
  PLEDGE_MAX: 100,

  // ─── FIREBASE SETUP ───────────────────────────────────────────────────────
  // Required for pledges, comments, and story submissions to be shared across
  // all visitors. Without this, data stays in the user's browser only.
  //
  // Steps to get these values:
  //   1. Go to https://console.firebase.google.com → create a project
  //   2. Project Settings → Add app → Web → register → copy firebaseConfig
  //   3. Build → Realtime Database → Create Database → test mode
  //   4. Realtime Database → Rules → set .read and .write to true → Publish
  //   5. Paste values below
  //
  // Data paths used by this site:
  //   /pledgers      → { count, total }   shared pledge counter
  //   /comments      → { [id]: {...} }    reader comments
  //   /user_stories  → { [id]: {...} }    anonymous story submissions
  //
  FIREBASE_CONFIG: {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT.firebaseapp.com",
    databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "000000000000",
    appId:             "1:000000000000:web:0000000000000000000000"
  },
  // ──────────────────────────────────────────────────────────────────────────

  // Contact / submission email (optional — leave empty to hide form mailto)
  CONTACT_EMAIL: "",

  // Footer note
  FOOTER_NOTE: "This site generates zero revenue, is not a business activity, is not connected to any bank account or payment system, and will never generate earnings of any kind. Created by a private individual. All figures are illustrative industry-scale estimates.",
};
