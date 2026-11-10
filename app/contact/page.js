import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ServiceAreas from "../components/ServiceAreas";
import { Reveal } from "../components/Reveal";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact TreadCash Punjab to sell your old treadmill. Call or WhatsApp us, or send your details and get a cash quote. Free visit and pickup across Punjab.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Get a cash quote for your treadmill</h1>
            <p>
              Tell us about your treadmill and we will reply on WhatsApp with an estimated price.
              Visit and pickup are free.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-wrap">
          <ContactInfo
            heading="Talk to us directly"
            intro="Prefer to chat? Call or message us on WhatsApp. We serve cities across Punjab and reply quickly."
          />
          <ContactForm />
        </div>
      </section>

      <ServiceAreas />
    </>
  );
}
