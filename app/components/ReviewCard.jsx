import Image from "next/image";

export function Stars({ rating }) {
  const rounded = Math.round(rating);
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rounded ? "" : "off"} aria-hidden="true">★</span>
      ))}
    </span>
  );
}

export default function ReviewCard({ review }) {
  const initial = (review.name || "?").trim().charAt(0).toUpperCase();

  return (
    <article className="review-card">
      <div className="review-head">
        <div className="avatar">
          {review.image ? (
            <Image src={review.image} alt="" fill sizes="48px" />
          ) : (
            <span aria-hidden="true">{initial}</span>
          )}
        </div>
        <div>
          <div className="review-name">{review.name}</div>
          {review.date && <div className="review-date">{review.date}</div>}
        </div>
      </div>
      {review.rating ? <Stars rating={review.rating} /> : null}
      <p className="review-text">{review.text}</p>
    </article>
  );
}
