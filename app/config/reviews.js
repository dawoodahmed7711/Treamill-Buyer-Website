// ─────────────────────────────────────────────────────────────
//  REVIEWS CONFIGURATION  (the only file you need to edit)
// ─────────────────────────────────────────────────────────────

// 1) Paste your Google Reviews / Google Maps link here.
//    It powers the "Read all reviews on Google" and "Write a review" buttons.
export const GOOGLE_REVIEWS_URL = "https://share.google/EfKTkjTIwGVPxSCse";

// 2) OPTION A – Manual reviews.
//    Add REAL reviews copied from your Google profile. Nothing is shown until you add some.
//    Format:
//    {
//      name: "Customer Name",
//      image: "https://...",      // optional profile photo URL (else initials are shown)
//      rating: 5,                 // 1-5
//      text: "Review text...",
//      date: "March 2026",        // optional
//    },
export const manualReviews = [
  {
    name: "Emraan Wattoo",
    text: "I recently sold my second-hand treadmill, dumbbells, and a bench press set to Hateem Health & Fitness, and the experience was fantastic! Their team was highly professional, friendly, and transparent throughout the process. They offered a fair market price for my equipment, and the transaction was smooth and hassle-free",
  },
  {
    name: "muhammad ayaz khan",
    text: "Hatim Health Fitness purchased second-hand gym equipment from me and gave me a very good price. Their professionalism and way of dealing were excellent. Highly recommended",
  },
  {
    name: "javaid joyia",
    text: "I sold second hand trademil to hateem health fitness and it was a great experience.They appreciated the excellent condition and quality of the trademil.",
  },
  {
    name: "mubashir khan",
    text: "Hateem health fitness provides very good services.",
  },
  {
    name: "faheem ahmed",
    text: "We Buy Treadmill and cycel in good condition and reasonabel price",
  },
  {
    name: "ali raza",
    text: "Satisfied i will definitely buy again💓💓💓👍",
  },
];

// 3) OPTION B – Automatic via Google Places API.
//    Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local (see .env.example).
//    When both exist, reviews load on the server automatically.
//    Note: the Places API returns at most 5 reviews per place.

// Rating summary: shown only when real data exists (Places API, or set below manually).
export const manualSummary = null; // e.g. { rating: 4.9, total: 32 }

export const isReviewsUrlSet = () =>
  /^https?:\/\//i.test(GOOGLE_REVIEWS_URL);
