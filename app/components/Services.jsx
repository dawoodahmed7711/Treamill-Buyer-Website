import Image from "next/image";
import { images } from "../config/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import how from '@/public/display.png'

const types = ["Manual treadmills", "Motorized treadmills", "Home-use treadmills", "Commercial treadmills"];

export default function Services() {
  return (
    <>
      <section className="section section-alt" id="services" aria-labelledby="services-title">
        <div className="container services-grid">
          <Reveal className="services-copy">
            <span className="eyebrow">What we buy</span>
            <h2 id="services-title">Which treadmills do we buy?</h2>
            <p>
              Manual, motorized, home-use and commercial treadmills of any brand. Lightly used or
              old, just send us the details.
            </p>
            <ul className="type-list">
              {types.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="gallery-item" style={{ aspectRatio: "4 / 3.2" }}>
              <Image
                src={how}
                alt={images.gallery[0].alt}
                fill
                sizes="(max-width: 860px) 100vw, 520px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Gallery">
        <div className="container">
          <Stagger className="gallery">
            {images.gallery.map((img) => (
              <StaggerItem key={img.id} className="gallery-item">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 600px) 100vw, 560px" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
