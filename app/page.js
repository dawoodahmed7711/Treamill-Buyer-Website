import Hero from "./components/Hero";
import CityMarquee from "./components/CityMarquee";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import ServiceAreas from "./components/ServiceAreas";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";

export const metadata = {
  title: { absolute: "Sell Old Treadmill in Punjab | Cash on Spot – TreadCash Punjab" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CityMarquee />
      <HowItWorks />
      <Services />
      <ServiceAreas />

      <section className="section section-alt" id="sell" aria-labelledby="sell-title">
        <div className="container contact-wrap">
          <ContactInfo
            heading="Send us your treadmill details"
            intro="Fill in the form and it goes straight to our WhatsApp. We reply quickly."
          />
          <ContactForm />
        </div>
      </section>

      <FAQ />
    </>
  );
}
