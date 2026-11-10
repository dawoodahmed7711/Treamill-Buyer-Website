import { steps } from "../config/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="section" id="how" aria-labelledby="how-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 id="how-title">Sell your treadmill in 3 easy steps</h2>
        </Reveal>

        <Stagger className="steps" as="ol">
          {steps.map((s, i) => (
            <StaggerItem key={s.title} as="li" className="step-card">
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
