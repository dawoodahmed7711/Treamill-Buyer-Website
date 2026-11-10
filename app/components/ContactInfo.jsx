import { FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import { site, whatsappLink } from "../config/site";
import { Reveal } from "./Reveal";

export default function ContactInfo({ heading, intro, as: Heading = "h2" }) {
  return (
    <Reveal className="contact-info">
      <Heading>{heading}</Heading>
      <p>{intro}</p>

      <ul className="info-list">
        <li className="info-item">
          <span className="info-icon" aria-hidden="true"><FiPhone/></span>
          <div>
            <small>Phone</small>
            <strong><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></strong>
          </div>
        </li>
        <li className="info-item">
          <span className="info-icon" aria-hidden="true"><FiMapPin/></span>
          <div>
            <small>Service area</small>
            <strong>{site.serviceArea}</strong>
          </div>
        </li>
      </ul>

      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
        <FiMessageCircle /> Chat on WhatsApp
      </a>
    </Reveal>
  );
}
