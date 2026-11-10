import ReviewCard, { Stars } from "../components/ReviewCard";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { getReviews } from "../lib/getReviews";
import { GOOGLE_REVIEWS_URL, isReviewsUrlSet } from "../config/reviews";
import { whatsappLink } from "../config/site";

export const metadata = {
  title: "Customer Reviews",
  description:
    "Read what customers say about selling their old treadmills to TreadCash Punjab. Free visit, cash on the spot, free pickup across Punjab.",
  alternates: { canonical: "/reviews" },
};

export const revalidate = 3600;

export default async function ReviewsPage() {
  const { reviews, summary } = await getReviews();
  const hasReviews = reviews.length > 0;
  const linkReady = isReviewsUrlSet();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Customer reviews</span>
            <h1>What our customers say</h1>
            <p>
              Real feedback from people across Punjab who sold their old treadmills to us for cash.
            </p>

            {summary && (
              <div className="rating-summary">
                <span className="rating-big">{summary.rating.toFixed(1)}</span>
                <div className="rating-meta">
                  <Stars rating={summary.rating} />
                  <div>Based on {summary.total} Google reviews</div>
                </div>
              </div>
            )}

            {linkReady && (
              <div className="reviews-actions" style={{ marginTop: 28 }}>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Reviews on Google
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Customer reviews">
        <div className="container">
          {hasReviews ? (
            <Stagger className="review-grid">
              {reviews.map((r, i) => (
                <StaggerItem key={`${r.name}-${i}`}>
                  <ReviewCard review={r} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <Reveal className="empty-state">
              <div className="big" aria-hidden="true">⭐</div>
              <h2>Reviews are on their way</h2>
              <p>
                Customer reviews will appear here. In the meantime you can read every review
                directly on Google, or message us on WhatsApp.
              </p>
              <div className="reviews-actions" style={{ marginTop: 0 }}>
                {linkReady && (
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Reviews on Google
                  </a>
                )}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          )}

          {hasReviews && linkReady && (
            <div className="reviews-actions">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Reviews on Google
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
