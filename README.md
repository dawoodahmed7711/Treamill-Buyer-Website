# TreadCash Punjab (Next.js, App Router, JavaScript)

All application code lives inside `app/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp number, cities, FAQs, steps, images | `app/config/site.js` |
| Brand colors (CSS variables) | top of `app/globals.css` |
| Google Reviews link + manual reviews | `app/config/reviews.js` |

## Reviews page (`/reviews`)

Google does not allow reviews to be scraped from a share link, so reviews are loaded in one of two ways. No fake reviews are ever shown.

**Option A – Manual:** open `app/config/reviews.js`, and add real reviews to `manualReviews`
(name, rating, text, optional image and date). Optionally set `manualSummary`.

**Option B – Automatic (Google Places API):** copy `.env.example` to `.env.local`, fill in
`GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`. Reviews and the overall rating load on the
server and refresh hourly. (Google returns up to 5 reviews per place.)
On Vercel, add the same two variables under Project Settings → Environment Variables.

## Before going live

- Set your real domain in `app/config/site.js` (`url`).
- The brand colors were set from the existing look of the site; adjust the variables at the top of `app/globals.css` if any differ from your original.
