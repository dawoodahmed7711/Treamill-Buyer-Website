import { cities } from "../config/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function ServiceAreas() {
  return (
    <section className="section section-alt" id="cities" aria-labelledby="areas-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Service area</span>
          <h2 id="areas-title">Service available in Punjab only</h2>
          <p>
            We serve these cities in Punjab and nearby areas. We do not currently operate in other
            provinces.
          </p>
        </Reveal>

        <Stagger className="city-grid" as="ul">
          {cities.map((c) => (
            <StaggerItem key={c} as="li" className="city-chip">
              {c}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
