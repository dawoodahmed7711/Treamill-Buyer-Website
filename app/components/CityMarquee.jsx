import { cities } from "../config/site";

// Pure CSS marquee (no JS). Duplicated list gives a seamless loop.
export default function CityMarquee() {
  const doubled = [...cities, ...cities];
  return (
    <div className="marquee" aria-label="Cities we serve in Punjab">
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((c, i) => (
          <span key={`${c}-${i}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}
