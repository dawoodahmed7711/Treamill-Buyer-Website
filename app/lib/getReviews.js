import { manualReviews, manualSummary } from "../config/reviews";

// Loads reviews on the server.
// Priority: Google Places API (if env vars are set) → manual reviews from config/reviews.js.
// Never invents data: if neither source has anything, it returns an empty list.
export async function getReviews() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (key && placeId) {
    try {
      const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 }, // refresh hourly
      });

      if (res.ok) {
        const data = await res.json();
        const reviews = (data.reviews || []).map((r) => ({
          name: r.authorAttribution?.displayName || "Google user",
          image: r.authorAttribution?.photoUri || null,
          rating: r.rating || 5,
          text: r.text?.text || r.originalText?.text || "",
          date: r.relativePublishTimeDescription || null,
        }));

        if (reviews.length > 0) {
          return {
            source: "google",
            reviews: reviews.filter((r) => r.text),
            summary:
              typeof data.rating === "number"
                ? { rating: data.rating, total: data.userRatingCount ?? reviews.length }
                : null,
          };
        }
      } else {
        console.error("Google Places API error:", res.status);
      }
    } catch (err) {
      console.error("Google Places API request failed:", err);
    }
  }

  return { source: "manual", reviews: manualReviews, summary: manualSummary };
}
